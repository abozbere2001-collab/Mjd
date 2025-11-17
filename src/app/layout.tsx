
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import { Cairo } from 'next/font/google';
import React from 'react';
import { ClientLayout } from './client-layout';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'نبض الملاعب',
  description: 'عالم كرة القدم بين يديك',
  manifest: "/manifest.json",
  icons: {
    apple: "/icons/icon-192x192.png",
    icon: "/icons/icon-192x192.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
        <head>
          <meta name="theme-color" content="#29ABE2" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.register('service-worker.js')
                    .then(() => console.log("Service Worker Registered"))
                    .catch(err => console.log("SW Error:", err));
                }
              `,
            }}
          />
        </head>
        <body className={`${cairo.variable} font-body antialiased`}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                themes={['light', 'dark']}
            >
              <ClientLayout>
                {children}
              </ClientLayout>
              <Toaster />
            </ThemeProvider>
        </body>
    </html>
  );
}
