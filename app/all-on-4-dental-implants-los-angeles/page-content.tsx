'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

const ctaBgImg = '/images/Group-1597884055_1771441438103.png';
const subpageHeroImg = '/images/Group-1597883871-1_1771444440714.png';
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

const faqs = [
  {
    question: 'How long do All-on-4 implants last?',
    answer: 'With proper care, the implants themselves can last a lifetime. The prosthesis may require adjustment or replacement after 10–15 years due to normal wear.'
  },
  {
    question: 'Is All-on-4 painful?',
    answer: 'The procedure is performed under anesthesia and sedation options are available. Most patients describe the recovery as more manageable than they anticipated.'
  },
  {
    question: 'How is All-on-4 different from traditional implants?',
    answer: 'Traditional implants replace individual teeth and require more implants and time. All-on-4 uses four implants to support an entire arch, often avoiding bone grafting, and delivers results in a single day.'
  },
  {
    question: 'Can I get All-on-4 if I've had significant bone loss?',
    answer: 'In many cases, yes. The angled placement of All-on-4 implants is specifically designed to work with available bone. A 3D CBCT scan will give the definitive answer.'
  },
  {
    question: 'How do I care for All-on-4 implants?',
    answer: 'Very similarly to natural teeth — brushing twice daily, flossing, using a water flosser around implant sites, and attending regular professional cleanings.'
  }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-[#383B42]/15 rounded-md overflow-hidden"
          data-testid={`faq-item-${i}`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
            data-testid={`faq-toggle-${i}`}
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

export default function AllOn4Content() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalProcedure',
              'name': 'All-on-4 Dental Implants',
              'description': 'Full arch dental implant restoration using four precisely placed titanium implants, delivering a complete smile in one day.',
              'procedureType': 'Surgical',
              'howPerformed': 'Four titanium implants placed at strategic angles to anchor a full-arch fixed prosthesis, often avoiding bone grafting.',
              'provider': {
                '@type': 'Dentist',
                'name': 'Dr. Ben Reyhani',
                'worksFor': {
                  '@type': 'MedicalClinic',
                  'name': 'Genesis by Dr. Ben Reyhani'
                }
              },
              'location': {
                '@type': 'Place',
                'address': {
                  '@type': 'PostalAddress',
                  'streetAddress': '8797 Beverly Blvd, Suite 200',
                  'addressLocality': 'West Hollywood',
                  'addressRegion': 'CA',
                  'postalCode': '90048'
                }
              }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': faqs.map(f => ({
                '@type': 'Question',
                'name': f.question,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': f.answer
                }
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
                  name: 'All-on-4 Dental Implants',
                  item: 'https://genesisbydrben.com/all-on-4-dental-implants-los-angeles'
                }
              ]
            }
          ])
        }}
      />

      <section data-testid="allon4-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={subpageHeroImg} alt="Genesis dental office in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: 'All-on-4 Implants' }]} />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[48px] uppercase tracking-[0.05em] text-white"
          >
            All-on-4 Dental Implants
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

      <section data-testid="allon4-section-intro" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[900px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[26px] md:text-[36px] leading-[32px] md:leading-[42px] uppercase text-[#383B42] text-center mb-10">
              Your Complete Smile. One Day.
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <div className="space-y-6 text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
              <p>
                Most people who come to see me about full arch implants have been living with a compromised smile for years. They've tried dentures. They've dealt with the slipping, the discomfort, the self-consciousness at the dinner table. They've told themselves they'll figure it out someday.
              </p>
              <p className="font-serif text-[18px] leading-[26px] text-[#A4906F] italic text-center">
                Someday is now.
              </p>
              <p>
                All-on-4 dental implants — also called Teeth in a Day or All-on-X — is the most significant advancement in restorative dentistry in the last two decades. Using just four precisely placed titanium implants, we restore an entire arch of teeth with a fixed, non-removable prosthesis. You come in without teeth. You leave with a complete smile.
              </p>
              <p>
                At Genesis, we don't just place implants. We design smiles. The prosthesis you receive is crafted with the same artistic precision as our finest veneer cases — because what's the point of restoring your bite if the result doesn't look extraordinary?
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="allon4-section-different" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="space-y-6">
                <h2 className="font-serif text-[26px] md:text-[36px] leading-[32px] md:leading-[42px] uppercase text-[#383B42]">
                  What Makes All-on-4 Different
                </h2>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Traditional implants replace individual teeth. All-on-4 replaces an entire arch — all of your upper or lower teeth — anchored by four implants placed at strategic angles to maximize bone contact and stability.
                </p>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  The advantages for the right patient are transformative:
                </p>
                <ul className="space-y-3 text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  <li className="flex gap-3">
                    <span className="text-[#A4906F] font-bold shrink-0">—</span>
                    <span>No bone grafting required in most cases — the angled implant placement utilizes existing bone</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#A4906F] font-bold shrink-0">—</span>
                    <span>Fixed and non-removable — cleans just like natural teeth</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#A4906F] font-bold shrink-0">—</span>
                    <span>Functionally superior to dentures — you can eat what you want</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#A4906F] font-bold shrink-0">—</span>
                    <span>Aesthetically designed from the start — your prosthesis is planned alongside your implant placement</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#A4906F] font-bold shrink-0">—</span>
                    <span>Same-day teeth — you leave our office with a full smile</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img
                  src={allOnXImg}
                  alt="All-on-4 full arch dental implant results at Genesis by Dr. Ben Reyhani"
                  className="w-full rounded-md"
                  data-testid="allon4-img-procedure"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="allon4-section-genesis-difference" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[900px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[26px] md:text-[36px] leading-[32px] md:leading-[42px] uppercase text-[#383B42] text-center mb-10">
              The Genesis All-on-4 Difference
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <div className="space-y-6 text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
              <p>
                There are dentists who place implants. And there are dentists who understand that what goes on top of those implants determines whether you love your smile for the rest of your life.
              </p>
              <p>
                I trained in both disciplines because I believe that separating surgery from aesthetics produces inferior results. When the surgeon and the designer are the same person — when the implants are planned with the final prosthesis already designed — the outcomes are categorically different.
              </p>
              <p>
                At Genesis, your All-on-4 case begins with a comprehensive digital smile design. We use 3D imaging, digital planning software, and an aesthetic analysis of your face, lips, and existing bone structure before a single implant is placed. Your final smile is designed first. Then we build the foundation to support it.
              </p>
              <p className="font-serif text-[18px] leading-[26px] text-[#A4906F] italic text-center">
                That's not how most practices do it. That's how we do it.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="allon4-section-mid-cta" className="py-14 md:py-16 px-6 bg-[#383B42]">
        <div className="max-w-[800px] mx-auto text-center">
          <h3 className="font-serif text-[22px] md:text-[28px] leading-[28px] md:leading-[34px] uppercase text-white mb-4">
            Ready to Start? Request Your Consultation
          </h3>
          <p className="text-[15px] leading-[22px] text-white/60 font-sans mb-6">
            Take the first step toward a permanent, beautiful smile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              data-testid="allon4-link-mid-cta"
              href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#A4906F] text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
            >
              Request Consultation
            </a>
            <a
              data-testid="allon4-link-mid-call"
              href="tel:+13103883404"
              className="px-8 py-3 border border-white/30 text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              (310) 388-3404
            </a>
          </div>
        </div>
      </section>

      <section data-testid="allon4-section-candidate" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[900px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[26px] md:text-[36px] leading-[32px] md:leading-[42px] uppercase text-[#383B42] text-center mb-10">
              Are You a Candidate?
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans mb-8">
              All-on-4 is appropriate for patients who:
            </p>
            <ul className="space-y-4 text-[15px] leading-[24px] text-[#383B42]/70 font-sans mb-8">
              <li className="flex gap-3">
                <span className="text-[#A4906F] font-bold shrink-0">—</span>
                <span>Are missing all or most teeth in an arch</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#A4906F] font-bold shrink-0">—</span>
                <span>Have been wearing full or partial dentures</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#A4906F] font-bold shrink-0">—</span>
                <span>Have experienced significant bone loss due to periodontal disease or long-term tooth loss</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#A4906F] font-bold shrink-0">—</span>
                <span>Want a permanent, non-removable solution</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#A4906F] font-bold shrink-0">—</span>
                <span>Are in good general health for a surgical procedure</span>
              </li>
            </ul>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
              The best way to know if you're a candidate is a comprehensive consultation. We use CBCT 3D imaging to evaluate your bone volume and density with precision — not guesswork.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="allon4-section-expect" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[26px] md:text-[36px] leading-[32px] md:leading-[42px] uppercase text-[#383B42] text-center mb-14">
              What to Expect
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans mb-12 text-center">
              Your All-on-4 journey at Genesis follows a clear, guided path:
            </p>
            <div className="space-y-10">
              {[
                { step: '01', title: 'Consultation & 3D Imaging', desc: 'We evaluate your oral health, take a full CBCT scan, and discuss your goals. You'll leave with a clear treatment plan and a realistic picture of your outcome.' },
                { step: '02', title: 'Smile Design', desc: 'Before surgery, we design your new smile using digital tools. You see what your result will look like before any treatment begins.' },
                { step: '03', title: 'Implant Placement', desc: 'On your surgery day, existing teeth are extracted if needed, implants are precisely placed, and your temporary prosthesis is attached the same day.' },
                { step: '04', title: 'Healing & Refinement', desc: 'Over the next several months as your implants integrate with the bone, we monitor healing and plan your final restoration.' },
                { step: '05', title: 'Final Restoration', desc: 'Your permanent, custom-crafted prosthesis is placed — designed to complement your face, your lips, and your personality.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 md:gap-8" data-testid={`allon4-step-${i}`}>
                  <div className="shrink-0">
                    <span className="font-serif text-[32px] md:text-[40px] leading-[32px] text-[#A4906F]/30">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] text-[#383B42] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="allon4-section-investment" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[900px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[26px] md:text-[36px] leading-[32px] md:leading-[42px] uppercase text-[#383B42] text-center mb-10">
              Investment in All-on-4
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <div className="space-y-6 text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
              <p>
                All-on-4 is a significant investment — and it should be treated as one. The cost varies based on the complexity of your case, whether extractions are needed, the material of your final prosthesis, and whether one or both arches are being treated.
              </p>
              <p>
                We are transparent about what your investment includes and why. We are also proud to offer flexible financing options that make this level of care accessible.
              </p>
              <p>
                What we'd ask you to consider: what is the long-term cost of <em>not</em> doing this? Continued bone loss. More extractions. Ongoing denture adhesive. The confidence you set aside every time you walked into a room. The value of All-on-4 is measured not just in dollars but in the quality of the life you get back.
              </p>
              <p>
                To receive a personalized treatment estimate, request your consultation below.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="allon4-section-financing" className="py-14 md:py-16 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[800px] mx-auto text-center">
          <h3 className="font-serif text-[22px] md:text-[28px] leading-[28px] md:leading-[34px] uppercase text-[#383B42] mb-4">
            Financing Available
          </h3>
          <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans mb-6">
            We believe exceptional dentistry should be accessible. Genesis offers flexible payment options and monthly payment structures to make your smile investment manageable. Discuss your personalized plan during your consultation.
          </p>
          <a
            data-testid="allon4-link-financing-cta"
            href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-[#383B42]/30 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
          >
            Discuss Financing Options
          </a>
        </div>
      </section>

      <section data-testid="allon4-section-faq" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[26px] md:text-[36px] leading-[32px] md:leading-[42px] uppercase text-[#383B42] text-center mb-14">
              FAQs About All-on-4 in Los Angeles
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <FAQAccordion />
          </FadeInSection>
        </div>
      </section>

      <section data-testid="allon4-section-resources" className="py-14 md:py-16 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[800px] mx-auto text-center">
          <h3 className="font-serif text-[20px] md:text-[24px] leading-[26px] md:leading-[30px] uppercase text-[#383B42] mb-6">
            Learn More
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog/all-on-4-vs-traditional-implants"
              data-testid="allon4-link-blog-comparison"
              className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
            >
              All-on-4 vs. Traditional Implants
            </Link>
            <Link
              href="/gallery"
              data-testid="allon4-link-gallery"
              className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
            >
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>

      <section
        data-testid="allon4-section-cta"
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
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40" style={{ background: 'linear-gradient(to bottom, transparent, rgba(56,59,66,0.95))' }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[26px] md:text-[36px] leading-[32px] md:leading-[42px] uppercase text-white">
              Your Smile Is Worth the Conversation
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] md:text-[17px] leading-[22px] md:leading-[26px] text-white/60 font-sans">
              If you've been living with tooth loss, you already know what it costs you every day. A conversation costs nothing. Schedule your All-on-4 consultation with Dr. Ben Reyhani in West Hollywood today. Let's design the smile you've been waiting for.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                data-testid="allon4-link-cta-consultation"
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Request Your Consultation
              </a>
              <a
                data-testid="allon4-link-cta-call"
                href="tel:+13103883404"
                className="px-8 py-3 border border-white/30 text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                (310) 388-3404
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#383B42]/95 backdrop-blur-md border-t border-white/10 px-4 py-3">
        <a
          data-testid="allon4-link-mobile-cta"
          href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-6 py-3 bg-[#A4906F] text-[#383B42] text-[11px] leading-[14px] tracking-[0.1em] uppercase font-sans font-medium rounded-md"
        >
          Request Your Consultation
        </a>
      </div>
    </div>
  );
}
