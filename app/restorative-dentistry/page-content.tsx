'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const ctaBgImg = '/images/Group-1597884055_1771441438103.png';
const subpageHeroImg = '/images/Group-1597883871-1_1771444440714.png';
const artOfRestorationImg = '/images/DSC09935-3-2048x1368_1771445119070.jpg';
const westHollywoodImg = '/images/Rectangle-38965_1771445161443.png';
const fillingsImg = '/images/ChatGPT-Image-Nov-11-2025-11_15_23-AM_1771445176751.png';
const crownsImg = '/images/ChatGPT-Image-Nov-11-2025-11_19_21-AM_1771445202638.png';

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

const faqs = [
  {
    question: 'What is the difference between restorative and cosmetic dentistry?',
    answer: 'Restorative dentistry focuses on repairing damaged, decayed, or missing teeth to restore proper function and oral health. Cosmetic dentistry primarily enhances appearance — color, shape, and alignment. At Genesis, Dr. Reyhani often combines both disciplines, ensuring that every restoration looks as beautiful as it performs. The result is dental work that\'s indistinguishable from your natural teeth.'
  },
  {
    question: 'How long do dental crowns and fillings last?',
    answer: 'With proper care, high-quality porcelain crowns can last 15 to 25 years, and composite fillings typically last 7 to 15 years. Longevity depends on factors like oral hygiene, diet, and regular dental visits. Dr. Reyhani uses only premium materials and precise techniques to maximize the lifespan of every restoration.'
  },
  {
    question: 'Will my restorative dental work look natural?',
    answer: 'Absolutely. Dr. Reyhani\'s approach to restorative dentistry prioritizes natural aesthetics alongside function. Every crown, filling, and bridge is custom shade-matched and shaped to blend seamlessly with your existing teeth. Most patients find that even their closest friends can\'t tell which teeth have been restored.'
  },
  {
    question: 'Is restorative dentistry painful?',
    answer: 'Modern restorative procedures are far more comfortable than most patients expect. Dr. Reyhani uses advanced anesthesia techniques and offers sedation options to ensure a pain-free experience. Many treatments, like composite fillings and bonding, involve minimal discomfort and require little to no recovery time.'
  },
  {
    question: 'How do I know if I need a crown or a filling?',
    answer: 'Generally, fillings are ideal for small to moderate cavities or minor damage, while crowns are recommended when a tooth has significant structural compromise — such as a large crack, extensive decay, or after a root canal. During your consultation, Dr. Reyhani will evaluate the extent of damage and recommend the most conservative yet effective solution.'
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-[#383B42]/15 rounded-md overflow-hidden"
          data-testid={`restorative-faq-item-${i}`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
            data-testid={`restorative-faq-toggle-${i}`}
          >
            <span className="font-serif text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] text-[#383B42] pr-4">
              {faq.question}
            </span>
            {openIndex === i ? (
              <ChevronUp className="w-5 h-5 shrink-0 text-[#A4906F]" />
            ) : (
              <ChevronDown className="w-5 h-5 shrink-0 text-[#A4906F]" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-6 pb-5 text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RestorationContent() {
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
                name: 'Restorative Dentistry',
                item: 'https://genesisbydrben.com/restorative-dentistry'
              }
            ]
          })
        }}
      />

      <section data-testid="restorative-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={subpageHeroImg} alt="Genesis restorative dentistry office in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: 'Restorative Dentistry' }]} />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Restorative Dentistry
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

      <section data-testid="restorative-section-intro" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeInSection>
            <p className="text-[16px] md:text-[17px] leading-[26px] md:leading-[28px] text-[#383B42]/75 font-sans">
              Restorative dentistry in West Hollywood requires more than technical skill — it demands an artist's
              sensibility. At Genesis, <Link href="/about" className="text-[#A4906F] hover:underline">Dr. Ben Reyhani</Link> approaches
              every restorative case with a commitment to preserving both function and beauty. Whether you need a single
              filling or a comprehensive full-mouth reconstruction, our West Hollywood restorative dentistry practice
              delivers results that look, feel, and perform like natural teeth.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="restorative-section-art" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src={artOfRestorationImg} alt="Dr. Reyhani performing precision dental restoration at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  The Art of Restoration
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  At Genesis by Dr. Ben Reyhani, restoration is a form of renewal — where function
                  meets beauty and science meets artistry. Each treatment is crafted with intention and
                  precision to revive what's been lost, while preserving the essence of what's naturally
                  yours.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Unlike practices that treat restorative work as purely clinical, Dr. Reyhani approaches every
                  case with the same aesthetic standards he brings to <Link href="/cosmetic-dentistry" className="text-[#A4906F] hover:underline">cosmetic dentistry</Link>.
                  The goal is never just to fix a tooth — it's to restore your smile to its most natural, beautiful state.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="restorative-section-when-needed" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              When Do You Need Restorative Dentistry?
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-10">
              Many dental issues develop gradually, making them easy to overlook until they become serious.
              Recognizing the early signs can save you time, discomfort, and more extensive treatment down the road.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="border border-[#383B42]/10 rounded-md p-8">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Common Signs</h3>
                <ul className="space-y-2 text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  <li>• Tooth sensitivity to hot, cold, or sweet foods</li>
                  <li>• Visible chips, cracks, or worn-down surfaces</li>
                  <li>• Pain when chewing or biting down</li>
                  <li>• Old fillings or crowns that feel loose</li>
                  <li>• Discoloration that indicates decay beneath the surface</li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="border border-[#383B42]/10 rounded-md p-8">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Why Early Treatment Matters</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  A small cavity today can become a root canal tomorrow. Early intervention preserves more of your
                  natural tooth structure, keeps treatment simpler and less invasive, and often costs significantly less.
                  At Genesis, we encourage proactive care — addressing issues before they compromise your comfort
                  or your smile.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="restorative-section-services" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1200px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Our Restorative Dentistry Services
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src={fillingsImg} alt="Tooth-colored composite dental filling at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h3 className="font-serif text-[24px] md:text-[30px] leading-[28px] md:leading-[34px] uppercase text-[#383B42]">
                  Tooth-Colored Fillings
                </h3>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Seamless. Durable. Invisible. Our advanced composite restorations are precisely
                  shade-matched to your natural teeth — restoring health and strength without
                  compromising aesthetics. No metal, no distractions — just a flawless, natural finish.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Dr. Reyhani uses layered bonding techniques that mimic the depth and translucency of natural
                  enamel, creating fillings that are virtually undetectable even under close inspection.
                </p>
              </div>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <FadeInSection className="order-2 lg:order-1">
              <div className="space-y-6">
                <h3 className="font-serif text-[24px] md:text-[30px] leading-[28px] md:leading-[34px] uppercase text-[#383B42]">
                  Custom Dental Crowns
                </h3>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Protection. Precision. Perfection. Each custom crown is meticulously designed to
                  replicate the natural shape, color, and translucency of your existing teeth. Crafted from
                  high-quality porcelain and zirconia, our crowns restore function, durability, and harmony —
                  ensuring your smile remains radiant and resilient.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2} className="order-1 lg:order-2">
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src={crownsImg} alt="Custom porcelain dental crown by Dr. Reyhani at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Dental Bridges</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Replace one or more missing teeth with a fixed, natural-looking bridge anchored to adjacent teeth.
                  Each bridge is custom-designed to restore your bite, preserve facial structure, and blend seamlessly
                  with your natural smile.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Inlays & Onlays</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  When a filling isn't enough but a crown isn't yet necessary, porcelain inlays and onlays offer the ideal
                  middle ground. These custom-fabricated restorations provide exceptional strength and a precise,
                  conservative fit.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Full Mouth Reconstruction</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  For patients with multiple dental concerns, Dr. Reyhani creates a comprehensive plan that may combine
                  crowns, bridges, <Link href="/dental-implants" className="text-[#A4906F] hover:underline">dental implants</Link>,
                  and veneers to rebuild an entire smile from the ground up. Learn more about our
                  approach to <Link href="/full-mouth-reconstruction" className="text-[#A4906F] hover:underline">full mouth reconstruction</Link>.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="restorative-section-approach" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src={westHollywoodImg} alt="Restorative dental procedure at Genesis in West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  The Genesis Approach to Restorative Care
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  What sets Genesis apart is our refusal to separate function from aesthetics. Dr. Reyhani
                  treats every restoration as an opportunity to improve not just the health of a tooth, but the
                  overall beauty of your smile. Using 3D CBCT imaging and digital planning, every case is
                  mapped with surgical precision before treatment begins.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Our concierge approach means unhurried appointments, personalized attention, and a private,
                  spa-like environment designed to put you at ease. From your first consultation to your final
                  follow-up, every detail is managed with care. <Link href="/contact" className="text-[#A4906F] hover:underline">Schedule
                  your visit</Link> to experience the difference.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="restorative-section-faq" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[800px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Frequently Asked Questions About Restorative Dentistry
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <FAQAccordion />
          </FadeInSection>
        </div>
      </section>

      <section
        data-testid="restorative-section-cta"
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
              Whether you need a simple filling or a complete reconstruction, Genesis delivers restorative
              results that look and feel like your own natural teeth. Dr. Reyhani combines advanced technology and
              meticulous care to ensure every restoration is built to last. Schedule your consultation
              today and take the first step toward a stronger, more beautiful smile.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                data-testid="restorative-link-cta-consultation"
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Request Consultation
              </a>
              <a
                data-testid="restorative-link-cta-call"
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
