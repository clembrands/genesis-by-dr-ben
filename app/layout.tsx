import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const questrial = localFont({
  src: '../public/fonts/Questrial-Regular.ttf',
  variable: '--font-sans',
});

const mansory = localFont({
  src: '../public/fonts/Mansory-SemiBold.otf',
  variable: '--font-serif',
  weight: '600',
});

const hamburgHand = localFont({
  src: '../public/fonts/HamburgHand-Light.otf',
  variable: '--font-display',
  weight: '300',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://genesisbydrben.com'),
  title: 'Genesis by Dr. Ben Reyhani - Cosmetic & Implant Dentist',
  description: 'Transform your smile with Dr. Ben Reyhani, a boutique cosmetic and implant dentist in West Hollywood. Expert smile makeovers, veneers, and dental implants.',
  keywords: 'cosmetic dentist, dental implants, veneers, smile makeover, West Hollywood, Dr. Ben Reyhani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://genesisbydrben.com',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Genesis by Dr. Ben Reyhani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genesis by Dr. Ben Reyhani - Cosmetic & Implant Dentist',
    description: 'Transform your smile with expert cosmetic dentistry and dental implants in West Hollywood.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${questrial.variable} ${mansory.variable} ${hamburgHand.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className="min-h-screen bg-[#383B42] text-white flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
