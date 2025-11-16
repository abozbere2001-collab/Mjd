
"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { NabdAlMalaebLogo } from '@/components/icons/NabdAlMalaebLogo';
import { GoogleIcon } from '@/components/icons/GoogleIcon';
import { useFirestore } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { initiateGoogleSignInRedirect, handleGoogleRedirectResult } from '@/lib/firebase-client';

export const GUEST_MODE_KEY = 'goalstack_guest_mode_active';

export function WelcomeScreen() {
  const { toast } = useToast();
  const { db } = useFirestore();
  const [isLoading, setIsLoading] = useState<'google' | 'guest' | 'redirect' | false>(false);

  useEffect(() => {
    const handleRedirect = async () => {
      if (!db) return;
      setIsLoading('redirect');
      try {
        await handleGoogleRedirectResult(db);
        // On successful sign-in, the onAuthStateChanged listener in the provider
        // will automatically handle the UI update, so we don't need to do anything here.
      } catch (error) {
        console.error("Redirect handler error", error);
        toast({
          variant: 'destructive',
          title: 'فشل تسجيل الدخول',
          description: 'حدث خطأ أثناء معالجة نتيجة تسجيل الدخول.',
        });
      } finally {
        setIsLoading(false);
      }
    };
    handleRedirect();
  }, [db, toast]);


  const handleGoogleLogin = async () => {
    if (!db) {
        toast({ variant: 'destructive', title: 'خطأ', description: 'خدمة قاعدة البيانات غير متاحة.' });
        return;
    }
    setIsLoading('google');
    await initiateGoogleSignInRedirect();
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

  // If the page is loading from a redirect, show a full-screen loader.
  if (isLoading === 'redirect') {
    return (
       <div className="flex flex-col items-center justify-center h-screen bg-background text-center">
            <NabdAlMalaebLogo className="h-24 w-24 mb-4" />
            <h1 className="text-2xl font-bold font-headline mb-8 text-primary">جارٍ تسجيل الدخول...</h1>
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
    )
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
