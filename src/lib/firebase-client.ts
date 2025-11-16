
"use client";

import { 
  signOut as firebaseSignOut, 
  updateProfile,
  type User, 
  getAuth,
  signInWithRedirect,
  getRedirectResult,
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
            if (hasLocalFavorites) {
                await setDoc(favoritesRef, localFavorites, { merge: true });
                clearLocalFavorites();
            }
            await firestoreUpdateDoc(userRef, {
                displayName: user.displayName,
                photoURL: user.photoURL,
            });

            return; 
        }

        const batch = writeBatch(firestore);

        const displayName = user.displayName || `مستخدم_${user.uid.substring(0, 5)}`;
        const photoURL = user.photoURL || '';
        const userProfileData: UserProfile = {
            displayName: displayName,
            email: user.email || 'N/A',
            photoURL: photoURL,
            isProUser: false,
            onboardingComplete: hasLocalFavorites,
        };
        batch.set(userRef, userProfileData);

        const favoritesData: Partial<Favorites> = { userId: user.uid };
        if (hasLocalFavorites) {
            Object.assign(favoritesData, localFavorites);
        }
        batch.set(favoritesRef, favoritesData);
        await batch.commit();

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

export const initiateGoogleSignInRedirect = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
};

export const handleGoogleRedirectResult = async (firestore: Firestore) => {
    const auth = getAuth();
    try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
            await handleNewUser(result.user, firestore);
            return result.user;
        }
    } catch (error) {
        console.error("Google Sign-In Redirect Error", error);
    }
    return null;
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

    await updateProfile(user, { displayName: newDisplayName });

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
        });
};
