'use client';

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, ChevronDown, Loader2 } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import Breadcrumb from "@/components/Breadcrumb";
import subpageHeroImg from "@/images/Group-1597883871-1_1771444440714.png";
import officeImg from "@/images/Group-1597883809-3_1771444499300.png";
import logoImg from "@/images/image_1771439936393.png";

function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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

export default function ContactContent() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to send message");
      }
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-[#383B42] text-white">
      <section data-testid="contact-section-hero" className="relative h-[25vh] md:h-[28vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={subpageHeroImg.src} alt="Genesis dental office interior in West Hollywood" className="w-full h-full object-cover" width="1920" height="600" />
          <div className="absolute inset-0 bg-[#383B42]/60" />
        </div>
        <div className="absolute top-20 left-6 z-20">
          <Breadcrumb items={[{ label: "Contact Us" }]} />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[48px] uppercase tracking-[0.05em]"
          >
            Contact Us
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

      <section data-testid="contact-section-info" className="py-20 md:py-28 px-6 relative" style={{ backgroundColor: '#F5F2EF' }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'url(/images/brand-pattern.png)', backgroundSize: '600px', backgroundRepeat: 'repeat' }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div className="bg-white p-3 md:p-5 rounded-md shadow-sm">
                <img
                  src={officeImg.src}
                  alt="Genesis by Dr. Ben Reyhani dental office exterior on Beverly Blvd West Hollywood"
                  className="w-full rounded-md aspect-[4/5] object-cover"
                  width="600"
                  height="750"
                  loading="lazy"
                />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="space-y-8">
                <h2 className="font-serif text-[28px] md:text-[40px] leading-[32px] md:leading-[44px] uppercase text-[#383B42]">
                  Genesis by Dr. Ben Reyhani
                </h2>
                <div className="space-y-4">
                  <a
                    data-testid="contact-link-phone"
                    href="tel:3103883404"
                    className="flex items-center gap-3 text-[15px] text-[#383B42]/70 font-sans hover:text-[#383B42] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#A4906F]" />
                    Phone: (310)-388-3404
                  </a>
                  <a
                    data-testid="contact-link-email"
                    href="mailto:concierge@craftedbygenesis.com"
                    className="flex items-center gap-3 text-[15px] text-[#383B42]/70 font-sans hover:text-[#383B42] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#A4906F]" />
                    Email: concierge@craftedbygenesis.com
                  </a>
                  <div className="flex items-start gap-3 text-[15px] text-[#383B42]/70 font-sans">
                    <MapPin className="w-5 h-5 text-[#A4906F] shrink-0 mt-0.5" />
                    Location: 8797 Beverly Blvd, Suite 200 West Hollywood CA 90048
                  </div>
                </div>
                <div>
                  <p className="text-[13px] tracking-[0.1em] uppercase text-[#383B42] font-sans font-medium mb-4">
                    Follow Us On:
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      data-testid="contact-link-facebook"
                      href="https://www.facebook.com/drbenreyhani/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#383B42] flex items-center justify-center text-white hover:bg-[#A4906F] transition-colors"
                    >
                      <SiFacebook className="w-4 h-4" />
                    </a>
                    <a
                      data-testid="contact-link-instagram"
                      href="https://www.instagram.com/genesisbydrben/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#383B42] flex items-center justify-center text-white hover:bg-[#A4906F] transition-colors"
                    >
                      <SiInstagram className="w-4 h-4" />
                    </a>
                    <a
                      data-testid="contact-link-youtube"
                      href="https://www.youtube.com/@GenesisbyDrBen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#383B42] flex items-center justify-center text-white hover:bg-[#A4906F] transition-colors"
                    >
                      <SiYoutube className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section data-testid="contact-section-form" className="py-20 md:py-28 px-6 bg-[#383B42]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-[35px] md:leading-[45px] uppercase">
              Contact Us
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="mt-4 text-[15px] leading-[22px] text-white/60 font-sans">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.3}>
            {submitted ? (
              <div className="mt-10 py-12 text-center">
                <p className="font-serif text-[24px] uppercase text-[#A4906F]">Thank You</p>
                <p className="mt-4 text-[15px] text-white/60 font-sans">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-5 text-left">
                <div>
                  <label htmlFor="contact-name" className="block text-[12px] tracking-[0.1em] uppercase text-white/50 font-sans mb-2">
                    Full Name
                  </label>
                  <input
                    data-testid="contact-input-name"
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-[15px] text-white font-sans placeholder:text-white/30 focus:outline-none focus:border-[#A4906F] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-[12px] tracking-[0.1em] uppercase text-white/50 font-sans mb-2">
                      Email
                    </label>
                    <input
                      data-testid="contact-input-email"
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-[15px] text-white font-sans placeholder:text-white/30 focus:outline-none focus:border-[#A4906F] transition-colors"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-[12px] tracking-[0.1em] uppercase text-white/50 font-sans mb-2">
                      Phone
                    </label>
                    <input
                      data-testid="contact-input-phone"
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-[15px] text-white font-sans placeholder:text-white/30 focus:outline-none focus:border-[#A4906F] transition-colors"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-[12px] tracking-[0.1em] uppercase text-white/50 font-sans mb-2">
                    Message
                  </label>
                  <textarea
                    data-testid="contact-input-message"
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-[15px] text-white font-sans placeholder:text-white/30 focus:outline-none focus:border-[#A4906F] transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                {error && (
                  <p data-testid="contact-error" className="text-red-400 text-[14px] font-sans text-center">{error}</p>
                )}
                <div className="text-center pt-2">
                  <button
                    data-testid="contact-button-submit"
                    type="submit"
                    disabled={sending}
                    className="px-10 py-3 bg-[#A4906F] text-[#383B42] text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md disabled:opacity-50 inline-flex items-center gap-2"
                  >
                    {sending && <Loader2 className="w-4 h-4 animate-spin" />}
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </FadeInSection>
        </div>
      </section>

      <section data-testid="contact-section-map" className="relative h-[400px] md:h-[500px]">
        <iframe
          data-testid="contact-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2!2d-118.37!3d34.075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bed7a3671687%3A0x994eaff4a1b8c7f8!2s8797%20Beverly%20Blvd%20Suite%20200%2C%20West%20Hollywood%2C%20CA%2090048!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Genesis by Dr. Ben Reyhani Location"
          className="grayscale"
        />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-md shadow-lg px-8 py-6 text-center">
          <img src={logoImg.src} alt="Genesis by Dr. Ben Reyhani" className="h-16 mx-auto mb-4 invert" width="160" height="64" loading="lazy" />
          <a
            data-testid="contact-link-directions"
            href="https://www.google.com/maps/dir//8797+Beverly+Blvd+Suite+200,+West+Hollywood,+CA+90048"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#A4906F] text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}
