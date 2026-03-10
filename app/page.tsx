import type { Metadata } from 'next';
import HomeContent from './page-content';

export const metadata: Metadata = {
  title: 'Cosmetic Dentist & Smile Makeovers | Genesis by Dr. Ben Reyhani',
  description: 'Experience luxury cosmetic dentistry with Dr. Ben Reyhani. Expert smile design, veneers, implants, and full mouth reconstructions in Dallas, TX.',
  keywords: 'cosmetic dentist, smile makeover, dental implants, veneers, Dallas, Dr. Ben Reyhani',
  alternates: {
    canonical: 'https://genesisbydrben.com',
  },
  openGraph: {
    title: 'Cosmetic Dentist & Smile Makeovers | Genesis by Dr. Ben Reyhani',
    description: 'Transform your smile with expert cosmetic dentistry by Dr. Ben Reyhani.',
    url: 'https://genesisbydrben.com',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Genesis by Dr. Ben Reyhani',
      },
    ],
    siteName: 'Genesis by Dr. Ben Reyhani',
  },
};

export default function Home() {
  return <HomeContent />;
}
