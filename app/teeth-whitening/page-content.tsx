'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

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
    question: "How white will my teeth get with professional whitening?",
    answer: "Most patients achieve results that are six to ten shades brighter after in-office whitening. The exact outcome depends on your starting shade, the type of staining present, and the treatment method selected. During your consultation, Dr. Reyhani will evaluate your teeth and provide a realistic preview of what to expect."
  },
  {
    question: "Is professional teeth whitening safe?",
    answer: "Absolutely. Professional whitening is one of the safest cosmetic dental procedures available. At Genesis, Dr. Reyhani uses clinically proven formulations and carefully monitors every treatment to protect your enamel and gums. Unlike over-the-counter products, professional-grade whitening is supervised to prevent sensitivity and ensure even, consistent results."
  },
  {
    question: "How long does teeth whitening last?",
    answer: "Professional whitening results typically last one to three years, depending on your dietary habits and oral care routine. Patients who avoid heavy staining from coffee, red wine, and tobacco tend to enjoy longer-lasting brightness. Periodic touch-ups with your custom take-home trays can extend your results indefinitely."
  },
  {
    question: "Will teeth whitening cause sensitivity?",
    answer: "Some patients experience mild, temporary sensitivity during or shortly after treatment. Dr. Reyhani uses desensitizing agents and carefully controlled application protocols to minimize discomfort. Any sensitivity typically resolves within 24 to 48 hours after treatment."
  },
  {
    question: "How much does professional teeth whitening cost in West Hollywood?",
    answer: "Professional in-office whitening at Genesis typically ranges from $500 to $1,000, depending on the treatment selected. Custom take-home whitening trays are also available at a lower price point. Dr. Reyhani will discuss all options and pricing during your consultation so you can choose the approach that fits your goals and budget."
  },
  {
    question: "Can I whiten my teeth if I have veneers or crowns?",
    answer: "Whitening treatments work on natural tooth enamel and will not change the color of existing porcelain veneers, crowns, or bonding. If you have restorations, Dr. Reyhani can develop a plan that whitens your natural teeth first and then matches or replaces restorations as needed for a uniform, seamless result."
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-[#383B42]/15 rounded-md overflow-hidden" data-testid={`whitening-faq-item-${i}`}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
            data-testid={`whitening-faq-toggle-${i}`}
          >
            <span className="font-serif text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] text-[#383B42] pr-4">{faq.question}</span>
            {openIndex === i ? <ChevronUp className="w-5 h-5 shrink-0 text-[#A4906F]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-[#A4906F]" />}
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <p className="px-6 pb-5 text-[15px] leading-[24px] text-[#383B42]/70 font-sans">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TeethWhiteningContent() {
  return (
    <div className="bg-[#383B42] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Professional Teeth Whitening',
            provider: {
              '@type': 'Dentist',
              name: 'Genesis by Dr. Ben Reyhani',
              url: 'https://genesisbydrben.com',
            },
            areaServed: { '@type': 'City', name: 'West Hollywood' },
            url: 'https://genesisbydrben.com/teeth-whitening',
          }),
        }}
      />
      <section data-testid="whitening-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src="/images/Group-1597883871-1_1771444440714.png" alt="Genesis dental office interior in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: "Teeth Whitening" }]} />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Professional Teeth Whitening in West Hollywood
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-4">
            <ChevronDown className="w-6 h-6 text-white/50 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section data-testid="whitening-section-intro" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeInSection>
            <p className="text-[16px] md:text-[17px] leading-[26px] md:leading-[28px] text-[#383B42]/75 font-sans">
              Professional teeth whitening in West Hollywood offers the fastest, safest path to a brighter, more radiant
              smile. At Genesis, <Link href="/about" className="text-[#A4906F] hover:underline">Dr. Ben Reyhani</Link> uses
              clinical-grade whitening systems that deliver results far beyond what store-bought strips and trays can
              achieve. Whether you're preparing for a special occasion or simply want to refresh your appearance, our
              teeth whitening treatments are designed to brighten your smile beautifully and comfortably.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="whitening-section-why-professional" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src="/images/veneer-color_1771444745465.png" alt="Professional teeth whitening shade guide at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  Why Professional Whitening
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Over-the-counter whitening products offer a one-size-fits-all approach with limited concentrations
                  and uneven application. Professional whitening at Genesis uses higher-grade formulations that are
                  carefully calibrated to your teeth, delivering dramatically brighter results in a fraction of the time.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  More importantly, professional whitening is supervised by Dr. Reyhani to protect your enamel and
                  gum tissue. Custom-fitted trays ensure even coverage, while desensitizing protocols minimize any
                  discomfort. The result is a safer, more effective treatment that produces consistent, natural-looking brightness.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="whitening-section-experience" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection className="order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  The Genesis Whitening Experience
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  At Genesis, even a straightforward whitening treatment feels like a luxury experience. Your visit
                  begins in a private treatment suite where Dr. Reyhani evaluates your current shade and discusses
                  your brightness goals. Every step is tailored to you — from the whitening concentration to the
                  application technique.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Whether paired with <Link href="/porcelain-veneers" className="text-[#A4906F] hover:underline">porcelain veneers</Link> as
                  part of a complete smile makeover or as a standalone refresh, our whitening treatments are designed
                  to complement your overall <Link href="/cosmetic-dentistry" className="text-[#A4906F] hover:underline">cosmetic dentistry</Link> goals.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2} className="order-1 lg:order-2">
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src="/images/DSC09930-1-2048x1368_1771444884414.jpg" alt="Dr. Reyhani performing professional teeth whitening at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="whitening-section-types" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Types of Whitening We Offer
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">In-Office Whitening</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Our in-office treatment delivers the most dramatic results in a single visit — typically 60 to 90
                  minutes. Using professional-strength whitening gel and advanced light activation, Dr. Reyhani can
                  brighten your smile by six to ten shades in one comfortable session. Ideal for patients who want
                  immediate, show-stopping results.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Custom Take-Home Trays</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  For patients who prefer a gradual approach, we create custom-fitted whitening trays paired with
                  professional-grade gel. Wear them for 30 to 60 minutes daily over two to three weeks for beautiful,
                  even results at your own pace. These trays also serve as the perfect tool for touch-ups down the road.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="whitening-section-process" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              What to Expect
            </h2>
          </FadeInSection>
          <div className="space-y-10">
            {[
              { step: "01", title: "Consultation & Evaluation", desc: "Dr. Reyhani examines your teeth and gums, discusses your whitening goals, and determines the best treatment approach. He'll also address any existing sensitivity or dental work that may affect your results." },
              { step: "02", title: "Preparation", desc: "Your gums and soft tissues are carefully protected with a barrier shield. For take-home treatments, custom impressions are taken to fabricate your personalized whitening trays." },
              { step: "03", title: "Whitening Application", desc: "Professional-grade whitening gel is applied in carefully timed intervals. For in-office treatments, advanced light activation accelerates the process for maximum brightness in minimal time." },
              { step: "04", title: "Results & Aftercare", desc: "You'll see your new, brighter smile immediately. Dr. Reyhani provides aftercare instructions and tips for maintaining your results, including dietary guidance for the first 48 hours and long-term maintenance recommendations." },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="flex gap-6 md:gap-8 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#A4906F]/15 flex items-center justify-center">
                    <span className="font-serif text-[16px] text-[#A4906F]">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-2">{item.title}</h3>
                    <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">{item.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="whitening-section-longevity" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              How Long Results Last
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-10">
              Professional whitening results typically last one to three years. Your lifestyle choices play the biggest role
              in maintaining your brightness over time.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Avoid Staining</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Minimize exposure to coffee, red wine, tea, and tobacco — especially in the first 48 hours after treatment
                  when your enamel is most porous. Using a straw for dark beverages can also help.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Maintain Hygiene</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Brushing twice daily, flossing, and regular professional cleanings at Genesis keep your teeth healthy
                  and bright. A whitening toothpaste can provide gentle daily maintenance between treatments.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Touch-Up Treatments</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Periodic touch-ups with your custom take-home trays can keep your smile at its brightest indefinitely.
                  Most patients schedule a brief touch-up every six to twelve months for optimal results.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="whitening-section-cost" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Cost and Financing
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-10">
              Professional teeth whitening is one of the most accessible cosmetic dental treatments — delivering
              significant impact at a fraction of the cost of other procedures.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Your Investment</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  In-office professional whitening at Genesis typically ranges from $500 to $1,000. Custom take-home
                  whitening kits are available at a lower price point, offering professional-grade results on your schedule.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Flexible Options</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Genesis offers flexible financing so a brighter smile is always within reach. Our team will walk you
                  through every option during your <Link href="/contact" className="text-[#A4906F] hover:underline">consultation</Link>,
                  ensuring complete transparency with no surprises.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="whitening-section-faq" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[800px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Frequently Asked Questions About Teeth Whitening
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <FAQAccordion />
          </FadeInSection>
        </div>
      </section>

      <section data-testid="whitening-section-resources" className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h3 className="font-serif text-[20px] md:text-[24px] leading-[26px] md:leading-[30px] uppercase text-[#383B42] mb-6">
            Related Services
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link href="/cosmetic-dentistry" data-testid="whitening-link-cosmetic" className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md">
              All Cosmetic Services
            </Link>
            <Link href="/porcelain-veneers" data-testid="whitening-link-veneers" className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md">
              Porcelain Veneers
            </Link>
            <Link href="/gallery" data-testid="whitening-link-gallery" className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md">
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>

      <section data-testid="whitening-section-cta" className="pt-20 md:pt-28 pb-32 md:pb-40 px-6 relative">
        <div className="absolute inset-0">
          <img src="/images/Group-1597884055_1771441438103.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40" style={{ background: 'linear-gradient(to bottom, transparent, #383B42)' }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase">
              Brighten Your Smile Today
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] md:text-[17px] leading-[22px] md:leading-[21px] text-white/60 font-serif">
              Discover how professional teeth whitening at Genesis can transform your smile safely and beautifully.
              Schedule a consultation at our West Hollywood office to learn which whitening option is right for you.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                data-testid="whitening-link-cta-consultation"
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Request Consultation
              </a>
              <a
                data-testid="whitening-link-cta-call"
                href="tel:+13103883404"
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
