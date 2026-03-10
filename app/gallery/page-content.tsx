'use client';

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import subpageHeroImg from "@/images/Group-1597883871-1_1771444440714.png";
import ctaBgImg from "@/images/Group-1597884055_1771441438103.png";

import gallery1 from "@/images/image_1771445606491.png";
import gallery2 from "@/images/image_1771445630676.png";
import gallery3 from "@/images/image_1771445646994.png";
import gallery4 from "@/images/image_1771445669293.png";
import gallery5 from "@/images/image_1771445682432.png";
import gallery6 from "@/images/image_1771445696996.png";
import gallery7 from "@/images/image_1771445711271.png";

const galleryImages = [
  { src: gallery1, alt: "Before and after veneers smile transformation at Genesis by Dr. Ben Reyhani" },
  { src: gallery2, alt: "Before and after cosmetic dentistry smile transformation at Genesis by Dr. Ben Reyhani" },
  { src: gallery3, alt: "Before and after dental restoration smile transformation at Genesis by Dr. Ben Reyhani" },
  { src: gallery4, alt: "Before and after smile design transformation at Genesis by Dr. Ben Reyhani" },
  { src: gallery5, alt: "Before and after cosmetic treatment smile transformation at Genesis by Dr. Ben Reyhani" },
  { src: gallery6, alt: "Before and after dental implants smile transformation at Genesis by Dr. Ben Reyhani" },
  { src: gallery7, alt: "Before and after full smile makeover transformation at Genesis by Dr. Ben Reyhani" },
];

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function GalleryContent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#383B42] text-white">
      <section data-testid="gallery-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={subpageHeroImg.src} alt="Genesis dental office interior in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: "Gallery" }]} />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Smile Gallery
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4"
          >
            <ChevronDown className="w-6 h-6 text-white/50 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section data-testid="gallery-section-intro" className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
              Real Results. Real Confidence.
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-6 text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
              Every smile tells a story. Browse our collection of transformations — each one
              designed with precision, artistry, and a deep commitment to natural beauty.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="gallery-section-grid" className="pb-20 md:pb-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <button
                  data-testid={`gallery-image-${index}`}
                  onClick={() => setLightboxIndex(index)}
                  className="w-full group cursor-pointer"
                >
                  <div className="bg-[#383B42] p-3 rounded-md shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
                    <img
                      src={image.src.src}
                      alt={image.alt}
                      className="w-full rounded-sm aspect-square object-cover"
                      width="400"
                      height="400"
                      loading="lazy"
                    />
                  </div>
                </button>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section
        data-testid="gallery-section-cta"
        className="pt-20 md:pt-28 pb-32 md:pb-40 px-6 relative"
      >
        <div className="absolute inset-0">
          <img src={ctaBgImg.src} alt="" className="w-full h-full object-cover" aria-hidden="true" width="1920" height="800" loading="lazy" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40" style={{ background: 'linear-gradient(to bottom, transparent, #383B42)' }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase">
              Your Transformation Awaits
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] md:text-[17px] leading-[22px] md:leading-[21px] text-white/60 font-serif">
              Every smile in our gallery began with a conversation. Schedule your consultation
              today and discover how Dr. Reyhani can design a smile that's uniquely yours.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                data-testid="gallery-link-cta-consultation"
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Request Consultation
              </a>
              <a
                data-testid="gallery-link-cta-call"
                href="tel:3103883404"
                className="px-8 py-3 border border-white/30 text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
              >
                Call Us: (310)-388-3404
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
            data-testid="gallery-lightbox"
          >
            <button
              data-testid="gallery-lightbox-close"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex items-center gap-4 max-w-4xl w-full">
              <button
                data-testid="gallery-lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
                }}
                className="text-white/50 hover:text-white text-4xl font-light shrink-0 transition-colors"
              >
                &#8249;
              </button>
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={galleryImages[lightboxIndex].src.src}
                alt={galleryImages[lightboxIndex].alt}
                className="w-full max-h-[80vh] object-contain rounded-md"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                data-testid="gallery-lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
                }}
                className="text-white/50 hover:text-white text-4xl font-light shrink-0 transition-colors"
              >
                &#8250;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
