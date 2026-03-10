'use client';

export default function SmileMakeoversContent() {
  useSEO({
    title: "Smile Makeover West Hollywood | Genesis by Dr. Ben Reyhani",
    description: "Design your dream smile with a bespoke smile makeover by Dr. Ben Reyhani in West Hollywood. Combining veneers, whitening, and cosmetic dentistry for stunning results.",
    canonical: "https://genesisbydrben.com/smile-makeovers",
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
            name: 'Smile Makeovers',
            provider: {
              '@type': 'Dentist',
              name: 'Genesis by Dr. Ben Reyhani',
              url: 'https://genesisbydrben.com',
            },
            areaServed: { '@type': 'City', name: 'West Hollywood' },
            url: 'https://genesisbydrben.com/smile-makeovers',
          }),
        }}
      />
      <section data-testid="makeover-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={subpageHeroImg} alt="Genesis dental office interior in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: "Smile Makeovers" }]} />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Smile Makeovers in West Hollywood
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-4">
            <ChevronDown className="w-6 h-6 text-white/50 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section data-testid="makeover-section-intro" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeInSection>
            <p className="text-[16px] md:text-[17px] leading-[26px] md:leading-[28px] text-[#383B42]/75 font-sans">
              A smile makeover in West Hollywood is more than a dental procedure — it's a transformation that reshapes
              how you see yourself and how the world sees you. At Genesis, <Link href="/about" className="text-[#A4906F] hover:underline">Dr. Ben Reyhani</Link> designs
              bespoke smile makeovers that combine multiple <Link href="/cosmetic-dentistry" className="text-[#A4906F] hover:underline">cosmetic dentistry</Link> treatments
              into one cohesive plan, tailored to your unique facial features, personal style, and aesthetic goals. The result is a
              smile that looks natural, feels authentic, and radiates confidence.
            </p>
          </FadeInSection>
        </div>
      </section>

      <section data-testid="makeover-section-what-is" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src={veneerColorImg} alt="Custom shade selection for smile makeover at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  What Is a Smile Makeover?
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  A smile makeover is a comprehensive treatment plan that combines two or more cosmetic procedures to
                  achieve a complete transformation of your smile. Unlike a single treatment that addresses one concern,
                  a makeover takes a holistic view — evaluating color, shape, symmetry, gum line, and overall facial harmony
                  to create a cohesive, stunning result.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Dr. Reyhani approaches every smile makeover as a creative collaboration. He listens to your vision,
                  studies your facial proportions and lip dynamics, and then designs a plan that brings everything into
                  perfect balance. No templates, no shortcuts — just artistry guided by clinical precision.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="makeover-section-procedures" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Procedures Commonly Included
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-14">
              Every smile makeover is unique. Dr. Reyhani selects and sequences treatments based on your specific needs,
              drawing from a full range of cosmetic and restorative options.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Porcelain Veneers", desc: "Custom-crafted shells that transform tooth color, shape, and alignment — the cornerstone of most smile makeovers.", link: "/porcelain-veneers" },
              { title: "Teeth Whitening", desc: "Professional-grade brightening to create a luminous, even canvas before or alongside other treatments.", link: "/teeth-whitening" },
              { title: "Cosmetic Bonding", desc: "Tooth-colored composite resin sculpted to correct chips, gaps, and minor imperfections in a single visit.", link: "/cosmetic-dentistry" },
              { title: "Gum Contouring", desc: "Precise reshaping of the gum line to reveal more tooth structure and create a balanced, symmetrical frame.", link: "/cosmetic-dentistry" },
              { title: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth that integrate seamlessly into your makeover plan.", link: "/dental-implants" },
              { title: "Orthodontic Prep", desc: "When needed, minor alignment corrections before cosmetic work to ensure the best possible foundation for your new smile.", link: "/contact" },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <div className="border border-[#383B42]/10 rounded-md p-6 h-full">
                  <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans mb-3">{item.desc}</p>
                  <Link href={item.link} data-testid={`makeover-link-${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#A4906F] text-[11px] tracking-[0.1em] uppercase font-sans hover:underline">Learn More →</Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="makeover-section-process" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[900px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              The Genesis Smile Design Process
            </h2>
          </FadeInSection>
          <div className="space-y-10">
            {[
              { step: "01", title: "Discovery Consultation", desc: "Your makeover journey begins with an in-depth conversation. Dr. Reyhani listens to your goals, evaluates your oral health, and takes comprehensive photographs and digital scans. This is where your vision starts to take shape." },
              { step: "02", title: "Digital Smile Design", desc: "Using advanced digital imaging software, Dr. Reyhani maps the ideal proportions, symmetry, and alignment for your new smile. You'll see a digital rendering of your transformation before any work begins — giving you complete confidence in the plan." },
              { step: "03", title: "Diagnostic Wax-Up & Try-In", desc: "A physical model of your new smile is crafted in wax, allowing you to see and feel the proposed changes in three dimensions. A temporary try-in lets you 'test drive' your new smile and provide feedback before final fabrication." },
              { step: "04", title: "Treatment Execution", desc: "With the design finalized, Dr. Reyhani sequences your treatments for maximum efficiency and comfort. Whether your makeover involves two visits or several, every appointment is unhurried, precise, and focused on achieving the agreed-upon vision." },
              { step: "05", title: "The Reveal & Aftercare", desc: "The moment you see your completed smile for the first time. Dr. Reyhani ensures every detail meets his exacting standards and your expectations, then provides a personalized maintenance plan to protect your investment for years to come." },
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

      <section data-testid="makeover-section-candidate" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img src={reconstructiveImg} alt="Dr. Reyhani consulting with a smile makeover patient at Genesis West Hollywood" className="w-full rounded-md" width="600" height="400" loading="lazy" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  Who Is a Candidate?
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  If you're unhappy with the overall appearance of your smile — whether due to discoloration, chips,
                  gaps, misalignment, worn teeth, or a combination of concerns — you're likely a candidate for a smile
                  makeover. The ideal candidate is in good general oral health, with any underlying issues like decay
                  or gum disease addressed before cosmetic work begins.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Dr. Reyhani welcomes patients at every stage — from those seeking subtle refinements to individuals
                  ready for a dramatic transformation. During your consultation, he'll evaluate your dental health and
                  discuss which combination of treatments will deliver the results you're envisioning.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="makeover-section-vs-reconstruction" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Smile Makeover vs. Full Mouth Reconstruction
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-10">
              While both achieve transformative results, they address different needs.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Smile Makeover</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Primarily cosmetic in nature. Focuses on improving the appearance of teeth that are structurally
                  sound but aesthetically imperfect. Common treatments include veneers, whitening, bonding, and
                  gum contouring. Ideal for patients whose main concern is how their smile looks.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[20px] md:text-[22px] leading-[26px] uppercase text-[#383B42] mb-4">Full Mouth Reconstruction</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Addresses both aesthetic and structural issues. Required when teeth are severely damaged, decayed,
                  or missing. Involves restorative procedures like crowns, bridges, <Link href="/dental-implants" className="text-[#A4906F] hover:underline">dental implants</Link>,
                  and root canals alongside cosmetic treatments. At Genesis, Dr. Reyhani ensures reconstructions are
                  as beautiful as they are functional.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="makeover-section-timeline" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Timeline and What to Expect
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-10">
              Every smile makeover follows a carefully planned timeline tailored to the complexity of your case.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full text-center">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Simple Makeovers</h3>
                <p className="text-[#A4906F] font-serif text-[24px] mb-3">2–4 Weeks</p>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Whitening combined with bonding or minor veneer work. Typically completed in two to three visits.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full text-center">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Comprehensive Makeovers</h3>
                <p className="text-[#A4906F] font-serif text-[24px] mb-3">4–8 Weeks</p>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Full veneer sets with gum contouring and whitening. Requires design, preparation, and placement visits.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="border border-[#383B42]/10 rounded-md p-8 h-full text-center">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Complex Cases</h3>
                <p className="text-[#A4906F] font-serif text-[24px] mb-3">3–6 Months</p>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Cases involving implants, orthodontic prep, or extensive reconstruction. Phased for optimal results.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="makeover-section-cost" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[1000px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-6">
              Investment and Financing
            </h2>
            <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans text-center max-w-[700px] mx-auto mb-10">
              A smile makeover is a lasting investment in your confidence, health, and quality of life. At Genesis,
              we believe exceptional results should be accessible.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Personalized Pricing</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Because every makeover is bespoke, pricing is determined by the specific treatments included. Dr. Reyhani
                  provides a detailed, transparent breakdown during your consultation — no hidden fees, no surprises. You'll
                  understand exactly what's included and why each element matters.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-md p-8 h-full">
                <h3 className="font-serif text-[18px] md:text-[20px] leading-[24px] uppercase text-[#383B42] mb-3">Flexible Financing</h3>
                <p className="text-[15px] leading-[24px] text-[#383B42]/70 font-sans">
                  Genesis offers flexible payment plans and financing options so your dream smile is within reach. Our
                  concierge team will walk you through every option during your <Link href="/contact" className="text-[#A4906F] hover:underline">consultation</Link>,
                  ensuring you feel comfortable and confident moving forward.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="makeover-section-before-after" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <BeforeAfterSlider beforeImg={smileBeforeImg} afterImg={smileAfterImg} />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  Before and After
                </h2>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Every smile makeover at Genesis tells a story of transformation. Dr. Reyhani's portfolio showcases
                  the range and depth of what's possible — from subtle enhancements to dramatic, life-changing
                  results. Each case reflects the same commitment to artistry, precision, and natural beauty.
                </p>
                <p className="text-[15px] leading-[22px] text-[#383B42]/70 font-sans">
                  Browse our full collection of smile transformations in the <Link href="/gallery" className="text-[#A4906F] hover:underline">smile gallery</Link> and
                  imagine what's possible for you.
                </p>
                <Link
                  href="/gallery"
                  data-testid="makeover-link-gallery"
                  className="inline-flex items-center px-6 py-3 bg-[#383B42] text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover-elevate rounded-md mt-2 font-sans"
                >
                  View Gallery
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="makeover-section-faq" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }} aria-hidden="true" />
        <div className="relative max-w-[800px] mx-auto">
          <FadeInSection>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42] text-center mb-14">
              Frequently Asked Questions About Smile Makeovers
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <FAQAccordion />
          </FadeInSection>
        </div>
      </section>

      <section data-testid="makeover-section-resources" className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h3 className="font-serif text-[20px] md:text-[24px] leading-[26px] md:leading-[30px] uppercase text-[#383B42] mb-6">
            Related Resources
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link href="/blog/smile-makeover-los-angeles-guide" data-testid="makeover-link-blog-guide" className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md">
              Smile Makeover Guide
            </Link>
            <Link href="/porcelain-veneers" data-testid="makeover-link-veneers" className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md">
              Porcelain Veneers
            </Link>
            <Link href="/cosmetic-dentistry" data-testid="makeover-link-cosmetic" className="px-6 py-3 border border-[#383B42]/20 text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md">
              All Cosmetic Services
            </Link>
          </div>
        </div>
      </section>

      <section data-testid="makeover-section-cta" className="pt-20 md:pt-28 pb-32 md:pb-40 px-6 relative">
        <div className="absolute inset-0">
          <img src={ctaBgImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40" style={{ background: 'linear-gradient(to bottom, transparent, #383B42)' }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase">
              Design Your Dream Smile
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-8 text-[15px] md:text-[17px] leading-[22px] md:leading-[21px] text-white/60 font-serif">
              Your smile makeover begins with a private consultation at Genesis. Dr. Reyhani will listen to your vision,
              design a personalized plan, and show you a preview of your new smile — all before treatment starts.
              Take the first step toward the transformation you've been imagining.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                data-testid="makeover-link-cta-consultation"
                href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
              >
                Request Consultation
              </a>
              <a
                data-testid="makeover-link-cta-call"
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
