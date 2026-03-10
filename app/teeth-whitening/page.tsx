import type { Metadata } from 'next';
import TeethWhiteningContent from './page-content';

export const metadata: Metadata = {
  title: 'Professional Teeth Whitening West Hollywood | Genesis by Dr. Ben Reyhani',
  description: 'Achieve a brilliantly white smile with professional teeth whitening at Genesis in West Hollywood. Safe, fast, and dramatic results by Dr. Ben Reyhani.',
  alternates: {
    canonical: 'https://genesisbydrben.com/teeth-whitening',
  },
  openGraph: {
    title: 'Professional Teeth Whitening West Hollywood | Genesis by Dr. Ben Reyhani',
    description: 'Achieve a brilliantly white smile with professional teeth whitening at Genesis in West Hollywood. Safe, fast, and dramatic results by Dr. Ben Reyhani.',
    url: 'https://genesisbydrben.com/teeth-whitening',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function TeethWhitening() {
  return <TeethWhiteningContent />;
}
