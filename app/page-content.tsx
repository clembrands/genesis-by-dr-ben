'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

function FadeInSection({
  children,
  className = '',
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

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

export default function HomeContent() {
  return (
    <div className="bg-[#383B42] text-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-bg.png"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#383B42]" />
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h1 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase">
              Premier Cosmetic Dentist in <span className="text-[#A4906F]">Dallas</span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] leading-[22px] text-white/60 font-sans">
              Dr. Ben Reyhani is proud to present Genesis — a boutique dental experience where
              artistry and innovation converge. With bespoke treatments designed to enhance your
              natural beauty, Genesis is more than dentistry; it's the beginning of a smile
              transformation crafted entirely around you.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Meet Dr. Section */}
      <section className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection className="order-2 lg:order-1">
              <div className="space-y-6">
                <p className="text-[10px] leading-[12px] tracking-[0.1em] uppercase text-[#A4906F] font-sans">
                  Dallas, Texas
                </p>
                <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase text-[#383B42]">
                  Meet Dr. Ben Reyhani
                </h2>
                <p className="font-serif text-[13px] leading-[16px] tracking-[0.15em] uppercase font-semibold text-[#A4906F]">
                  Full Arch and Anti-aging Cosmetic Dentist
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Dr. Ben Reyhani has dedicated himself to mastering the intricate balance between
                  implant, periodontal, and aesthetic dentistry. His extensive knowledge and refined
                  skill set empower him to foster both beauty and health, ensuring that his patients
                  enjoy smiles that are not only radiant but have longevity.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Dr. Reyhani stands out in his field for his commitment to creating natural-looking
                  and undetectable smile makeovers. His keen eye for detail and exceptional design
                  sensibilities have established him as a leader in the craft of dentistry, trusted
                  to deliver results that uplift and rejuvenate.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border border-[#A4906F] text-[#A4906F] text-[10px] leading-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover-elevate rounded-md mt-4 font-sans"
                >
                  Learn More About
                </Link>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2} className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/dr-ben.jpg"
                  alt="Dr. Ben Reyhani, cosmetic and implant dentist at Genesis in Dallas"
                  className="w-full max-w-md mx-auto lg:max-w-none rounded-md"
                  width="600"
                  height="750"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-md ring-1 ring-[#383B42]/10" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="relative">
                <img
                  src="/images/philosophy.jpg"
                  alt="Dr. Ben Reyhani crafting dental prosthetics at Genesis in Dallas"
                  className="w-full max-w-md mx-auto lg:max-w-none rounded-md"
                  width="600"
                  height="750"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-md ring-1 ring-[#383B42]/10" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase text-[#383B42]">
                  The Genesis Philosophy
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Here at Genesis, we believe that the journey to a beautiful smile should not be
                  limited by a practitioner's skill set but guided by optimal outcomes tailored to
                  each individual's needs.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Dr. Reyhani & Team focus on seamlessly combining surgical excellence with ideal
                  prosthetic restoration to create harmony in every patient's smile, no matter where
                  they are in their dental journey.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  At Genesis, we refuse to compromise between beauty and function.
                </p>
                <Link
                  href="/gallery"
                  className="inline-flex items-center px-6 py-3 border border-[#383B42]/30 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover-elevate rounded-md mt-4 font-sans"
                >
                  View Our Gallery
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-20 md:pt-28 pb-32 md:pb-40 px-6 relative">
        <div className="absolute inset-0">
          <img
            src="/images/cta-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
            width="1920"
            height="800"
            loading="lazy"
          />
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
              Schedule your personalized consultation today and take the first step toward a
              confident, radiant smile that's tailored to you. At Genesis by Dr. Ben Reyhani, we
              combine artistic expertise with advanced aesthetic dentistry to deliver results that
              enhance your natural beauty.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Request Consultation
              </a>
              <a
                href="tel:+14698383558"
                className="px-8 py-3 border border-white/30 text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
              >
                Call Us: (469)-838-3558
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
