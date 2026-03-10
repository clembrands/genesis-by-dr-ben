'use client';

export default function FullMouthReconstructionContent() {
  useSEO({
    title: "Full Mouth Reconstruction Los Angeles | Genesis by Dr. Ben Reyhani",
    description: "Restore your complete oral health with full mouth reconstruction by Dr. Ben Reyhani. Comprehensive care combining implants, crowns, and cosmetic dentistry in West Hollywood.",
    canonical: "https://genesisbydrben.com/full-mouth-reconstruction",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      }
    ],
  });

  return (
    <div className="bg-[#383B42] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Full Mouth Reconstruction',
            provider: {
              '@type': 'Dentist',
              name: 'Genesis by Dr. Ben Reyhani',
              url: 'https://genesisbydrben.com',
            },
            areaServed: { '@type': 'City', name: 'Los Angeles' },
            url: 'https://genesisbydrben.com/full-mouth-reconstruction',
          }),
        }}
      />
      <section data-testid="fmr-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={subpageHeroImg} alt="Genesis dental office interior in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: "Full Mouth Reconstruction" }]} />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[28px] md:text-[44px] leading-[33px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Full Mouth Reconstruction in West Hollywood & Los Angeles
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-4">
            <ChevronDown className="w-6 h-6 text-white/50 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section data-testid="fmr-section-intro" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeInSection>
            <p className="text-[16px] md:text-[17px] leading-[26px] md:leading-[28px] text-[#383B42]/75 font-sans">
              Full mouth reconstruction in Los Angeles is one of the most transformative services in modern dentistry — and
              at Genesis, it's performed with the precision of a surgeon and the eye of an artist.
              <Link href="/about" className="text-[#A4906F] hover:underline"> Dr. Ben Reyhani</Link> specializes in
              rebuilding smiles that have been compromised by extensive decay, trauma, wear, or years of neglected dental care.
              Using a comprehensive approach that integrates restorative and cosmetic techniques, Dr. Reyhani restores not just
              the appearance of your teeth, but their full function, strength, and longevity.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="fmr-section-what-is" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src={artOfRestorationImg} alt="Dr. Reyhani performing full mouth reconstruction at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  What Is Full Mouth Reconstruction?
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Full mouth reconstruction is a comprehensive treatment plan that addresses every aspect of your oral health
                  simultaneously — from damaged and decayed teeth to missing teeth and bite alignment. Unlike a <Link href="/smile-makeovers" className="text-[#A4906F] hover:underline">smile makeover</Link>,
                  which focuses primarily on aesthetics, full mouth reconstruction combines restorative and cosmetic procedures to
                  rebuild the entire dental architecture.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  At Genesis, every reconstruction is planned with the same artistic sensibility Dr. Reyhani brings to his
                  cosmetic work. The goal is never just to fix what's broken — it's to create a result that looks, feels,
                  and functions like a natural, healthy smile.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="fmr-section-who-needs" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Who Needs Full Mouth Reconstruction?
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-14">
              Full mouth reconstruction is recommended when multiple dental issues need to be addressed together for the
              best possible outcome.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Extensive Decay or Damage</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  When cavities, cracks, or fractures affect multiple teeth, individual repairs aren't enough.
                  Reconstruction addresses every compromised tooth as part of a unified plan, restoring both
                  structural integrity and visual harmony.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Trauma or Injury</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Accidents and injuries can cause widespread dental damage that requires a coordinated reconstruction.
                  Dr. Reyhani rebuilds form and function with precision, restoring your smile to its full potential.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Severe Wear & Erosion</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Years of grinding (bruxism), acid erosion, or natural wear can gradually diminish your teeth.
                  Reconstruction rebuilds lost tooth structure, corrects bite alignment, and prevents further deterioration.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Multiple Missing Teeth</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  When several teeth are missing, the remaining teeth shift, the bite deteriorates, and bone loss
                  accelerates. Reconstruction with <Link href="/dental-implants" className="text-[#A4906F] hover:underline">dental implants</Link>,
                  bridges, and crowns restores a complete, stable smile.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="fmr-section-procedures" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Procedures Involved
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-14">
              Dr. Reyhani draws from a complete range of restorative and cosmetic techniques, combining them into
              a cohesive plan tailored to your specific needs.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Dental Implants", desc: "Titanium posts surgically placed in the jawbone to permanently replace missing teeth with natural-looking restorations.", link: "/dental-implants" },
              { title: "All-on-4 Implants", desc: "A full arch of teeth supported by just four strategically placed implants — ideal for patients missing most or all teeth.", link: "/all-on-4-dental-implants-los-angeles" },
              { title: "Custom Crowns", desc: "Porcelain and zirconia crowns that restore damaged teeth to their original strength, shape, and beauty.", link: "/restorative-dentistry" },
              { title: "Dental Bridges", desc: "Fixed restorations that replace one or more missing teeth, anchored to adjacent natural teeth or implants.", link: "/restorative-dentistry" },
              { title: "Porcelain Veneers", desc: "Ultra-thin shells that perfect the appearance of front-facing teeth as part of the overall reconstruction.", link: "/porcelain-veneers" },
              { title: "Bone Grafting", desc: "Rebuilding jawbone density to create a stable foundation for implants when bone loss has occurred.", link: "/contact" },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-md p-6 h-full">
                  <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans mb-3">{item.desc}</p>
                  <Link href={item.link} data-testid={`fmr-link-${item.title.toLowerCase().replace(/[\s-]+/g, '-')}`} className="text-[#A4906F] text-[11px] tracking-[0.1em] uppercase font-sans hover:underline">Learn More →</Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="fmr-section-approach" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection className="order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  Dr. Reyhani's Comprehensive Approach
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  What sets full mouth reconstruction at Genesis apart is Dr. Reyhani's refusal to separate function
                  from beauty. Every reconstruction is planned holistically — considering bite mechanics, jaw alignment,
                  facial proportions, and aesthetic goals simultaneously. Using 3D CBCT imaging, digital planning, and
                  guided surgical protocols, every phase is mapped with surgical precision before treatment begins.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Dr. Reyhani personally oversees every stage of your reconstruction, from initial diagnostics through
                  final placement. He collaborates with leading dental laboratories and specialists to ensure that every
                  component — from the titanium implant post to the hand-layered porcelain crown — meets his exacting standards.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2} className="order-1 lg:order-2">
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src={reconstructiveImg} alt="Advanced dental reconstruction technology at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="fmr-section-vs-makeover" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Full Mouth Reconstruction vs. Smile Makeover
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-10">
              Both achieve transformative results, but they serve different needs. Understanding the distinction
              helps determine the right path for you.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Full Mouth Reconstruction</h3>
                <ul className="space-y-2 text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  <li>• Addresses structural and functional issues</li>
                  <li>• Rebuilds damaged, decayed, or missing teeth</li>
                  <li>• Involves restorative procedures (crowns, implants, bridges)</li>
                  <li>• Corrects bite alignment and jaw function</li>
                  <li>• Medically necessary in many cases</li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Smile Makeover</h3>
                <ul className="space-y-2 text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  <li>• Focuses on cosmetic improvements</li>
                  <li>• Enhances teeth that are structurally sound</li>
                  <li>• Involves cosmetic procedures (veneers, whitening, bonding)</li>
                  <li>• Improves color, shape, and symmetry</li>
                  <li>• Elective — driven by aesthetic goals</li>
                </ul>
                <Link href="/smile-makeovers" data-testid="fmr-link-smile-makeovers" className="inline-block mt-4 text-[#A4906F] text-[11px] tracking-[0.1em] uppercase font-sans hover:underline">Learn About Smile Makeovers →</Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="fmr-section-timeline" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Timeline and Treatment Phases
            </h2>
          </FadeInSection>
          <div className="space-y-10">
            {[
              { step: "01", title: "Comprehensive Evaluation", desc: "Dr. Reyhani conducts a thorough examination using 3D CBCT imaging, digital scans, photographs, and bite analysis. Every issue is documented and prioritized, forming the foundation of your personalized treatment plan." },
              { step: "02", title: "Treatment Planning", desc: "A detailed, phased plan is created — outlining which procedures will be performed, in what order, and over what timeline. You'll understand every step before treatment begins, with full transparency on costs and scheduling." },
              { step: "03", title: "Foundation Phase", desc: "Addressing urgent issues first: extractions, infection control, bone grafting, and implant placement. This phase establishes the stable foundation upon which your new smile will be built." },
              { step: "04", title: "Restorative Phase", desc: "With the foundation secure, Dr. Reyhani places custom crowns, bridges, and prosthetics. Temporary restorations allow you to test form and function before final pieces are bonded into place." },
              { step: "05", title: "Refinement & Completion", desc: "Final adjustments to bite, aesthetics, and comfort. Dr. Reyhani evaluates every detail under multiple lighting conditions to ensure a flawless, natural result. A long-term maintenance plan is established to protect your investment." },
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

      <section data-testid="fmr-section-cost" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Investment and Financing
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-10">
              Full mouth reconstruction is a significant investment in your health, confidence, and quality of life.
              At Genesis, we're committed to making comprehensive care accessible.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Transparent Pricing</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Because every reconstruction is unique, pricing is determined by the specific procedures required.
                  Dr. Reyhani provides a comprehensive, itemized estimate during your consultation — no hidden fees,
                  no vague ranges. You'll know exactly what your investment covers and why each element is essential.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Flexible Financing</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Genesis offers flexible payment plans and financing options to help spread the cost of treatment
                  over time. Our concierge team will walk you through every available option during
                  your <Link href="/contact" className="text-[#A4906F] hover:underline">consultation</Link>, ensuring
                  you feel confident and comfortable before moving forward.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="fmr-section-faq" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Frequently Asked Questions
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <FAQAccordion />
          </FadeInSection>
        </div>
      </section>

      <section data-testid="fmr-section-resources" className="py-14 md:py-16 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[800px] mx-auto text-center">
          <h3 className="font-serif text-[20px] md:text-[24px] leading-[26px] md:leading-[30px] uppercase text-[#383B42] mb-6">
            Related Services
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link href="/dental-implants" data-testid="fmr-link-implants" className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md">
              Dental Implants
            </Link>
            <Link href="/all-on-4-dental-implants-los-angeles" data-testid="fmr-link-all-on-4" className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md">
              All-on-4 Implants
            </Link>
            <Link href="/smile-makeovers" data-testid="fmr-link-makeovers" className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md">
              Smile Makeovers
            </Link>
          </div>
        </div>
      </section>

      <section data-testid="fmr-section-cta" className="pt-20 md:pt-28 pb-32 md:pb-40 px-6 relative">
        <div className="absolute inset-0">
          <img src={ctaBgImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40" style={{ background: 'linear-gradient(to bottom, transparent, #383B42)' }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase">
              Rebuild Your Smile with Confidence
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] md:text-[17px] leading-[22px] md:leading-[21px] text-white/60 font-serif">
              No matter how complex your dental needs, Genesis has the expertise and artistry to restore your smile
              completely. Schedule a comprehensive consultation with Dr. Reyhani to explore your options and take
              the first step toward a healthier, more beautiful future.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                data-testid="fmr-link-cta-consultation"
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Request Consultation
              </a>
              <a
                data-testid="fmr-link-cta-call"
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
