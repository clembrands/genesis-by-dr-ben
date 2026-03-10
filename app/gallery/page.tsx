import type { Metadata } from 'next';
import GalleryContent from './page-content';

export const metadata: Metadata = {
  title: 'Smile Gallery | Genesis by Dr. Ben Reyhani - West Hollywood',
  description: 'View stunning before and after smile transformations by Dr. Ben Reyhani at Genesis in West Hollywood. See real patient results from veneers, implants, and cosmetic dentistry.',
  alternates: { canonical: 'https://genesisbydrben.com/gallery' },
  openGraph: {
    title: 'Smile Gallery | Genesis by Dr. Ben Reyhani - West Hollywood',
    description: 'View stunning before and after smile transformations by Dr. Ben Reyhani at Genesis in West Hollywood.',
    url: 'https://genesisbydrben.com/gallery',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function Gallery() {
  return <GalleryContent />;
}
