import type { Metadata } from 'next';
import AboutContent from './page-content';

export const metadata: Metadata = {
  title: 'About Dr. Ben Reyhani | Genesis Cosmetic Dentist West Hollywood',
  description: 'Meet Dr. Ben Reyhani, a leading cosmetic and implant dentist in West Hollywood. Learn about his philosophy, experience, and commitment to artistry in dentistry.',
  alternates: {
    canonical: 'https://genesisbydrben.com/about',
  },
  openGraph: {
    title: 'About Dr. Ben Reyhani | Genesis Cosmetic Dentist West Hollywood',
    description: 'Meet Dr. Ben Reyhani, a leading cosmetic and implant dentist in West Hollywood. Learn about his philosophy, experience, and commitment to artistry in dentistry.',
    url: 'https://genesisbydrben.com/about',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function About() {
  return <AboutContent />;
}
