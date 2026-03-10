import type { Metadata } from 'next';
import CosmeticDentistryContent from './page-content';

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry West Hollywood | Genesis by Dr. Ben Reyhani',
  description: 'Transform your smile with expert cosmetic dentistry by Dr. Ben Reyhani. Veneers, smile design, and reconstructive excellence in West Hollywood, CA.',
  alternates: {
    canonical: 'https://genesisbydrben.com/cosmetic-dentistry',
  },
  openGraph: {
    title: 'Cosmetic Dentistry West Hollywood | Genesis by Dr. Ben Reyhani',
    description: 'Transform your smile with expert cosmetic dentistry by Dr. Ben Reyhani. Veneers, smile design, and reconstructive excellence in West Hollywood, CA.',
    url: 'https://genesisbydrben.com/cosmetic-dentistry',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function CosmeticDentistry() {
  return <CosmeticDentistryContent />;
}
