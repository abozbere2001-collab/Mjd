
"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { NabdAlMalaebLogo } from '@/components/icons/NabdAlMalaebLogo';
import { GoogleIcon } from '@/components/icons/GoogleIcon';
import { useFirestore } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { handleNewUser, initiateGoogleSignInRedirect } from '@/lib/firebase-client';
import { Capacitor } from '@capacitor/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { getAuth, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';

export const GUEST_MODE_KEY = 'goalstack_guest_mode_active';

export function WelcomeScreen() {
  const { toast } = useToast();
  const { db } = useFirestore();
  const [isLoading, setIsLoading] = useState<false | 'google' | 'guest'>(false);

  const handleGoogleLogin = async () => {
    if (!db) {
        toast({ variant: 'destructive', title: 'خطأ', description: 'خدمة قاعدة البيانات غير متاحة.' });
        return;
    }
    setIsLoading('google');

    try {
      if (Capacitor.isNativePlatform()) {
        // Native Mobile Flow
        const result = await FirebaseAuthentication.signInWithGoogle();
        const credential = GoogleAuthProvider.credential(result.credential?.idToken);
        const auth = getAuth();
        const userCredential = await signInWithCredential(auth, credential);
        await handleNewUser(userCredential.user, db);
      } else {
        // Web Flow
        await initiateGoogleSignInRedirect();
      }
    } catch (error: any) {
        // Don't show toast for "closed" error, which happens when user cancels the native dialog
        if (error.message && !error.message.includes('closed')) {
            console.error("Google Sign-In Error", error);
            toast({
                variant: 'destructive',
                title: 'فشل تسجيل الدخول',
                description: 'حدث خطأ أثناء محاولة تسجيل الدخول باستخدام جوجل.',
            });
        }
    } finally {
        setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    setIsLoading('guest');
    try {
        localStorage.setItem(GUEST_MODE_KEY, 'true');
        window.location.reload();
    } catch(e: any) {
        console.error("Guest mode error:", e);
        toast({
            variant: 'destructive',
            title: 'خطأ',
            description: 'فشل تفعيل وضع الزائر. يرجى المحاولة مرة أخرى.',
        });
        setIsLoading(false);
    }
  }

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <NabdAlMalaebLogo className="h-24 w-24 mb-4" />
        <h1 className="text-3xl font-bold mb-2 font-headline text-primary">أهلاً بك في نبض الملاعب</h1>
        <p className="text-muted-foreground mb-8">عالم كرة القدم بين يديك. سجل الدخول لمزامنة مفضلاتك، أو تصفح كزائر.</p>
        
        <div className="w-full max-w-xs space-y-4">
            <Button 
              onClick={handleGoogleLogin} 
              className="w-full" 
              size="lg"
              disabled={!!isLoading}
            >
              {isLoading === 'google' ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <GoogleIcon className="h-5 w-5 mr-2" />
                  المتابعة باستخدام جوجل
                </>
              )}
            </Button>
            <Button
                variant="ghost"
                onClick={handleGuestLogin}
                className="w-full"
                disabled={!!isLoading}
            >
               {isLoading === 'guest' ? <Loader2 className="h-5 w-5 animate-spin"/> : 'تصفح كزائر'}
            </Button>
        </div>

        <p className="mt-8 text-xs text-muted-foreground/80 px-4">
          بالاستمرار، أنت توافق على شروط الخدمة و سياسة الخصوصية.
        </p>
      </div>
    </div>
  );
}
