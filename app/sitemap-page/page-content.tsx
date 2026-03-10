'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "@/components/Breadcrumb";
import type { BlogPost } from "@shared/schema";
import subpageHeroImg from "@/images/Group-1597883871-1_1771444440714.png";

const mainPages = [
  { label: "Home", href: "/" },
  { label: "About Dr. Ben Reyhani", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const servicePages = [
  { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
  { label: "Porcelain Veneers", href: "/porcelain-veneers" },
  { label: "Teeth Whitening", href: "/teeth-whitening" },
  { label: "Smile Makeovers", href: "/smile-makeovers" },
  { label: "Full Mouth Reconstruction", href: "/full-mouth-reconstruction" },
  { label: "Restorative Dentistry", href: "/restorative-dentistry" },
  { label: "Dental Implants", href: "/dental-implants" },
  { label: "All-on-4 Dental Implants", href: "/all-on-4-dental-implants-los-angeles" },
];

export default function SitemapContent() {
  const { data: posts } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="bg-[#383B42] text-white">
      <section data-testid="sitemap-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={subpageHeroImg.src} alt="Genesis dental office interior in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: "Sitemap" }]} />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Sitemap
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-3 w-12 h-[1px] bg-[#A4906F] mx-auto"
          />
        </div>
      </section>

      <section data-testid="sitemap-section-content" className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-[24px] md:text-[30px] uppercase tracking-wide text-[#A4906F] mb-6">Main Pages</h2>
            <ul className="space-y-3">
              {mainPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} data-testid={`sitemap-link-${page.href.replace(/\//g, "") || "home"}`} className="text-[15px] font-sans text-white/70 hover:text-[#A4906F] transition-colors">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-[24px] md:text-[30px] uppercase tracking-wide text-[#A4906F] mb-6">Services</h2>
            <ul className="space-y-3">
              {servicePages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} data-testid={`sitemap-link-${page.href.replace(/\//g, "")}`} className="text-[15px] font-sans text-white/70 hover:text-[#A4906F] transition-colors">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-[24px] md:text-[30px] uppercase tracking-wide text-[#A4906F] mb-6">Location Pages</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/cosmetic-dentist-beverly-hills" data-testid="sitemap-link-cosmetic-dentist-beverly-hills" className="text-[15px] font-sans text-white/70 hover:text-[#A4906F] transition-colors">
                  Cosmetic Dentist Near Beverly Hills
                </Link>
              </li>
              <li>
                <Link href="/cosmetic-dentist-los-angeles" data-testid="sitemap-link-cosmetic-dentist-los-angeles" className="text-[15px] font-sans text-white/70 hover:text-[#A4906F] transition-colors">
                  Cosmetic Dentist in Los Angeles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-[24px] md:text-[30px] uppercase tracking-wide text-[#A4906F] mb-6">Blog Posts</h2>
            {posts && posts.length > 0 ? (
              <ul className="space-y-3">
                {posts.map((post) => (
                  <li key={post.id}>
                    <Link href={`/blog/${post.slug}`} data-testid={`sitemap-link-blog-${post.slug}`} className="text-[15px] font-sans text-white/70 hover:text-[#A4906F] transition-colors">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[15px] font-sans text-white/40">Loading blog posts...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
