'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

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

const faqCategories = [
  {
    title: 'About Genesis',
    faqs: [
      {
        question: 'What makes Genesis different from other dental practices?',
        answer: 'Genesis was founded on the belief that dentistry should be an art form, not an assembly line. Dr. Reyhani limits his caseload to give each patient the time and attention their smile deserves. Our private, boutique environment in West Hollywood feels more like a luxury retreat than a dental office — with concierge-level service at every touchpoint.'
      },
      {
        question: 'Is Genesis accepting new patients?',
        answer: 'Yes, we are currently welcoming new patients. We invite you to schedule a private consultation with Dr. Reyhani to discuss your goals and explore how Genesis can help you achieve the smile you\'ve always envisioned.'
      },
      {
        question: 'Where is Genesis located and what are your hours?',
        answer: 'Genesis is located in the heart of West Hollywood, California. Our office hours are designed to accommodate busy schedules, and we offer flexible appointment times. Please call our office at (310)-388-3404 or visit our contact page for detailed hours and directions.'
      },
      {
        question: 'How do I schedule a consultation?',
        answer: 'You can schedule a consultation by booking online through our website, calling our office at (310)-388-3404, or visiting our contact page. Our concierge team will guide you through the process and answer any preliminary questions you may have.'
      },
    ],
  },
  {
    title: 'Cosmetic Dentistry',
    faqs: [
      {
        question: 'What cosmetic dental treatments do you offer?',
        answer: 'Genesis offers a comprehensive range of cosmetic treatments including porcelain veneers, professional teeth whitening, cosmetic bonding, gum contouring, and complete smile makeovers. Dr. Reyhani also integrates dental implants and restorative work when needed to achieve optimal aesthetic results.'
      },
      {
        question: 'How do I know which cosmetic treatment is right for me?',
        answer: 'The best way to determine the right treatment is through a consultation with Dr. Reyhani. He\'ll evaluate your oral health, discuss your aesthetic goals, and use digital imaging to show you what\'s possible. Every recommendation is personalized — there are no cookie-cutter solutions at Genesis.'
      },
      {
        question: 'How long do cosmetic dentistry results last?',
        answer: 'Longevity depends on the treatment. Porcelain veneers typically last 15 to 20 years, professional whitening results can last one to three years, and cosmetic bonding may last five to ten years. Proper oral hygiene and regular visits to Genesis will help maximize the lifespan of any cosmetic work.'
      },
    ],
  },
  {
    title: 'Veneers',
    faqs: [
      {
        question: 'How long do porcelain veneers last?',
        answer: 'High-quality porcelain veneers typically last 15 to 20 years with proper care. Dr. Reyhani uses only premium ceramics from leading laboratories and precise bonding techniques to maximize durability. Regular checkups and good oral hygiene are key to long-lasting results.'
      },
      {
        question: 'Are veneers painful to get?',
        answer: 'The veneer process is minimally invasive and generally well-tolerated. A thin layer of enamel is gently removed under local anesthesia, so you won\'t feel discomfort during preparation. Most patients describe the experience as easier than they expected, with little to no sensitivity afterward.'
      },
      {
        question: 'How many veneers do I need?',
        answer: 'The number of veneers depends on your goals. Some patients achieve their desired result with as few as two veneers to correct specific teeth, while others opt for a full set of eight to ten veneers for a complete smile transformation. Dr. Reyhani will recommend the ideal number during your consultation.'
      },
      {
        question: 'Can veneers be removed?',
        answer: 'Porcelain veneers are considered a permanent treatment because a thin layer of enamel is removed during preparation. While veneers can be replaced with new ones, the underlying teeth will always need some form of restoration. Dr. Reyhani ensures you fully understand the commitment before proceeding.'
      },
    ],
  },
  {
    title: 'Dental Implants',
    faqs: [
      {
        question: 'Am I a candidate for dental implants?',
        answer: 'Most adults with good general health are candidates for dental implants. Sufficient jawbone density is needed to support the implant, though bone grafting can address this if necessary. Dr. Reyhani performs a thorough evaluation including 3D imaging to determine your eligibility and develop the best plan for your situation.'
      },
      {
        question: 'How long does the implant process take?',
        answer: 'The complete implant process typically takes three to six months, allowing time for the implant to integrate with the jawbone. In some cases, temporary restorations are placed on the same day as surgery so you\'re never without teeth. Dr. Reyhani will outline your specific timeline during your consultation.'
      },
      {
        question: 'What is the difference between All-on-4 and traditional implants?',
        answer: 'Traditional implants replace individual teeth with a single implant and crown per tooth. All-on-4 uses just four strategically angled implants to support a full arch of teeth, making it ideal for patients missing most or all teeth in an arch. All-on-4 often allows for same-day temporary teeth and avoids the need for bone grafting.'
      },
    ],
  },
  {
    title: 'Cost & Financing',
    faqs: [
      {
        question: 'How much does cosmetic dentistry cost?',
        answer: 'Costs vary depending on the treatment. Porcelain veneers typically range from $2,000 to $3,500 per tooth, professional whitening ranges from $500 to $1,000, and comprehensive smile makeovers are customized to your specific needs. Dr. Reyhani provides a detailed, transparent estimate during your consultation with no hidden fees.'
      },
      {
        question: 'Do you accept insurance?',
        answer: 'Genesis accepts most major dental insurance plans and will work with your provider to maximize your benefits. Our concierge team handles insurance verification and claims on your behalf so you can focus on your treatment, not paperwork.'
      },
      {
        question: 'What financing options are available?',
        answer: 'We offer flexible payment plans and third-party financing options to make your investment more accessible. Our team will walk you through every available option during your consultation, ensuring you can move forward with confidence and without financial stress.'
      },
    ],
  },
  {
    title: 'Your Visit',
    faqs: [
      {
        question: 'What should I expect at my first consultation?',
        answer: 'Your first visit is an unhurried, private conversation with Dr. Reyhani. He\'ll listen to your goals, evaluate your oral health using digital imaging and photography, and discuss your options. You\'ll leave with a clear understanding of what\'s possible, a personalized treatment plan, and a transparent cost estimate.'
      },
      {
        question: 'Do you offer sedation?',
        answer: 'Yes, Genesis offers sedation options for patients who experience anxiety or prefer a more relaxed experience. From oral sedation to nitrous oxide, Dr. Reyhani will recommend the best option based on your comfort level and the procedures being performed.'
      },
      {
        question: 'Is there parking available?',
        answer: 'Yes, convenient parking is available at our West Hollywood office. Our concierge team can provide specific parking instructions when you schedule your appointment to ensure a seamless arrival experience.'
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap(c => c.faqs);

function CategoryAccordion({ faqs, prefix }: { faqs: { question: string; answer: string }[]; prefix: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const answerId = `${prefix}-answer-${i}`;
        const questionId = `${prefix}-question-${i}`;
        return (
          <div key={i} className="border border-[#383B42]/15 rounded-md overflow-hidden" data-testid={`${prefix}-faq-item-${i}`}>
            <button
              id={questionId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
              aria-expanded={isOpen}
              aria-controls={answerId}
              data-testid={`${prefix}-faq-toggle-${i}`}
            >
              <span className="font-serif text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] text-[#383B42] pr-4">{faq.question}</span>
              {isOpen ? <ChevronUp className="w-5 h-5 shrink-0 text-[#A4906F]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-[#A4906F]" />}
            </button>
            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="px-6 pb-5 text-[15px] leading-[24px] text-[#383B42]/70 font-sans">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQContent() {
  return (
    <div className="bg-[#383B42] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': allFaqs.map(f => ({
                '@type': 'Question',
                'name': f.question,
                'acceptedAnswer': { '@type': 'Answer', 'text': f.answer }
              }))
            },
            {
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
                  name: 'FAQ',
                  item: 'https://genesisbydrben.com/faq'
                }
              ]
            }
          ])
        }}
      />

      <section data-testid="faq-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={subpageHeroImg} alt="Genesis dental office interior in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: 'FAQ' }]} />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-4">
            <ChevronDown className="w-6 h-6 text-white/50 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {faqCategories.map((category, catIndex) => {
        const isEven = catIndex % 2 === 0;
        const prefix = category.title.toLowerCase().replace(/[\s&]+/g, '-');

        return (
          <section
            key={catIndex}
            data-testid={`faq-section-${prefix}`}
            className={`py-20 md:py-28 px-6 ${isEven ? 'bg-white' : 'relative'}`}
            style={!isEven ? { backgroundColor: '#F5F2EF' } : undefined}
          >
            {!isEven && (
              <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
            )}
            <div className={`${!isEven ? 'relative ' : ''}max-w-[800px] mx-auto`}>
              <FadeInSection>
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
                  {category.title}
                </h2>
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <CategoryAccordion faqs={category.faqs} prefix={prefix} />
              </FadeInSection>
            </div>
          </section>
        );
      })}

      <section data-testid="faq-section-cta" className="py-20 md:py-28 px-6 bg-[#383B42]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase">
              Still Have Questions?
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-6 text-[15px] md:text-[17px] leading-[22px] md:leading-[26px] text-white/60 font-sans">
              Our concierge team is here to help. Reach out to schedule a private consultation with Dr. Reyhani
              or to learn more about any of our services.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                data-testid="faq-link-contact"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Contact Us
              </Link>
              <a
                data-testid="faq-link-call"
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
