'use client';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const ctaBgImg = '/images/Group-1597884055_1771441438103.png';
const subpageHeroImg = '/images/Group-1597883871-1_1771444440714.png';
const restoringImg = '/images/dental-iplants_1771445379950.png';
const singleImplantImg = '/images/ChatGPT-Image-Nov-24-2025-03_56_52-PM_1771445407951.png';
const retainedDentureImg = '/images/unnamed_1771445419830.png';
const allOnXImg = '/images/Rectangle-38949_1771445429852.png';

function FadeInSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

export default function DentalImplantsContent() {
  return (
    <div className="bg-[#383B42] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://genesisbydrben.com'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Dental Implants',
                item: 'https://genesisbydrben.com/dental-implants'
              }
            ]
          })
        }}
      />

      <section data-testid="implants-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={subpageHeroImg} alt="Genesis dental office interior in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: 'Dental Implants' }]} />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Dental Implants
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

      <section data-testid="implants-section-restoring" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src={restoringImg} alt="Dental implant procedure at Genesis by Dr. Ben Reyhani West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  Restoring Foundation, Redefining Confidence
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Dental implants at Genesis by Dr. Ben Reyhani do more than replace teeth — they
                  rebuild the structural foundation of your smile. Each implant functions like a natural
                  tooth root, providing a stable, lasting solution to tooth loss. Designed with precision
                  and aesthetic intention, implants blend seamlessly with your natural teeth and allow
                  you to eat, smile, speak, and live with confidence. If you're seeking a permanent,
                  natural-looking restoration, implants offer strength, longevity, and unmatched results.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="implants-section-why" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase text-[#383B42]">
              Why Dental Implants
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
              A beautiful smile is more than appearance — it's presence, confidence, and the way you move
              through the world. When a tooth is lost, everything shifts: how you chew, how you
              speak, how you feel in front of others. Dental implants offer a refined, permanent solution.
              They preserve bone and facial structure, feel natural and secure, and blend seamlessly
              with your smile — no slipping, no compromise, no second-guessing. This isn't just a
              replacement. It's restoration — with elegance, intention, and longevity.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="implants-section-process" className="pt-20 md:pt-28 pb-20 md:pb-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28 py-20 md:py-28 bg-[#383B42] rounded-md px-8 md:px-16">
          <FadeInSection>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase text-white">
              The Smile Process
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] leading-[22px] text-white/60 font-sans">
              Your transformation is intentional and tailored — built around precision, artistry, and an
              uncompromising standard of care. From the moment you walk in, you're guided through a
              seamless experience where every detail is designed for clarity, comfort, and confidence.
              This isn't just treatment. It's a curated journey to a smile that feels natural, effortless,
              and entirely your own.
            </p>
          </FadeInSection>
        </div>
        <div data-testid="implants-section-single" className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src={singleImplantImg} alt="Single tooth dental implant diagram at Genesis Los Angeles" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  Single Dental Implant
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Perfect for replacing one missing tooth, a single implant acts as a new root, topped
                  with a custom-crafted crown for a flawless, functional result. Eat, speak, and smile
                  with full confidence — naturally.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="implants-section-retained" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection className="order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  Implant Retained Dentures
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Also known as "overdentures." These removable, snap-in dentures are stabilized by
                  implants for greater comfort and security — eliminating the slipping and irritation of
                  traditional dentures.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2} className="order-1 lg:order-2">
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src={retainedDentureImg} alt="Implant retained denture solution at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="implants-section-allonx" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src={allOnXImg} alt="All-on-X full arch dental implant results at Genesis by Dr. Ben Reyhani" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  All-on-X Dental Implants
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  A complete solution for a full arch restoration using just four to six strategically
                  placed implants that support a fixed, non-removable prosthesis — providing
                  a full, confident smile in a single visit.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="implants-section-financing" className="py-14 md:py-16 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h3 className="font-serif text-[22px] md:text-[28px] leading-[28px] md:leading-[34px] uppercase text-[#383B42]">
              Financing Available
            </h3>
            <p className="mt-4 text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
              We believe everyone deserves access to exceptional dental care. That's why we offer flexible payment options and monthly financing structures to fit your budget — so you can focus on your smile, not the cost.
            </p>
            <div className="mt-8">
              <a
                data-testid="implants-link-financing-consultation"
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#383B42] text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Learn About Your Options
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="implants-section-resources" className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h3 className="font-serif text-[20px] md:text-[24px] leading-[26px] md:leading-[30px] uppercase text-[#383B42] mb-6">
            Related Resources
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link
              href="/all-on-4-dental-implants-los-angeles"
              data-testid="implants-link-allon4"
              className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
            >
              All-on-4 Dental Implants
            </Link>
            <Link
              href="/blog/all-on-4-vs-traditional-implants"
              data-testid="implants-link-blog-comparison"
              className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
            >
              All-on-4 vs. Traditional Implants
            </Link>
            <Link
              href="/gallery"
              data-testid="implants-link-gallery"
              className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
            >
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>

      <section
        data-testid="implants-section-cta"
        className="pt-20 md:pt-28 pb-32 md:pb-40 px-6 relative"
      >
        <div className="absolute inset-0">
          <img
            src={ctaBgImg}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#383B42]/60" />
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40" style={{ background: 'linear-gradient(to bottom, transparent, #383B42)' }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase">
              Restore Your Smile with Confidence
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] md:text-[17px] leading-[22px] md:leading-[21px] text-white/60 font-serif">
              Dental implants are more than a solution for missing teeth — they're a lasting investment
              in your health, function, and confidence. At Genesis, we combine advanced technology and
              meticulous care to deliver natural-looking results that last. Schedule your consultation
              today and take the first step toward a stronger, more beautiful smile.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                data-testid="implants-link-cta-consultation"
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Request Consultation
              </a>
              <a
                data-testid="implants-link-cta-call"
                href="tel:3103883404"
                className="px-8 py-3 border border-white/30 text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
              >
                Call Us: (310)-388-3404
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
