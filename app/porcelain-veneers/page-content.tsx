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

function BeforeAfterSlider({ beforeImg, afterImg }: { beforeImg: string; afterImg: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  };

  return (
    <div
      ref={containerRef}
      data-testid="veneers-slider-before-after"
      className="relative rounded-md select-none touch-none cursor-col-resize"
      onPointerDown={(e) => { isDragging.current = true; (e.target as HTMLElement).setPointerCapture(e.pointerId); updatePosition(e.clientX); }}
      onPointerMove={(e) => { if (isDragging.current) updatePosition(e.clientX); }}
      onPointerUp={() => { isDragging.current = false; }}
    >
      <img src={afterImg} alt="After porcelain veneers by Dr. Ben Reyhani at Genesis West Hollywood" className="w-full rounded-md block" draggable={false} width="600" height="400" loading="lazy" />
      <div className="absolute inset-0 rounded-md" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <img src={beforeImg} alt="Before porcelain veneers by Dr. Ben Reyhani at Genesis West Hollywood" width="600" height="400" loading="lazy" className="w-full h-full object-cover rounded-md" draggable={false} />
      </div>
      <div className="absolute top-0 bottom-0 w-[3px] bg-white shadow-lg" style={{ left: `${position}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L3 10L7 16" stroke="#383B42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 4L17 10L13 16" stroke="#383B42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#383B42]/70 text-white text-[10px] tracking-[0.1em] uppercase font-sans rounded-md" style={{ opacity: position > 15 ? 1 : 0, transition: 'opacity 0.2s' }}>After</div>
      <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#383B42]/70 text-white text-[10px] tracking-[0.1em] uppercase font-sans rounded-md" style={{ opacity: position < 85 ? 1 : 0, transition: 'opacity 0.2s' }}>Before</div>
    </div>
  );
}

const faqs = [
  {
    question: "How long do porcelain veneers last?",
    answer: "With proper care, high-quality porcelain veneers typically last 15 to 20 years. Dr. Reyhani uses only premium ceramics from leading dental laboratories, and his precise bonding techniques help maximize the longevity of every restoration. Regular checkups and good oral hygiene will keep your veneers looking beautiful for years to come."
  },
  {
    question: "Do porcelain veneers look natural?",
    answer: "When designed by a skilled cosmetic dentist like Dr. Reyhani, porcelain veneers are virtually indistinguishable from natural teeth. The porcelain mimics the translucency, depth, and light-reflecting properties of real enamel. Each veneer is custom-shaded and shaped to complement your facial features, skin tone, and personality."
  },
  {
    question: "Are porcelain veneers painful to get?",
    answer: "The veneer process is minimally invasive and generally well-tolerated. During the preparation phase, a thin layer of enamel is gently removed under local anesthesia, so you won't feel any discomfort. Most patients describe the experience as easier than they expected, with little to no sensitivity afterward."
  },
  {
    question: "How much do porcelain veneers cost in West Hollywood?",
    answer: "Porcelain veneers in West Hollywood typically range from $2,000 to $3,500 per tooth, depending on the complexity of the case and the type of veneer selected. At Genesis, we offer flexible financing options to help make your investment more accessible. During your consultation, Dr. Reyhani will provide a detailed, transparent estimate."
  },
  {
    question: "Can veneers fix crooked teeth?",
    answer: "Porcelain veneers can correct the appearance of mildly crooked or misaligned teeth without the need for braces or aligners. By placing custom-shaped veneers over the front surface of your teeth, Dr. Reyhani can create the appearance of a perfectly straight smile in just two visits. For more significant alignment issues, orthodontic treatment may be recommended first."
  },
  {
    question: "What is the difference between porcelain veneers and composite bonding?",
    answer: "Porcelain veneers are custom-fabricated in a dental laboratory and offer superior durability, stain resistance, and a more natural appearance. Composite bonding is applied directly to the tooth in a single visit and is ideal for minor corrections. Dr. Reyhani will recommend the best option based on your goals, budget, and the condition of your teeth."
  },
  {
    question: "How do I care for my porcelain veneers?",
    answer: "Caring for porcelain veneers is straightforward — brush and floss daily, visit Genesis for regular checkups, and avoid biting into very hard objects like ice or pen caps. Porcelain is highly stain-resistant, but maintaining good oral hygiene ensures your veneers and natural teeth stay healthy and vibrant."
  },
  {
    question: "Can old or damaged veneers be replaced?",
    answer: "Yes. If your existing veneers are chipped, worn, or outdated, Dr. Reyhani can replace them with new, beautifully crafted porcelain veneers. Many patients come to Genesis to upgrade older veneers with modern materials and techniques that deliver a more natural, refined result."
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-[#383B42]/15 rounded-md overflow-hidden" data-testid={`veneers-faq-item-${i}`}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
            data-testid={`veneers-faq-toggle-${i}`}
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

export default function PorcelainVeneersContent() {
  return (
    <div className="bg-[#383B42] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Porcelain Veneers',
            provider: {
              '@type': 'Dentist',
              name: 'Genesis by Dr. Ben Reyhani',
              url: 'https://genesisbydrben.com',
            },
            areaServed: { '@type': 'City', name: 'West Hollywood' },
            url: 'https://genesisbydrben.com/porcelain-veneers',
          }),
        }}
      />
      <section data-testid="veneers-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src="/images/Group-1597883871-1_1771444440714.png" alt="Genesis dental office interior in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: "Porcelain Veneers" }]} />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Porcelain Veneers in West Hollywood
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-4">
            <ChevronDown className="w-6 h-6 text-white/50 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section data-testid="veneers-section-intro" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeInSection>
            <p className="text-[16px] md:text-[17px] leading-[26px] md:leading-[28px] text-[#383B42]/75 font-sans">
              Porcelain veneers in West Hollywood have become the gold standard for smile transformation — and at Genesis,
              they're elevated to an art form. <Link href="/about" className="text-[#A4906F] hover:underline">Dr. Ben Reyhani</Link> is
              a leading porcelain veneer specialist whose meticulous approach blends dental science with fine artistry. Whether
              you're looking to correct chips, close gaps, or completely redesign your smile, our custom porcelain veneers deliver
              results that are as natural as they are stunning.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="veneers-section-art" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src="/images/veneer-color_1771444745465.png" alt="Porcelain veneer shade selection at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  The Art of Porcelain Veneers
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Porcelain veneers are ultra-thin shells of medical-grade ceramic that are bonded to the front surface
                  of your teeth. They transform the color, shape, size, and alignment of your smile in as few as two
                  visits — with results that can last two decades or more.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  What sets Dr. Reyhani apart is his artistic approach to veneer design. Rather than applying a
                  one-size-fits-all template, he studies your facial proportions, lip dynamics, skin tone, and personal
                  style to craft veneers that look like they were always meant to be yours. Every shade, contour, and
                  surface texture is considered — creating a smile that catches the light beautifully and looks
                  authentically natural.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="veneers-section-why-choose" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Why Choose Porcelain Veneers
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-14">
              Porcelain veneers remain one of the most versatile and effective solutions in <Link href="/cosmetic-dentistry" className="text-[#A4906F] hover:underline">cosmetic dentistry</Link>.
              Here's why patients choose them.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Natural Appearance</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  High-quality porcelain mimics the translucency, depth, and light-reflecting properties of natural tooth
                  enamel. The result is a smile that looks effortlessly beautiful — never artificial or opaque.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Exceptional Durability</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Porcelain veneers are remarkably strong and resistant to chipping. With proper care, they maintain their
                  beauty and structural integrity for 15 to 20 years — a lasting investment in your confidence.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Stain Resistance</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Unlike natural enamel, porcelain is highly resistant to staining from coffee, wine, tea, and other
                  common culprits. Your veneers will stay bright and vibrant with minimal maintenance.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Versatile Correction</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Veneers can address a wide range of concerns in a single treatment: chips, cracks, gaps between teeth,
                  stubborn discoloration, uneven tooth size, and mild misalignment — all without braces or lengthy procedures.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="veneers-section-process" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[900px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              The Genesis Veneer Process
            </h2>
          </FadeInSection>
          <div className="space-y-10">
            {[
              { step: "01", title: "Consultation", desc: "Your journey begins with an in-depth consultation where Dr. Reyhani listens to your goals, evaluates your oral health, and discusses the possibilities. Digital imaging and photography give you a clear picture of what's achievable." },
              { step: "02", title: "Smile Design", desc: "Using digital smile design technology and diagnostic wax-ups, Dr. Reyhani maps the ideal proportions, shape, and shade for your veneers. You'll preview your new smile before any preparation begins — ensuring complete confidence in the plan." },
              { step: "03", title: "Preparation", desc: "A thin layer of enamel — often less than half a millimeter — is gently removed to create space for the veneers. Precise impressions are taken and sent to our master ceramist, and temporary veneers are placed to protect your teeth." },
              { step: "04", title: "Placement", desc: "Once your custom veneers arrive from the laboratory, Dr. Reyhani bonds each one with meticulous precision. He evaluates the fit, color, and alignment under multiple lighting conditions to ensure a flawless, natural result." },
              { step: "05", title: "The Reveal", desc: "The moment you see your new smile for the first time. Dr. Reyhani reviews care instructions and schedules a follow-up to ensure everything feels perfect. Most patients leave the office with an entirely new level of confidence." },
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

      <section data-testid="veneers-section-types" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Types of Veneers We Offer
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm mb-8">
                <img src="/images/DSC09930-1-2048x1368_1771444884414.jpg" alt="Custom porcelain veneer craftsmanship at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-3">Traditional Porcelain Veneers</h3>
                  <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                    The gold standard in smile transformation. Traditional veneers involve a thin layer of enamel removal
                    to achieve the most dramatic, long-lasting results. Ideal for patients seeking a significant change in
                    color, shape, or alignment.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-3">Minimal-Prep Veneers</h3>
                  <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                    For patients who want a conservative approach, minimal-prep veneers require little to no enamel removal.
                    These ultra-thin restorations are ideal for minor refinements — subtle shape adjustments, small gaps, or
                    light discoloration.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-3">Choosing the Right Option</h3>
                  <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                    During your consultation, Dr. Reyhani evaluates the condition of your teeth, your aesthetic goals, and
                    the degree of transformation you're seeking. He'll recommend the veneer type that delivers the best balance
                    of beauty, longevity, and conservation of your natural tooth structure.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="veneers-section-cost" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Porcelain Veneers Cost and Financing
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Your Investment</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Porcelain veneers in West Hollywood typically range from $2,000 to $3,500 per tooth. The final investment
                  depends on the number of veneers, the complexity of the case, and the type of veneer selected.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Flexible Financing</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Genesis offers flexible payment plans and financing options so your dream smile is within reach. Our
                  team will walk you through every option during your consultation, so there are never any surprises.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Why Quality Matters</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  With veneers, craftsmanship determines longevity. Bargain veneers often result in unnatural
                  appearance, poor fit, and premature failure. Dr. Reyhani uses only premium ceramics and master
                  laboratory artisans to ensure results that last and look extraordinary.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="veneers-section-before-after" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <BeforeAfterSlider beforeImg="/images/DSC2927-scaled_1771444805997.jpg" afterImg="/images/DSC3546-1-scaled_1771444808210.jpg" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  Before and After Veneers
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  The proof is in the results. Dr. Reyhani's portfolio of veneer transformations showcases the
                  precision, artistry, and natural beauty that define every case at Genesis. From subtle refinements
                  to complete smile makeovers, each result speaks for itself.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Browse our full collection of transformations in the <Link href="/gallery" className="text-[#A4906F] hover:underline">smile gallery</Link> to
                  see what's possible for your smile.
                </p>
                <Link
                  href="/gallery"
                  data-testid="veneers-link-gallery"
                  className="inline-flex items-center px-6 py-3 bg-[#383B42] text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover-elevate rounded-md mt-2 font-sans"
                >
                  View Gallery
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="veneers-section-faq" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[800px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Frequently Asked Questions About Porcelain Veneers
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <FAQAccordion />
          </FadeInSection>
        </div>
      </section>

      <section data-testid="veneers-section-resources" className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h3 className="font-serif text-[20px] md:text-[24px] leading-[26px] md:leading-[30px] uppercase text-[#383B42] mb-6">
            Related Resources
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link href="/blog/how-much-do-veneers-cost-los-angeles" data-testid="veneers-link-blog-cost" className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md">
              How Much Do Veneers Cost in LA?
            </Link>
            <Link href="/cosmetic-dentistry" data-testid="veneers-link-cosmetic" className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md">
              All Cosmetic Services
            </Link>
            <Link href="/blog/smile-makeover-los-angeles-guide" data-testid="veneers-link-blog-makeover" className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md">
              Smile Makeover Guide
            </Link>
          </div>
        </div>
      </section>

      <section data-testid="veneers-section-cta" className="pt-20 md:pt-28 pb-32 md:pb-40 px-6 relative">
        <div className="absolute inset-0">
          <img src="/images/Group-1597884055_1771441438103.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40" style={{ background: 'linear-gradient(to bottom, transparent, #383B42)' }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase">
              Ready for Your Veneer Consultation?
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] md:text-[17px] leading-[22px] md:leading-[21px] text-white/60 font-serif">
              Discover how custom porcelain veneers by Dr. Reyhani can transform your smile. Schedule a private
              consultation at our West Hollywood office to explore your options and preview your new smile
              before treatment begins.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                data-testid="veneers-link-cta-consultation"
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Request Consultation
              </a>
              <a
                data-testid="veneers-link-cta-call"
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
