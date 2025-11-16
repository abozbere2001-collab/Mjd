
"use client";

import React from 'react';
import { FirebaseProvider } from '@/firebase';
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKQK4mfCGlSCwJS7oOdMhJa0SIJAv3nXM",
  authDomain: "nabd-d71ab.firebaseapp.com",
  projectId: "nabd-d71ab",
  storageBucket: "nabd-d71ab.appspot.com",
  messagingSenderId: "529236633123",
  appId: "1:529236633123:web:7d4945daae4d51038e3396",
  measurementId: "G-X5SY2K798F"
};

interface FirebaseServices {
    firebaseApp: FirebaseApp;
    auth: Auth;
    firestore: Firestore;
}

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [services, setServices] = React.useState<FirebaseServices | null>(null);

  React.useEffect(() => {
    // This effect runs only on the client side, preventing hydration errors.
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    
    setServices({ firebaseApp: app, auth, firestore });

  }, []); // Empty dependency array ensures this runs only once on mount.


  if (!services) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        {/* You can put a loading spinner here if you want */}
      </div>
    );
  }

  return (
    <FirebaseProvider
      firebaseApp={services.firebaseApp}
      auth={services.auth}
      firestore={services.firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
