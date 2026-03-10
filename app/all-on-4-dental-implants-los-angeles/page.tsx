import type { Metadata } from 'next';
import AllOn4Content from './page-content';

export const metadata: Metadata = {
  title: 'All-on-4 Dental Implants Los Angeles | Genesis by Dr. Ben Reyhani',
  description: 'All-on-4 dental implants in West Hollywood by Dr. Ben Reyhani. Full arch restoration in one day. Designed for aesthetics, built to last. Request your consultation.',
  alternates: {
    canonical: 'https://genesisbydrben.com/all-on-4-dental-implants-los-angeles',
  },
  openGraph: {
    title: 'All-on-4 Dental Implants Los Angeles | Genesis by Dr. Ben Reyhani',
    description: 'All-on-4 dental implants in West Hollywood by Dr. Ben Reyhani. Full arch restoration in one day. Designed for aesthetics, built to last.',
    url: 'https://genesisbydrben.com/all-on-4-dental-implants-los-angeles',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function AllOn4() {
  return <AllOn4Content />;
}
