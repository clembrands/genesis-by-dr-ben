'use client';

import Link from "next/link";
import { Calendar, ArrowRight, User } from "lucide-react";
import type { BlogPost } from "@shared/schema";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "@/components/Breadcrumb";

export default function BlogContent() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="bg-[#383B42] text-white min-h-screen pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Blog" }]} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#A4906F] text-[10px] leading-[12px] tracking-[0.1em] uppercase mb-4 font-sans">
            Insights & Updates
          </p>
          <h1 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase">
            Our Blog
          </h1>
          <p className="mt-6 text-[15px] leading-[22px] text-white/50 max-w-2xl mx-auto font-sans">
            Stay informed with the latest in cosmetic dentistry, smile makeovers, and oral health tips.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-md border border-white/5 overflow-hidden">
                <Skeleton className="h-52 bg-white/5" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-4 w-24 bg-white/5" />
                  <Skeleton className="h-6 w-full bg-white/5" />
                  <Skeleton className="h-4 w-full bg-white/5" />
                  <Skeleton className="h-4 w-3/4 bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        ) : posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  data-testid={`link-blog-post-${post.id}`}
                >
                  <article className="group rounded-md border border-white/5 overflow-visible bg-white/[0.02] transition-all duration-500 cursor-pointer h-full flex flex-col hover-elevate">
                    {post.coverImage && (
                      <div className="h-52 overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={`${post.title} - Genesis by Dr. Ben Reyhani`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          width="600"
                          height="400"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-[10px] leading-[12px] tracking-[0.1em] text-white/40 mb-3 font-sans uppercase">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.createdAt).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                      </div>
                      <span className="text-[10px] leading-[12px] tracking-[0.1em] uppercase text-[#A4906F]/70 mb-2 font-sans">
                        {post.category}
                      </span>
                      <h3 className="font-sans text-[22px] leading-[28px] mb-3 group-hover:text-[#A4906F] transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-[15px] leading-[22px] text-white/50 flex-1 font-sans">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[#A4906F] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans">
                        Read More <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/40 text-[17px] leading-[21px] font-serif">No blog posts yet. Check back soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
