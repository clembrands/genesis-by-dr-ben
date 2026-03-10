import type { Metadata } from 'next';
import BlogContent from './page-content';

export const metadata: Metadata = {
  title: 'Blog - Cosmetic Dentistry Insights | Genesis by Dr. Ben Reyhani',
  description: 'Stay informed with the latest in cosmetic dentistry, smile makeovers, and oral health tips from Dr. Ben Reyhani at Genesis in West Hollywood.',
  alternates: { canonical: 'https://genesisbydrben.com/blog' },
  openGraph: {
    title: 'Blog - Cosmetic Dentistry Insights | Genesis by Dr. Ben Reyhani',
    description: 'Stay informed with the latest in cosmetic dentistry, smile makeovers, and oral health tips from Dr. Ben Reyhani at Genesis in West Hollywood.',
    url: 'https://genesisbydrben.com/blog',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function Blog() {
  return <BlogContent />;
}
