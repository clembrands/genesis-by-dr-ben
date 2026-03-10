import type { Metadata } from 'next';
import LosAngelesContent from './page-content';

export const metadata: Metadata = {
  title: 'Premier Cosmetic Dentist in Los Angeles | Genesis by Dr. Ben Reyhani',
  description: 'Genesis by Dr. Ben Reyhani offers world-class cosmetic dentistry in the heart of Los Angeles. Veneers, dental implants, and smile makeovers in West Hollywood.',
  alternates: {
    canonical: 'https://genesisbydrben.com/cosmetic-dentist-los-angeles',
  },
  openGraph: {
    title: 'Premier Cosmetic Dentist in Los Angeles | Genesis by Dr. Ben Reyhani',
    description: 'Genesis by Dr. Ben Reyhani offers world-class cosmetic dentistry in the heart of Los Angeles. Veneers, dental implants, and smile makeovers in West Hollywood.',
    url: 'https://genesisbydrben.com/cosmetic-dentist-los-angeles',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function CosmeticDentistLosAngeles() {
  return <LosAngelesContent />;
}
