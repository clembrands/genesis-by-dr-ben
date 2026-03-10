'use client';
import Link from 'next/link';
import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';
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

function BeforeAfterSlider({ beforeImg, afterImg }: { beforeImg: string; afterImg: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      data-testid="slider-before-after"
      className="relative rounded-md select-none touch-none cursor-col-resize"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <img src={afterImg} alt="After porcelain veneers by Dr. Ben Reyhani at Genesis Los Angeles" className="w-full rounded-md block" draggable={false} width="600" height="400" loading="lazy" />
      <div
        className="absolute inset-0 rounded-md"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <img src={beforeImg} alt="Before smile makeover by Dr. Ben Reyhani at Genesis Los Angeles" width="600" height="400" loading="lazy" className="w-full h-full object-cover rounded-md" draggable={false} />
      </div>
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-lg"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L3 10L7 16" stroke="#383B42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 4L17 10L13 16" stroke="#383B42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-3 left-3 px-3 py-1 bg-[#383B42]/70 text-white text-[10px] tracking-[0.1em] uppercase font-sans rounded-md"
        style={{ opacity: position > 15 ? 1 : 0, transition: 'opacity 0.2s' }}
      >
        After
      </div>
      <div
        className="absolute bottom-3 right-3 px-3 py-1 bg-[#383B42]/70 text-white text-[10px] tracking-[0.1em] uppercase font-sans rounded-md"
        style={{ opacity: position < 85 ? 1 : 0, transition: 'opacity 0.2s' }}
      >
        Before
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "How do I know which cosmetic dental treatment is right for me?",
    answer: "Every smile is unique, which is why Dr. Reyhani begins with a comprehensive consultation that includes digital imaging, facial analysis, and a candid conversation about your goals. Based on your dental health, aesthetic preferences, and lifestyle, he'll recommend a tailored treatment plan — whether that's porcelain veneers, whitening, bonding, or a full smile makeover."
  },
  {
    question: "How long do cosmetic dental results last?",
    answer: "Longevity depends on the treatment. Porcelain veneers typically last 15 to 20 years with proper care. Professional whitening results can last one to three years depending on dietary habits. Cosmetic bonding may last five to ten years. During your consultation, Dr. Reyhani will explain what to expect and how to maintain your results over time."
  },
  {
    question: "Is cosmetic dentistry painful?",
    answer: "Most cosmetic procedures involve minimal discomfort. Dr. Reyhani uses advanced techniques and sedation options to ensure your comfort throughout every visit. Many patients are surprised by how gentle the experience is — from the initial preparation to the final placement, your comfort is always the priority."
  },
  {
    question: "How much does cosmetic dentistry cost in West Hollywood?",
    answer: "The investment varies depending on the complexity and scope of treatment. Porcelain veneers in West Hollywood typically range from $2,000 to $3,500 per tooth, while comprehensive smile makeovers are customized to your specific needs. Genesis offers flexible financing options so you can achieve the smile you deserve without compromise."
  },
  {
    question: "What is the difference between cosmetic and restorative dentistry?",
    answer: "Cosmetic dentistry focuses on improving the appearance of your smile — color, shape, symmetry, and overall aesthetics. Restorative dentistry addresses structural issues like damaged, decayed, or missing teeth. At Genesis, Dr. Reyhani often combines both disciplines, ensuring that every restoration looks as beautiful as it functions."
  },
  {
    question: "How do I get started with a smile makeover?",
    answer: "The first step is a private consultation with Dr. Reyhani. During this visit, he'll evaluate your oral health, discuss your vision, and outline a personalized treatment plan with clear timelines and pricing. You can schedule your consultation online or call our West Hollywood office at (310)-388-3404."
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
          data-testid={`cosmetic-faq-item-${i}`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
            data-testid={`cosmetic-faq-toggle-${i}`}
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
              openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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

export default function CosmeticDentistryContent() {
  return (
    <div className="bg-[#383B42] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Cosmetic Dentistry',
            provider: {
              '@type': 'Dentist',
              name: 'Genesis by Dr. Ben Reyhani',
              url: 'https://genesisbydrben.com',
            },
            areaServed: { '@type': 'City', name: 'West Hollywood' },
            url: 'https://genesisbydrben.com/cosmetic-dentistry',
          }),
        }}
      />
      <section data-testid="cosmetic-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src="/images/Group-1597883871-1_1771444440714.png" alt="Genesis dental office interior in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: "Cosmetic Dentistry" }]} />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Cosmetic Dentistry
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

      <section data-testid="cosmetic-section-intro" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeInSection>
            <p className="text-[16px] md:text-[17px] leading-[26px] md:leading-[28px] text-[#383B42]/75 font-sans">
              As a leading cosmetic dentist in West Hollywood, <Link href="/about" className="text-[#A4906F] hover:underline">Dr. Ben Reyhani</Link> brings
              an artist's eye and a surgeon's precision to every treatment. Cosmetic dentistry at Genesis goes beyond surface-level
              improvements — it's about designing a smile that reflects your confidence, complements your features, and stands
              the test of time. Whether you're considering porcelain veneers, a complete smile makeover, or subtle refinements,
              our West Hollywood cosmetic dentistry practice delivers results that are as natural as they are transformative.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="cosmetic-section-veneer" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src="/images/veneer-color_1771444745465.png" alt="Porcelain veneer shade selection for cosmetic dentistry at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  Veneer Color
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Shade is everything. Guided by both art and science, Dr. Reyhani selects tones that
                  harmonize with your complexion, features, and personality — creating a smile that is
                  naturally radiant, never artificial.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Every set of porcelain veneers is custom-fabricated to match the translucency and depth of natural enamel.
                  The result is a smile that catches the light beautifully and looks authentically yours, whether you're
                  in a boardroom or on a red carpet.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="cosmetic-section-smile" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection className="order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  Smile Design
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Beyond aesthetics, we design smiles that reflect confidence and individuality. Each
                  transformation is tailored to your proportions and expression, ensuring results that
                  are timeless and true to you.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Using digital smile design technology, Dr. Reyhani maps the ideal proportions for your teeth
                  relative to your lips, gum line, and facial structure. You'll preview your new smile before treatment
                  begins — so there are no surprises, only anticipation. Explore real transformations in
                  our <Link href="/gallery" className="text-[#A4906F] hover:underline">smile gallery</Link>.
                </p>
                <a
                  data-testid="cosmetic-link-consultation-smile"
                  href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#383B42] text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover-elevate rounded-md mt-2 font-sans"
                >
                  Request Consultation
                </a>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2} className="order-1 lg:order-2">
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <BeforeAfterSlider beforeImg="/images/DSC2927-scaled_1771444805997.jpg" afterImg="/images/DSC3546-1-scaled_1771444808210.jpg" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="cosmetic-section-services" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Our Cosmetic Dentistry Services
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Porcelain Veneers</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans mb-4">
                  Ultra-thin porcelain shells custom-crafted to transform the shape, color, and alignment of your teeth.
                  Dr. Reyhani's veneers are known for their lifelike translucency and natural appearance — designed
                  to enhance, never overpower.
                </p>
                <Link href="/porcelain-veneers" data-testid="cosmetic-link-veneers" className="text-[#A4906F] text-[11px] tracking-[0.1em] uppercase font-sans hover:underline">Learn More →</Link>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Teeth Whitening</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans mb-4">
                  Professional-grade whitening that delivers dramatic results safely and comfortably. Whether
                  you prefer an in-office treatment or a custom take-home system, we'll brighten your smile
                  by several shades while protecting your enamel.
                </p>
                <Link href="/teeth-whitening" data-testid="cosmetic-link-whitening" className="text-[#A4906F] text-[11px] tracking-[0.1em] uppercase font-sans hover:underline">Learn More →</Link>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Smile Makeovers</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans mb-4">
                  A comprehensive approach that combines multiple treatments — veneers, whitening, bonding,
                  and gum contouring — into one cohesive plan. Every smile makeover at Genesis is a bespoke
                  creation, tailored to your unique facial proportions and personal style.
                </p>
                <Link href="/smile-makeovers" data-testid="cosmetic-link-makeover" className="text-[#A4906F] text-[11px] tracking-[0.1em] uppercase font-sans hover:underline">Learn More →</Link>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Cosmetic Bonding</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans mb-4">
                  A minimally invasive solution for chips, gaps, and minor imperfections. Using tooth-colored
                  composite resin, Dr. Reyhani sculpts and refines your teeth in a single visit — an ideal
                  option for patients seeking beautiful results with minimal preparation.
                </p>
                <Link href="/contact" data-testid="cosmetic-link-bonding" className="text-[#A4906F] text-[11px] tracking-[0.1em] uppercase font-sans hover:underline">Learn More →</Link>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.5}>
              <div className="bg-white rounded-md p-8 h-full md:col-span-2 md:max-w-[calc(50%-1rem)]">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Gum Contouring</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans mb-4">
                  Reshape your gum line to reveal more of your natural tooth structure and achieve a balanced,
                  symmetrical smile. This precise procedure corrects a "gummy smile" and creates the ideal
                  frame for your teeth.
                </p>
                <Link href="/contact" data-testid="cosmetic-link-gum" className="text-[#A4906F] text-[11px] tracking-[0.1em] uppercase font-sans hover:underline">Learn More →</Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="cosmetic-section-reconstructive" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src="/images/DSC09930-1-2048x1368_1771444884414.jpg" alt="Reconstructive dental excellence at Genesis by Dr. Ben Reyhani West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  Reconstructive Excellence
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  When restoration is needed, we rebuild with intention, precision, and artistry.
                  Through advanced techniques, Dr. Reyhani restores strength, function, and beauty,
                  merging innovation with aesthetic mastery.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  For patients who need both cosmetic and structural work, Genesis offers a seamless integration
                  of disciplines. From <Link href="/dental-implants" className="text-[#A4906F] hover:underline">dental implants</Link> to
                  full-mouth reconstructions, every case is approached with the same commitment to beauty and longevity.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="cosmetic-section-why-choose" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Why Choose Genesis for Cosmetic Dentistry in West Hollywood
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-14">
              Not all cosmetic dentistry is created equal. At Genesis, every detail is intentional — from the
              materials we select to the way we welcome you into our practice.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-md p-8">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Artistry & Expertise</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  With 17+ years of specialized experience, <Link href="/about" className="text-[#A4906F] hover:underline">Dr. Reyhani</Link> approaches
                  every case as both a clinician and an artist. His deep understanding of facial aesthetics, dental
                  proportions, and material science allows him to create results that other practices simply cannot replicate.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-md p-8">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Bespoke Treatment Planning</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  No two smiles are alike, and no two treatment plans should be either. Dr. Reyhani uses digital
                  imaging and wax-up models to design your smile before any work begins, ensuring complete alignment
                  between your vision and the final result.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="bg-white rounded-md p-8">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Luxury Patient Experience</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  From the moment you step into our West Hollywood office, you'll feel the difference. Genesis was
                  designed to feel more like a boutique retreat than a dental clinic — with private treatment suites,
                  personalized attention, and an unhurried approach to your care.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="bg-white rounded-md p-8">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Advanced Technology</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  We invest in the latest dental technology — including 3D CBCT imaging, digital smile design,
                  and premium ceramics from leading laboratories — to deliver precision, comfort, and outcomes
                  that exceed expectations.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="cosmetic-section-faq" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Frequently Asked Questions About Cosmetic Dentistry
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <FAQAccordion />
          </FadeInSection>
        </div>
      </section>

      <section data-testid="cosmetic-section-resources" className="py-14 md:py-16 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[800px] mx-auto text-center">
          <h3 className="font-serif text-[20px] md:text-[24px] leading-[26px] md:leading-[30px] uppercase text-[#383B42] mb-6">
            Related Resources
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link
              href="/blog/how-much-do-veneers-cost-los-angeles"
              data-testid="cosmetic-link-blog-veneers-cost"
              className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
            >
              How Much Do Veneers Cost in LA?
            </Link>
            <Link
              href="/blog/smile-makeover-los-angeles-guide"
              data-testid="cosmetic-link-blog-smile-makeover"
              className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
            >
              Smile Makeover Guide
            </Link>
            <Link
              href="/gallery"
              data-testid="cosmetic-link-gallery"
              className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
            >
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>

      <section
        data-testid="cosmetic-section-cta"
        className="pt-20 md:pt-28 pb-32 md:pb-40 px-6 relative"
      >
        <div className="absolute inset-0">
          <img
            src="/images/Group-1597884055_1771441438103.png"
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
              Your Dream Smile Starts Here
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] md:text-[17px] leading-[22px] md:leading-[21px] text-white/60 font-serif">
              At Genesis, we blend artistry and advanced cosmetic dentistry to craft smiles that look
              natural and radiant. From veneers to full smile makeovers, our personalized approach
              delivers results that reflect your unique confidence. Take the first step today toward
              the smile you deserve.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                data-testid="cosmetic-link-cta-consultation"
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Request Consultation
              </a>
              <a
                data-testid="cosmetic-link-cta-call"
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
