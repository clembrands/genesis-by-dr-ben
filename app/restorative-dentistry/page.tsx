import type { Metadata } from 'next';
import RestorationContent from './page-content';

export const metadata: Metadata = {
  title: 'Restorative Dentistry West Hollywood | Genesis by Dr. Ben Reyhani',
  description: 'Expert restorative dentistry by Dr. Ben Reyhani in West Hollywood. Dental crowns, fillings, bridges, and full-mouth restoration with artistry and precision.',
  alternates: {
    canonical: 'https://genesisbydrben.com/restorative-dentistry',
  },
  openGraph: {
    title: 'Restorative Dentistry West Hollywood | Genesis by Dr. Ben Reyhani',
    description: 'Expert restorative dentistry by Dr. Ben Reyhani in West Hollywood. Dental crowns, fillings, bridges, and full-mouth restoration with artistry and precision.',
    url: 'https://genesisbydrben.com/restorative-dentistry',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function RestorativeDentistry() {
  return <RestorationContent />;
}
