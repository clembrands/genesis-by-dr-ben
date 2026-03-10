import type { Metadata } from 'next';
import BeverlyHillsContent from './page-content';

export const metadata: Metadata = {
  title: 'Cosmetic Dentist Near Beverly Hills | Genesis by Dr. Ben Reyhani',
  description: 'Looking for a premier cosmetic dentist near Beverly Hills? Genesis by Dr. Ben Reyhani offers veneers, implants, and smile makeovers minutes from Beverly Hills.',
  alternates: {
    canonical: 'https://genesisbydrben.com/cosmetic-dentist-beverly-hills',
  },
  openGraph: {
    title: 'Cosmetic Dentist Near Beverly Hills | Genesis by Dr. Ben Reyhani',
    description: 'Looking for a premier cosmetic dentist near Beverly Hills? Genesis by Dr. Ben Reyhani offers veneers, implants, and smile makeovers minutes from Beverly Hills.',
    url: 'https://genesisbydrben.com/cosmetic-dentist-beverly-hills',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function CosmeticDentistBeverlyHills() {
  return <BeverlyHillsContent />;
}
