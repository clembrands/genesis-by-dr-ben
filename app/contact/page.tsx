import type { Metadata } from 'next';
import ContactContent from './page-content';

export const metadata: Metadata = {
  title: 'Contact Us | Genesis by Dr. Ben Reyhani - West Hollywood',
  description: 'Contact Genesis by Dr. Ben Reyhani in West Hollywood. Schedule a consultation, call (310)-388-3404, or visit us at 8797 Beverly Blvd, Suite 200.',
  alternates: { canonical: 'https://genesisbydrben.com/contact' },
  openGraph: {
    title: 'Contact Us | Genesis by Dr. Ben Reyhani - West Hollywood',
    description: 'Contact Genesis by Dr. Ben Reyhani in West Hollywood. Schedule a consultation, call (310)-388-3404, or visit us at 8797 Beverly Blvd, Suite 200.',
    url: 'https://genesisbydrben.com/contact',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function Contact() {
  return <ContactContent />;
}
