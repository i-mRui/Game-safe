'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from './I18nProvider'; // Import the new client component
import { useTranslation } from 'react-i18next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={i18n.language} dir={dir}>
      <head>
        <title>GameSafe</title>
      </head> 
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
