'use client';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const ctaBgImg = '/images/Group-1597884055_1771441438103.png';
const subpageHeroImg = '/images/Group-1597883871-1_1771444440714.png';

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

export default function BeverlyHillsContent() {
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
                name: 'Cosmetic Dentist Beverly Hills',
                item: 'https://genesisbydrben.com/cosmetic-dentist-beverly-hills'
              }
            ]
          })
        }}
      />

      <section data-testid="bh-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={subpageHeroImg} alt="Genesis cosmetic dental office near Beverly Hills" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: 'Cosmetic Dentist Beverly Hills' }]} />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[28px] md:text-[44px] leading-[33px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Cosmetic Dentist Serving Beverly Hills
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-4">
            <ChevronDown className="w-6 h-6 text-white/50 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section data-testid="bh-section-intro" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <FadeInSection>
            <p className="text-[#A4906F] text-[10px] leading-[12px] tracking-[0.1em] uppercase mb-6 font-sans text-center">
              Minutes from Beverly Hills
            </p>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-8">
              A Premier Cosmetic Dental Experience, Just Around the Corner
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] text-[#383B42]/70 font-sans mb-6">
              If you're searching for a cosmetic dentist near Beverly Hills, Genesis by Dr. Ben Reyhani is located just minutes away on Beverly Boulevard in West Hollywood. Our boutique practice sits at the intersection of Beverly Hills, West Hollywood, and the greater Los Angeles area — making it an effortless destination for patients who expect exceptional care in a refined, private setting.
            </p>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] text-[#383B42]/70 font-sans">
              Dr. Reyhani has built a reputation as one of the most sought-after cosmetic dentists in the area, attracting patients from Beverly Hills, Bel Air, Century City, and throughout Los Angeles County. His approach combines advanced clinical training with a genuine artistic sensibility — treating each smile as a bespoke creation rather than a routine procedure.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="bh-section-services" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[900px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Services Available to Beverly Hills Patients
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-14">
              Genesis offers a comprehensive range of cosmetic and restorative treatments. Every procedure is performed by Dr. Reyhani personally, ensuring the highest standard of care from consultation through completion.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Porcelain Veneers', href: '/porcelain-veneers', desc: 'Custom-crafted shells that transform the color, shape, and alignment of your smile in as few as two visits.' },
                { label: 'Teeth Whitening', href: '/teeth-whitening', desc: 'Professional in-office and take-home whitening systems that deliver results far beyond over-the-counter products.' },
                { label: 'Smile Makeovers', href: '/smile-makeovers', desc: 'A comprehensive redesign combining multiple treatments to create a smile that\'s uniquely yours.' },
                { label: 'Dental Implants', href: '/dental-implants', desc: 'Permanent, natural-looking replacements for missing teeth that preserve jawbone health and facial structure.' },
                { label: 'All-on-4 Implants', href: '/all-on-4-dental-implants-los-angeles', desc: 'A full arch of fixed teeth supported by just four implants — often with same-day temporary teeth.' },
                { label: 'Full Mouth Reconstruction', href: '/full-mouth-reconstruction', desc: 'A complete rebuild for patients with extensive dental concerns, restoring both function and aesthetics.' },
              ].map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  data-testid={`bh-service-link-${i}`}
                  className="group block bg-white rounded-md p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="font-serif text-[18px] leading-[22px] uppercase text-[#383B42] group-hover:text-[#A4906F] transition-colors duration-300 mb-3">
                    {service.label}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#383B42]/60 font-sans">
                    {service.desc}
                  </p>
                </Link>
              ))}
            </div>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center mt-10">
              Explore our full range of <Link href="/cosmetic-dentistry" className="text-[#A4906F] hover:underline">cosmetic dentistry</Link> and <Link href="/restorative-dentistry" className="text-[#A4906F] hover:underline">restorative dentistry</Link> services.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="bh-section-why" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Why Beverly Hills Residents Choose Genesis
            </h2>
          </FadeInSection>
          <div className="space-y-8">
            <FadeInSection delay={0.1}>
              <h3 className="font-serif text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Boutique, Private Environment</h3>
              <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                Unlike high-volume practices, Genesis is a true boutique experience. Dr. Reyhani limits his caseload to give each patient the unhurried attention their smile deserves. The office itself feels more like a private retreat than a dental clinic — a distinction that Beverly Hills patients particularly appreciate.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <h3 className="font-serif text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Artistry Meets Precision</h3>
              <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                Dr. Reyhani's training spans both advanced prosthodontics and aesthetic dentistry, giving him a dual perspective that few cosmetic dentists possess. He uses Digital Smile Design technology and collaborates with master ceramists to deliver results that are technically flawless and artistically beautiful.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <h3 className="font-serif text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Concierge-Level Service</h3>
              <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                From your first phone call to your final follow-up, every interaction at Genesis is designed around your comfort and convenience. Our concierge team manages scheduling, insurance verification, and financing so you can focus entirely on your smile.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <h3 className="font-serif text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Results That Speak for Themselves</h3>
              <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                The best measure of a cosmetic dentist is their work. Visit our <Link href="/gallery" className="text-[#A4906F] hover:underline">before-and-after gallery</Link> to see real transformations performed by Dr. Reyhani — each one a reflection of the artistry and care that defines Genesis.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="bh-section-directions" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[800px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-8">
              Getting Here from Beverly Hills
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] text-[#383B42]/70 font-sans mb-6">
              Genesis is located at 8797 Beverly Boulevard, Suite 200, in West Hollywood — a quick drive from anywhere in Beverly Hills. Most patients arrive in under ten minutes, depending on traffic.
            </p>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] text-[#383B42]/70 font-sans mb-6">
              From Beverly Hills, head east on Santa Monica Boulevard or Wilshire Boulevard, then turn north onto La Cienega Boulevard. Continue to Beverly Boulevard and head east — our office is on the right, with convenient parking available on-site. Alternatively, take Beverly Boulevard directly east from the Beverly Hills border; the drive is straightforward and typically under two miles.
            </p>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] text-[#383B42]/70 font-sans">
              If you prefer, our concierge team is happy to provide detailed directions or assist with transportation arrangements when you schedule your appointment.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.3}>
            <div className="mt-10 rounded-md overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=8797%20Beverly%20Blvd%2C%20Suite%20200%20West%20Hollywood%20CA%2090048&t=m&z=14&output=embed&iwloc=near"
                title="Genesis by Dr. Ben Reyhani — Cosmetic Dentist Near Beverly Hills"
                aria-label="Map showing Genesis location near Beverly Hills"
                className="w-full h-64 border-0 grayscale"
                loading="lazy"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="bh-section-cta" className="relative py-20 md:py-28 px-6">
        <div className="absolute inset-0">
          <img src={ctaBgImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#383B42]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase">
              Schedule Your Consultation
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-6 text-[15px] md:text-[17px] leading-[22px] md:leading-[26px] text-white/60 font-sans max-w-xl mx-auto">
              Whether you're considering veneers, implants, or a complete smile makeover, Dr. Reyhani is ready to listen to your goals and design a plan that's right for you. Beverly Hills patients are welcome to book a private consultation at our West Hollywood office.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="bh-link-book"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Book Online
              </a>
              <a
                href="tel:+13103883404"
                data-testid="bh-link-call"
                className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
              >
                <Phone className="w-3.5 h-3.5" />
                (310)-388-3404
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
