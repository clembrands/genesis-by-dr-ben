'use client';

import Link from "next/link";
import { Calendar, ArrowLeft, ArrowRight, User, Tag } from "lucide-react";
import type { BlogPost as BlogPostType } from "@shared/schema";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "@/components/Breadcrumb";
import DOMPurify from "dompurify";

interface BlogPostContentProps {
  slug: string;
}

export default function BlogPostContent({ slug }: BlogPostContentProps) {
  const { data: post, isLoading, error } = useQuery<BlogPostType>({
    queryKey: ["/api/blog", slug],
    enabled: !!slug,
  });

  const { data: allPosts } = useQuery<BlogPostType[]>({
    queryKey: ["/api/blog"],
  });

  const relatedPosts = allPosts
    ?.filter((p) => p.slug !== slug)
    .slice(0, 3) ?? [];

  if (isLoading) {
    return (
      <div className="bg-[#383B42] text-white min-h-screen pt-28 pb-20">
        <div className="max-w-[800px] mx-auto px-6">
          <Skeleton className="h-8 w-32 bg-white/5 mb-8" />
          <Skeleton className="h-10 w-3/4 bg-white/5 mb-4" />
          <Skeleton className="h-4 w-48 bg-white/5 mb-8" />
          <Skeleton className="h-64 w-full bg-white/5 mb-8 rounded-md" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full bg-white/5" />
            <Skeleton className="h-4 w-full bg-white/5" />
            <Skeleton className="h-4 w-5/6 bg-white/5" />
            <Skeleton className="h-4 w-full bg-white/5" />
            <Skeleton className="h-4 w-4/5 bg-white/5" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-[#383B42] text-white min-h-screen pt-28 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-[30px] leading-[35px] mb-4">Post not found</h2>
          <Link href="/blog" className="text-[#A4906F] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#383B42] text-white min-h-screen pt-28 pb-20">
      <div className="max-w-[800px] mx-auto px-6 mb-6">
        <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[800px] mx-auto px-6"
      >
        <Link
          href="/blog"
          data-testid="link-back-blog"
          className="inline-flex items-center gap-2 text-[#A4906F] text-[10px] leading-[12px] tracking-[0.1em] uppercase mb-8 font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-10">
            <span className="text-[10px] leading-[12px] tracking-[0.1em] uppercase text-[#A4906F]/70 mb-3 block font-sans">
              {post.category}
            </span>
            <h1
              data-testid="text-blog-title"
              className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase mb-6"
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-[10px] leading-[12px] tracking-[0.1em] text-white/40 font-sans uppercase">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
            </div>
          </header>

          {post.coverImage && (
            <div className="mb-10 rounded-md overflow-hidden">
              <img
                data-testid="img-blog-cover"
                src={post.coverImage}
                alt={`${post.title} - Genesis by Dr. Ben Reyhani`}
                className="w-full h-auto"
              />
            </div>
          )}

          <div
            data-testid="text-blog-content"
            className="prose prose-invert prose-lg max-w-none font-sans
              prose-headings:font-serif prose-headings:tracking-wide
              prose-p:text-white/65 prose-p:leading-relaxed
              prose-a:text-[#A4906F] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white/90
              prose-blockquote:border-[#A4906F]/30 prose-blockquote:text-white/50
              prose-li:text-white/65"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
          />

          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-[#A4906F]" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] leading-[12px] tracking-[0.1em] uppercase px-3 py-1 rounded-full border border-white/10 text-white/50 font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </motion.div>

      <div className="max-w-[800px] mx-auto px-6 mt-16">
        <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#A4906F' }}>
          <div className="px-8 py-10 text-center">
            <h3 className="font-serif text-[22px] md:text-[28px] leading-[26px] md:leading-[32px] uppercase text-white mb-3">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-[15px] leading-[22px] text-white/80 font-sans mb-6 max-w-md mx-auto">
              Schedule a private consultation with Dr. Reyhani to discuss your goals and explore your options.
            </p>
            <Link
              href="/contact"
              data-testid="blog-cta-contact"
              className="inline-block px-8 py-3 bg-[#383B42] text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover:bg-[#383B42]/80 rounded-md"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="max-w-[1200px] mx-auto px-6 mt-20 pb-8">
          <h2 className="font-serif text-[24px] md:text-[32px] leading-[28px] md:leading-[36px] uppercase text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.slug}`}
                data-testid={`related-post-${related.id}`}
                className="group block"
              >
                <div className="rounded-md overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-[#A4906F]/40 h-full flex flex-col">
                  {related.coverImage && (
                    <div className="h-44 overflow-hidden">
                      <img
                        src={related.coverImage}
                        alt={`${related.title} - Genesis by Dr. Ben Reyhani`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="400"
                        height="176"
                      />
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[10px] leading-[12px] tracking-[0.1em] uppercase text-[#A4906F]/70 mb-2 font-sans">
                      {related.category}
                    </span>
                    <h3 className="font-serif text-[16px] leading-[20px] uppercase text-white group-hover:text-[#A4906F] transition-colors duration-300 mb-3">
                      {related.title}
                    </h3>
                    <p className="text-[13px] leading-[20px] text-white/50 font-sans line-clamp-2 flex-1">
                      {related.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[10px] leading-[12px] tracking-[0.1em] uppercase text-[#A4906F] mt-4 font-sans">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
