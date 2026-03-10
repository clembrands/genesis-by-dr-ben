import type { Metadata } from 'next';
import FullMouthReconstructionContent from './page-content';

export const metadata: Metadata = {
  title: 'Full Mouth Reconstruction Los Angeles | Genesis by Dr. Ben Reyhani',
  description: 'Restore your complete oral health with full mouth reconstruction by Dr. Ben Reyhani. Comprehensive care combining implants, crowns, and cosmetic dentistry in West Hollywood.',
  alternates: {
    canonical: 'https://genesisbydrben.com/full-mouth-reconstruction',
  },
  openGraph: {
    title: 'Full Mouth Reconstruction Los Angeles | Genesis by Dr. Ben Reyhani',
    description: 'Restore your complete oral health with full mouth reconstruction by Dr. Ben Reyhani. Comprehensive care combining implants, crowns, and cosmetic dentistry in West Hollywood.',
    url: 'https://genesisbydrben.com/full-mouth-reconstruction',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function FullMouthReconstruction() {
  return <FullMouthReconstructionContent />;
}
