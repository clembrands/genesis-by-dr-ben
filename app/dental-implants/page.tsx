import type { Metadata } from 'next';
import DentalImplantsContent from './page-content';

export const metadata: Metadata = {
  title: 'Dental Implants West Hollywood | Genesis by Dr. Ben Reyhani',
  description: 'Premium dental implants by Dr. Ben Reyhani in West Hollywood. Single implants, implant-retained dentures, and All-on-X solutions with natural-looking results.',
  alternates: {
    canonical: 'https://genesisbydrben.com/dental-implants',
  },
  openGraph: {
    title: 'Dental Implants West Hollywood | Genesis by Dr. Ben Reyhani',
    description: 'Premium dental implants by Dr. Ben Reyhani in West Hollywood. Single implants, implant-retained dentures, and All-on-X solutions with natural-looking results.',
    url: 'https://genesisbydrben.com/dental-implants',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function DentalImplants() {
  return <DentalImplantsContent />;
}
