import type { Metadata } from 'next';
import PorcelainVeneersContent from './page-content';

export const metadata: Metadata = {
  title: 'Porcelain Veneers West Hollywood | Genesis by Dr. Ben Reyhani',
  description: 'Transform your smile with custom porcelain veneers by Dr. Ben Reyhani in West Hollywood. Natural-looking, long-lasting results crafted with artistry and precision.',
  alternates: {
    canonical: 'https://genesisbydrben.com/porcelain-veneers',
  },
  openGraph: {
    title: 'Porcelain Veneers West Hollywood | Genesis by Dr. Ben Reyhani',
    description: 'Transform your smile with custom porcelain veneers by Dr. Ben Reyhani in West Hollywood. Natural-looking, long-lasting results crafted with artistry and precision.',
    url: 'https://genesisbydrben.com/porcelain-veneers',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function PorcelainVeneers() {
  return <PorcelainVeneersContent />;
}
