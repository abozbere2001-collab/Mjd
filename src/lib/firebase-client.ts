
"use client";

import { 
  signOut as firebaseSignOut, 
  updateProfile,
  type User, 
  getAuth,
  signInWithCredential,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc, getDoc, Firestore, writeBatch, serverTimestamp, updateDoc as firestoreUpdateDoc } from 'firebase/firestore';
import type { UserProfile, UserScore, Favorites } from './types';
import { FirestorePermissionError } from '@/firebase/errors';
import { errorEmitter } from '@/firebase/error-emitter';
import { getLocalFavorites, clearLocalFavorites, GUEST_MODE_KEY } from './local-favorites';
import { getDatabase, ref, set } from 'firebase/database';


export const handleNewUser = async (user: User, firestore: Firestore) => {
    const userRef = doc(firestore, 'users', user.uid);
    const favoritesRef = doc(firestore, 'users', user.uid, 'favorites', 'data');
    const localFavorites = getLocalFavorites();
    const hasLocalFavorites = Object.keys(localFavorites.teams || {}).length > 0 || Object.keys(localFavorites.leagues || {}).length > 0;

    try {
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
            // User already exists, merge local favorites if any
            if (hasLocalFavorites) {
                await setDoc(favoritesRef, localFavorites, { merge: true });
                clearLocalFavorites();
            }
             // Also update their profile info in case it changed in Google
            await firestoreUpdateDoc(userRef, {
                displayName: user.displayName,
                photoURL: user.photoURL,
            });

            return; // Exit if user exists
        }

        // --- This is a new user ---
        const batch = writeBatch(firestore);

        // 1. Create User Profile
        const displayName = user.displayName || `مستخدم_${user.uid.substring(0, 5)}`;
        const photoURL = user.photoURL || '';
        const userProfileData: UserProfile = {
            displayName: displayName,
            email: user.email || 'N/A',
            photoURL: photoURL,
            isProUser: false,
            // If they had local favorites, they completed the first step of onboarding
            onboardingComplete: hasLocalFavorites,
        };
        batch.set(userRef, userProfileData);

        // 2. Create Favorites Document
        const favoritesData: Partial<Favorites> = { userId: user.uid };
        if (hasLocalFavorites) {
            Object.assign(favoritesData, localFavorites);
        }
        batch.set(favoritesRef, favoritesData);
        
        // Commit all writes at once
        await batch.commit();

        // Clear local data after successful migration
        if (hasLocalFavorites) {
            clearLocalFavorites();
        }

    } catch (error: any) {
        const permissionError = new FirestorePermissionError({
            path: `users/${user.uid}`,
            operation: 'write',
            requestResourceData: {
                profile: { displayName: user.displayName, email: user.email },
                favorites: localFavorites
            }
        });
        errorEmitter.emit('permission-error', permissionError);
        console.error("Failed to create new user documents:", error);
    }
};


export const signOut = (): Promise<void> => {
    if (typeof window !== 'undefined' && localStorage.getItem(GUEST_MODE_KEY)) {
        localStorage.removeItem(GUEST_MODE_KEY);
        window.location.reload();
        return Promise.resolve();
    }
    const auth = getAuth();
    return firebaseSignOut(auth);
};


export const updateUserDisplayName = async (user: User, newDisplayName: string, db: Firestore): Promise<void> => {
    if (!user) throw new Error("User not authenticated.");
    if (!db) {
        console.error("Firestore not available for updateUserDisplayName");
        throw new Error("Database service is not available.");
    }

    // Update Firebase Auth profile
    await updateProfile(user, { displayName: newDisplayName });

    // Update Firestore user document
    const userRef = doc(db, 'users', user.uid);
    
    const userProfileUpdateData = { displayName: newDisplayName };
    firestoreUpdateDoc(userRef, userProfileUpdateData)
        .catch((serverError) => {
            const permissionError = new FirestorePermissionError({
                path: userRef.path,
                operation: 'update',
                requestResourceData: userProfileUpdateData,
            });
            errorEmitter.emit('permission-error', permissionError);
            // We don't re-throw here, as the auth profile update already succeeded.
            // The global error handler will catch this for development.
        });
};
