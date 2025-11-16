
"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { NabdAlMalaebLogo } from '@/components/icons/NabdAlMalaebLogo';
import { GoogleIcon } from '@/components/icons/GoogleIcon';
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { useFirestore } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { handleNewUser, processRedirectResult } from '@/lib/firebase-client';

export const GUEST_MODE_KEY = 'goalstack_guest_mode_active';

export function WelcomeScreen() {
  const { toast } = useToast();
  const { db } = useFirestore();
  const [isLoading, setIsLoading] = useState<false | 'google' | 'guest' | 'redirect'>(false);

  // Check for redirect result on component mount
  useEffect(() => {
    if (!db) return;
    setIsLoading('redirect');
    processRedirectResult(db)
      .catch((error) => {
        console.error("Login redirect error", error);
        toast({
          variant: 'destructive',
          title: 'خطأ في تسجيل الدخول',
          description: 'حدث خطأ أثناء إتمام عملية تسجيل الدخول.',
        });
      })
      .finally(() => {
        // Only stop loading if it was in the redirect state.
        // This prevents flicker if the user arrives directly.
        setIsLoading(current => (current === 'redirect' ? false : current));
      });
  }, [db, toast]);

  const handleGoogleLogin = async () => {
    localStorage.removeItem(GUEST_MODE_KEY);
    setIsLoading('google');
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    // Use signInWithRedirect for a mobile-friendly flow
    await signInWithRedirect(auth, provider);
    // The browser will redirect. The useEffect will handle the result when the app reloads.
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

  // Show a loading indicator if processing a redirect
  if (isLoading === 'redirect') {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="mt-4 text-muted-foreground">جاري إتمام تسجيل الدخول...</p>
      </div>
    );
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
