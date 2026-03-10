'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, Star, Quote } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
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

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
}

function TestimonialsSection() {
  const { data } = useQuery<{ reviews: Review[]; source: string }>({
    queryKey: ['/api/reviews'],
  });
  const reviews = data?.reviews || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, reviews.length - 1);
  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  if (!reviews.length) return null;

  const review = reviews[currentIndex];

  return (
    <section data-testid="about-section-testimonials" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
        aria-hidden="true"
      />
      <div className="relative max-w-[800px] mx-auto">
        <div className="relative flex items-center gap-6 md:gap-10">
          <button
            data-testid="about-button-reviews-prev"
            onClick={prev}
            disabled={currentIndex === 0}
            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-[#383B42]/20 text-[#383B42]/60 transition-all duration-300 hover-elevate disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 text-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 text-[#A4906F]">
                <Quote className="w-7 h-7" />
              </div>
              <p
                data-testid="about-text-review-quote"
                className="font-serif text-[20px] md:text-[28px] leading-[28px] md:leading-[38px] text-[#383B42] italic mb-8"
              >
                "{review.text}"
              </p>
              <div className="flex gap-1 mb-4" data-testid="about-stars-review">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-[#A4906F] text-[#A4906F]" />
                ))}
              </div>
              <p className="font-serif font-semibold text-[18px] leading-[24px] text-[#383B42]">
                {review.author_name}
              </p>
              <p className="text-[12px] leading-[16px] text-[#383B42]/40 font-sans mt-1">
                {review.relative_time_description}
              </p>
            </motion.div>
          </div>

          <button
            data-testid="about-button-reviews-next"
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-[#383B42]/20 text-[#383B42]/60 transition-all duration-300 hover-elevate disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-[#A4906F] w-6' : 'bg-[#383B42]/20'
              }`}
              aria-label={`Go to review ${i + 1}`}
              data-testid={`about-dot-review-${i}`}
            />
          ))}
        </div>

        {data?.source === 'google' || data?.source === 'google_cached' ? (
          <p className="text-center mt-6 text-[10px] leading-[12px] tracking-[0.1em] uppercase text-[#383B42]/40 font-sans">
            Reviews from Google
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default function AboutContent() {
  return (
    <div className="bg-[#383B42] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Genesis by Dr. Ben Reyhani',
            description: 'Cosmetic and implant dentistry practice led by Dr. Ben Reyhani',
            url: 'https://genesisbydrben.com',
            image: '/images/og-image.jpg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'West Hollywood',
              addressLocality: 'Los Angeles',
              addressRegion: 'CA',
              postalCode: '90069',
              addressCountry: 'US',
            },
            telephone: '(310)-388-3404',
          }),
        }}
      />
      <section data-testid="about-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src="/images/Group-1597883871-1_1771444440714.png" alt="Genesis dental office interior in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: 'About Us' }]} />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            About Us
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

      <section data-testid="about-section-meet-dr" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection className="order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase text-[#383B42]">
                  Meet Dr. Ben Reyhani
                </h2>
                <p className="font-serif text-[13px] leading-[16px] tracking-[0.15em] uppercase font-semibold text-[#A4906F]">
                  Cosmetic & Implant Dentist West Hollywood, CA
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  With 17+ years of specialized practice in cosmetic and implant dentistry, Dr. Ben Reyhani has
                  dedicated himself to mastering the intricate balance between periodontal surgery, prosthetic
                  restoration, and aesthetic dentistry. His extensive training and refined skill set empower him
                  to foster both beauty and health, ensuring that his patients enjoy smiles that are not only
                  radiant but enduring.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Dr. Reyhani stands out in his field for his commitment to natural-looking, undetectable smile
                  transformations and his expertise in full arch implant rehabilitation (All-on-4/All-on-X). His
                  Digital Smile Design certification and focus on minimally invasive cosmetic techniques, combined
                  with his collaborative partnerships with elite dental ceramists, have established him as a leader
                  in the craft of dentistry.
                </p>

                <div className="space-y-4 pt-6 border-t border-[#383B42]/10">
                  <h3 className="font-serif text-[16px] leading-[20px] font-semibold text-[#383B42] uppercase">Credentials & Training</h3>
                  <div className="space-y-3">
                    <div data-testid="about-text-credential-years">
                      <p className="text-[13px] leading-[18px] font-semibold text-[#383B42] font-sans">17+ Years of Practice</p>
                      <p className="text-[13px] leading-[18px] text-[#383B42]/60 font-sans">Cosmetic and implant dentistry</p>
                    </div>
                    <div data-testid="about-text-credential-training">
                      <p className="text-[13px] leading-[18px] font-semibold text-[#383B42] font-sans">Dual Training</p>
                      <p className="text-[13px] leading-[18px] text-[#383B42]/60 font-sans">Periodontal surgery and prosthetic restoration</p>
                    </div>
                    <div data-testid="about-text-credential-implants">
                      <p className="text-[13px] leading-[18px] font-semibold text-[#383B42] font-sans">Full Arch Implant Rehabilitation</p>
                      <p className="text-[13px] leading-[18px] text-[#383B42]/60 font-sans">Advanced training in All-on-4 and All-on-X</p>
                    </div>
                    <div data-testid="about-text-credential-dsd">
                      <p className="text-[13px] leading-[18px] font-semibold text-[#383B42] font-sans">Digital Smile Design Certification</p>
                      <p className="text-[13px] leading-[18px] text-[#343B42]/60 font-sans">Precision aesthetic planning and design</p>
                    </div>
                    <div data-testid="about-text-credential-technique">
                      <p className="text-[13px] leading-[18px] font-semibold text-[#383B42] font-sans">Minimally Invasive Expertise</p>
                      <p className="text-[13px] leading-[18px] text-[#383B42]/60 font-sans">Advanced cosmetic techniques with elite ceramists</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div>
                    <p className="font-serif text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-[#383B42]" data-testid="about-stat-patients">1000+</p>
                    <p className="text-[11px] leading-[14px] text-[#383B42]/50 font-sans mt-1">Happy Patients</p>
                  </div>
                  <div>
                    <p className="font-serif text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-[#383B42]" data-testid="about-stat-smiles">2500+</p>
                    <p className="text-[11px] leading-[14px] text-[#383B42]/50 font-sans mt-1">Smile Makeovers</p>
                  </div>
                  <div>
                    <p className="font-serif text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] text-[#383B42]" data-testid="about-stat-implants">800+</p>
                    <p className="text-[11px] leading-[14px] text-[#383B42]/50 font-sans mt-1">Dental Implants</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  data-testid="about-link-contact"
                  className="inline-flex items-center px-6 py-3 border border-[#383B42]/30 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover-elevate rounded-md mt-4 font-sans"
                >
                  Contact Us
                </Link>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2} className="order-1 lg:order-2">
              <div className="relative">
                <img
                  data-testid="about-img-dr-ben"
                  src="/images/Group-1597883809-3_1771444499300.png"
                  alt="Dr. Ben Reyhani, cosmetic and implant dentist at Genesis dental office West Hollywood"
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

      <section data-testid="about-section-experience" className="py-20 md:py-28 px-6 bg-[#383B42]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase">
              The Genesis Experience
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] leading-[22px] text-white/60 font-sans">
              At Genesis by Dr. Ben Reyhani, every smile begins with intention. During your
              private consultation, Dr. Reyhani crafts a bespoke treatment plan that blends
              artistry, innovation, and precision — all tailored to your unique facial harmony
              and goals.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="about-section-philosophy" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <FadeInSection>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase text-[#383B42]">
              The Genesis Philosophy
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] leading-[22px] text-[#383B42]/60 font-sans">
              Every smile is designed with balance, symmetry, and authenticity. At Genesis, we believe
              true beauty lies in subtlety — the artistry that feels effortless yet unforgettable.
            </p>
          </FadeInSection>
        </div>
        <FadeInSection delay={0.3} className="max-w-[900px] mx-auto">
          <div className="relative rounded-md overflow-hidden">
            <img
              data-testid="about-img-philosophy"
              src="/images/DSC3546-2048x1365_1771444572639.jpg"
              alt="Modern treatment room at Genesis cosmetic dentistry office on Beverly Blvd West Hollywood"
              className="w-full"
            />
            <div className="absolute inset-0 rounded-md ring-1 ring-[#383B42]/10" />
          </div>
        </FadeInSection>
      </section>

      <TestimonialsSection />

      <section
        data-testid="about-section-cta"
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
              Ready to Love Your Smile?
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] md:text-[17px] leading-[22px] md:leading-[21px] text-white/60 font-serif">
              Schedule your personalized consultation today and take the first step toward a
              confident, radiant smile that's tailored to you. At Genesis by Dr. Ben Reyhani, we
              combine artistic expertise with advanced aesthetic dentistry to deliver results that
              enhance your natural beauty. Whether you're ready for a subtle refresh or a complete
              transformation, your dream smile starts right here in the heart of Los Angeles.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                data-testid="about-link-cta-consultation"
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Request Consultation
              </a>
              <a
                data-testid="about-link-cta-call"
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
