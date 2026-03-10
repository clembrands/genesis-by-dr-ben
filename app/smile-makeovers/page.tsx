import type { Metadata } from 'next';
import SmileMakeoversContent from './page-content';

export const metadata: Metadata = {
  title: 'Smile Makeover West Hollywood | Genesis by Dr. Ben Reyhani',
  description: 'Design your dream smile with a bespoke smile makeover by Dr. Ben Reyhani in West Hollywood. Combining veneers, whitening, and cosmetic dentistry for stunning results.',
  alternates: {
    canonical: 'https://genesisbydrben.com/smile-makeovers',
  },
  openGraph: {
    title: 'Smile Makeover West Hollywood | Genesis by Dr. Ben Reyhani',
    description: 'Design your dream smile with a bespoke smile makeover by Dr. Ben Reyhani in West Hollywood. Combining veneers, whitening, and cosmetic dentistry for stunning results.',
    url: 'https://genesisbydrben.com/smile-makeovers',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function SmileMakeovers() {
  return <SmileMakeoversContent />;
}
