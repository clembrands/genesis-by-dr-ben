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

export default function LosAngelesContent() {
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
                name: 'Cosmetic Dentist Los Angeles',
                item: 'https://genesisbydrben.com/cosmetic-dentist-los-angeles'
              }
            ]
          })
        }}
      />

      <section data-testid="la-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={subpageHeroImg} alt="Genesis cosmetic dental office in Los Angeles" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: 'Cosmetic Dentist Los Angeles' }]} />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[28px] md:text-[44px] leading-[33px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Cosmetic Dentist in Los Angeles
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-4">
            <ChevronDown className="w-6 h-6 text-white/50 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section data-testid="la-section-intro" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <FadeInSection>
            <p className="text-[#A4906F] text-[10px] leading-[12px] tracking-[0.1em] uppercase mb-6 font-sans text-center">
              West Hollywood, California
            </p>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-8">
              World-Class Cosmetic Dentistry in the Heart of Los Angeles
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] text-[#383B42]/70 font-sans mb-6">
              Los Angeles is a city defined by aesthetics, artistry, and an uncompromising standard of excellence. Genesis by Dr. Ben Reyhani was built to match that standard. Located on Beverly Boulevard in West Hollywood, our boutique cosmetic dental practice serves patients from across the Los Angeles metropolitan area — from Beverly Hills and Hollywood to Santa Monica, Brentwood, Century City, and Mid-Wilshire.
            </p>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] text-[#383B42]/70 font-sans">
              Dr. Reyhani is not a general dentist who happens to offer cosmetic work. His practice is dedicated entirely to aesthetic and restorative dentistry, with advanced training in prosthodontics and a portfolio of smile transformations that speaks for itself. Patients throughout Los Angeles seek him out for one reason: results that look effortlessly natural and are engineered to last.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="la-section-neighborhoods" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[800px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Serving Neighborhoods Across Los Angeles
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-10">
              Our West Hollywood location places us within easy reach of some of the most sought-after neighborhoods in Los Angeles. Patients travel to Genesis from throughout the city and beyond.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {['West Hollywood', 'Beverly Hills', 'Hollywood', 'Mid-Wilshire', 'Santa Monica', 'Brentwood', 'Century City', 'Bel Air'].map((neighborhood) => (
                <div key={neighborhood} className="bg-white rounded-md px-4 py-3 text-center">
                  <span className="font-serif text-[15px] leading-[20px] uppercase text-[#383B42]">{neighborhood}</span>
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center mt-8">
              No matter where you're coming from in Los Angeles, our concierge team will help coordinate scheduling and directions to make your visit as seamless as possible.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="la-section-services" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Cosmetic &amp; Restorative Services
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-14">
              Genesis offers a carefully curated menu of treatments designed to address everything from subtle refinements to complete smile transformations. Dr. Reyhani personally performs every procedure, ensuring continuity and precision at every stage.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Porcelain Veneers', href: '/porcelain-veneers', desc: 'Ultra-thin porcelain shells custom-designed to perfect the color, shape, and symmetry of your smile.' },
                { label: 'Teeth Whitening', href: '/teeth-whitening', desc: 'Clinical-grade whitening treatments that deliver dramatic, lasting brightness safely and comfortably.' },
                { label: 'Smile Makeovers', href: '/smile-makeovers', desc: 'A tailored combination of procedures — veneers, bonding, whitening, and more — for a complete transformation.' },
                { label: 'Dental Implants', href: '/dental-implants', desc: 'Titanium implants that replace missing teeth with permanent, natural-looking results that protect bone health.' },
                { label: 'All-on-4 Implants', href: '/all-on-4-dental-implants-los-angeles', desc: 'A full arch of fixed teeth anchored by four strategically placed implants, often completed in a single day.' },
                { label: 'Full Mouth Reconstruction', href: '/full-mouth-reconstruction', desc: 'A comprehensive approach for patients needing extensive restorative and aesthetic work across both arches.' },
              ].map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  data-testid={`la-service-link-${i}`}
                  className="group block border border-[#383B42]/10 rounded-md p-6 transition-all duration-300 hover:shadow-lg hover:border-[#A4906F]/30"
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
              Learn more about our <Link href="/cosmetic-dentistry" className="text-[#A4906F] hover:underline">cosmetic dentistry</Link> and <Link href="/restorative-dentistry" className="text-[#A4906F] hover:underline">restorative dentistry</Link> offerings.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="la-section-why" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[800px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Why Los Angeles Patients Choose Genesis
            </h2>
          </FadeInSection>
          <div className="space-y-8">
            <FadeInSection delay={0.1}>
              <h3 className="font-serif text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">A Dentist Who Understands LA</h3>
              <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                Los Angeles patients have high expectations — and they should. Dr. Reyhani understands the aesthetic sensibility of this city. His work doesn't look "done." It looks natural, balanced, and refined. Whether you're in front of a camera or simply want to feel more confident in everyday life, he designs smiles that complement your unique features.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <h3 className="font-serif text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Advanced Technology, Meticulous Craft</h3>
              <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                From Digital Smile Design previews to partnerships with elite ceramist labs, every step of the process at Genesis is guided by precision and artistry. Dr. Reyhani uses the latest diagnostic and restorative technology, but never at the expense of the personal, hands-on approach that distinguishes exceptional cosmetic work from average results.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <h3 className="font-serif text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Boutique Practice, Undivided Attention</h3>
              <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                Genesis is intentionally small. Dr. Reyhani limits the number of patients he sees each day so that every consultation, every preparation, and every placement receives his full focus. In a city where large corporate dental groups are common, this level of personal care is increasingly rare — and increasingly valued.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <h3 className="font-serif text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Proven Results You Can See</h3>
              <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                We invite you to browse our <Link href="/gallery" className="text-[#A4906F] hover:underline">before-and-after gallery</Link> to see the transformations Dr. Reyhani has created for patients just like you. Each case reflects the precision, restraint, and artistry that make Genesis a destination practice for cosmetic dentistry in Los Angeles.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="la-section-location" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-8">
              Centrally Located in West Hollywood
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] text-[#383B42]/70 font-sans mb-6">
              Our office at 8797 Beverly Boulevard, Suite 200, sits in the heart of West Hollywood — one of the most accessible locations in all of Los Angeles. Whether you're driving from Santa Monica via the 10 Freeway, heading south from Hollywood on La Brea or Fairfax, or coming over from Century City on Santa Monica Boulevard, you'll find our practice easy to reach with convenient on-site parking.
            </p>
            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[28px] text-[#383B42]/70 font-sans">
              Need help with directions or scheduling? Our concierge team is available to assist with every detail of your visit, including coordinating appointment times around your schedule. Call us at <a href="tel:+13103883404" className="text-[#A4906F] hover:underline">(310)-388-3404</a> or reach us by email at <a href="mailto:concierge@craftedbygenesis.com" className="text-[#A4906F] hover:underline">concierge@craftedbygenesis.com</a>.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.3}>
            <div className="mt-10 rounded-md overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=8797%20Beverly%20Blvd%2C%20Suite%20200%20West%20Hollywood%20CA%2090048&t=m&z=13&output=embed&iwloc=near"
                title="Genesis by Dr. Ben Reyhani — Cosmetic Dentist in Los Angeles"
                aria-label="Map showing Genesis location in West Hollywood, Los Angeles"
                className="w-full h-64 border-0 grayscale"
                loading="lazy"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="la-section-cta" className="relative py-20 md:py-28 px-6">
        <div className="absolute inset-0">
          <img src={ctaBgImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#383B42]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase">
              Your Smile Transformation Starts Here
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-6 text-[15px] md:text-[17px] leading-[22px] md:leading-[26px] text-white/60 font-sans max-w-xl mx-auto">
              Whether you're envisioning a subtle enhancement or a dramatic makeover, it begins with a conversation. Schedule a private consultation with Dr. Reyhani at our West Hollywood office and discover what's possible for your smile.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="la-link-book"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Book Online
              </a>
              <a
                href="tel:+13103883404"
                data-testid="la-link-call"
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
