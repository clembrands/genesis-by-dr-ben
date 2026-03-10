import type { Metadata } from 'next';
import SitemapContent from './page-content';

export const metadata: Metadata = {
  title: 'Sitemap | Genesis by Dr. Ben Reyhani - West Hollywood',
  description: 'Browse all pages on the Genesis by Dr. Ben Reyhani website. Find cosmetic dentistry services, blog posts, and more.',
  alternates: { canonical: 'https://genesisbydrben.com/sitemap' },
  openGraph: {
    title: 'Sitemap | Genesis by Dr. Ben Reyhani - West Hollywood',
    description: 'Browse all pages on the Genesis by Dr. Ben Reyhani website. Find cosmetic dentistry services, blog posts, and more.',
    url: 'https://genesisbydrben.com/sitemap',
    siteName: 'Genesis by Dr. Ben Reyhani',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function Sitemap() {
  return <SitemapContent />;
}
