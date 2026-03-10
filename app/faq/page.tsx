import type { Metadata } from 'next';
import FAQContent from './page-content';

export const metadata: Metadata = {
  title: 'FAQ | Genesis by Dr. Ben Reyhani - Cosmetic Dentist West Hollywood',
  description: 'Frequently asked questions about cosmetic dentistry, veneers, dental implants, and more at Genesis by Dr. Ben Reyhani in West Hollywood, CA.',
  alternates: {
    canonical: 'https://genesisbydrben.com/faq',
  },
  openGraph: {
    title: 'FAQ | Genesis by Dr. Ben Reyhani - Cosmetic Dentist West Hollywood',
    description: 'Frequently asked questions about cosmetic dentistry, veneers, dental implants, and more at Genesis by Dr. Ben Reyhani in West Hollywood, CA.',
    url: 'https://genesisbydrben.com/faq',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function FAQ() {
  return <FAQContent />;
}
