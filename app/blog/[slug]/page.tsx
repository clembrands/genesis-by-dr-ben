import type { Metadata } from 'next';
import BlogPostContent from './page-content';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${title} | Genesis by Dr. Ben Reyhani`,
    alternates: { canonical: `https://genesisbydrben.com/blog/${slug}` },
    openGraph: {
      title: `${title} | Genesis by Dr. Ben Reyhani`,
      url: `https://genesisbydrben.com/blog/${slug}`,
      siteName: 'Genesis by Dr. Ben Reyhani',
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostContent slug={slug} />;
}
