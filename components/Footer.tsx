'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const serviceLinks = [
  { label: 'Cosmetic Dentistry', href: '/cosmetic-dentistry' },
  { label: 'Porcelain Veneers', href: '/porcelain-veneers' },
  { label: 'Teeth Whitening', href: '/teeth-whitening' },
  { label: 'Smile Makeovers', href: '/smile-makeovers' },
  { label: 'Dental Implants', href: '/dental-implants' },
  { label: 'All-on-4 Implants', href: '/all-on-4-dental-implants-los-angeles' },
  { label: 'Full Mouth Reconstruction', href: '/full-mouth-reconstruction' },
  { label: 'Restorative Dentistry', href: '/restorative-dentistry' },
];

export default function Footer() {
  return (
    <footer className="bg-[#383B42] text-white/80">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="flex flex-col items-start">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Genesis by Dr. Ben Reyhani"
                className="h-14 w-auto"
                width="160"
                height="56"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 text-[15px] leading-[22px] text-white/50 font-sans">
              A boutique dental experience where artistry and innovation converge.
            </p>
          </div>

          <div>
            <h5 className="font-serif font-semibold text-[#A4906F] text-[13px] leading-[16px] tracking-[0.15em] uppercase mb-6">
              Main Pages
            </h5>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] leading-[22px] text-white/60 hover:text-[#A4906F] transition-colors duration-300 font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-semibold text-[#A4906F] text-[13px] leading-[16px] tracking-[0.15em] uppercase mb-6">
              Services
            </h5>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] leading-[22px] text-white/60 hover:text-[#A4906F] transition-colors duration-300 font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-semibold text-[#A4906F] text-[13px] leading-[16px] tracking-[0.15em] uppercase mb-6">
              Contact
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+14698383558"
                  className="flex items-center gap-3 text-[15px] leading-[22px] text-white/60 hover:text-[#A4906F] transition-colors duration-300 font-sans"
                >
                  <Phone className="w-4 h-4 text-[#A4906F] flex-shrink-0" />
                  (469)-838-3558
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@genesisbydrben.com"
                  className="flex items-center gap-3 text-[15px] leading-[22px] text-white/60 hover:text-[#A4906F] transition-colors duration-300 font-sans"
                >
                  <Mail className="w-4 h-4 text-[#A4906F] flex-shrink-0" />
                  info@genesisbydrben.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-[15px] leading-[22px] text-white/60 font-sans">
                <MapPin className="w-4 h-4 text-[#A4906F] flex-shrink-0 mt-0.5" />
                <span>5161 Lang Ave Ste. 100<br />Dallas, TX 75209</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.facebook.com/drbenreyhani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#A4906F] transition-colors duration-300"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/genesisbydrben/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#A4906F] transition-colors duration-300"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@GenesisbyDrBen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#A4906F] transition-colors duration-300"
                aria-label="YouTube"
              >
                <SiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-serif font-semibold text-[#A4906F] text-[13px] leading-[16px] tracking-[0.15em] uppercase mb-6">
              Location
            </h5>
            <div className="w-full h-48 rounded-md overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=5161%20Lang%20Ave%20Suite%20100%20Dallas%20TX%2075209&t=m&z=14&output=embed&iwloc=near"
                title="Genesis by Dr. Ben Reyhani Location"
                aria-label="5161 Lang Ave, Suite 100, Dallas, TX 75209"
                className="w-full h-full border-0 grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-[10px] leading-[12px] tracking-[0.1em] uppercase text-white/40 font-sans">
            &copy; {new Date().getFullYear()} Genesis by Dr. Ben Reyhani, All Rights Reserved |{' '}
            <a href="/sitemap" className="hover:text-[#A4906F] transition-colors">
              Sitemap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
