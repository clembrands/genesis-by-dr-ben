'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const serviceLinks = [
  { label: 'Cosmetic Dentistry', href: '/cosmetic-dentistry' },
  { label: 'Porcelain Veneers', href: '/porcelain-veneers' },
  { label: 'Teeth Whitening', href: '/teeth-whitening' },
  { label: 'Smile Makeovers', href: '/smile-makeovers' },
  { label: 'Full Mouth Reconstruction', href: '/full-mouth-reconstruction' },
  { label: 'Restorative Dentistry', href: '/restorative-dentistry' },
  { label: 'Dental Implants', href: '/dental-implants' },
  { label: 'All-on-4 Implants', href: '/all-on-4-dental-implants-los-angeles' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '#', children: serviceLinks },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#383B42]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 pt-7 pb-5 md:pt-8 md:pb-6">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 w-10 h-10 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="/images/logo.png"
              alt="Genesis by Dr. Ben Reyhani"
              className="h-10 md:h-[70px] w-auto"
              width="200"
              height="70"
            />
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="tel:+14698383558"
              className="md:hidden flex items-center justify-center w-10 h-10 text-white/70 hover:text-[#A4906F] transition-colors duration-300"
              aria-label="Call office"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="tel:+14698383558"
              className="hidden md:inline-flex items-center text-white/60 text-[12px] leading-[14px] tracking-[0.05em] font-sans hover:text-[#A4906F] transition-colors duration-300"
            >
              (469)-838-3558
            </a>
            <a
              href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-8 py-3 bg-white text-[#383B42] text-[12px] leading-[14px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 hover-elevate rounded-md"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#383B42] backdrop-blur-lg"
          onClick={() => setMenuOpen(false)}
        />
        <nav className="relative z-10 flex flex-col items-start justify-center h-full pl-12 md:pl-20 gap-4 md:gap-5">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center gap-2 font-serif text-[22px] md:text-[30px] leading-[28px] md:leading-[35px] transition-colors duration-300 uppercase tracking-[0.05em] ${
                      servicesOpen ? 'text-[#A4906F]' : 'text-white/80 hover:text-[#A4906F]'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      servicesOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="flex flex-col gap-0 pl-6">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`font-serif text-[18px] md:text-[24px] leading-[24px] md:leading-[30px] py-2 transition-colors duration-300 uppercase tracking-[0.05em] ${
                            pathname === child.href
                              ? 'text-[#A4906F]'
                              : 'text-white/50 hover:text-[#A4906F]'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`font-serif text-[22px] md:text-[30px] leading-[28px] md:leading-[35px] transition-colors duration-300 uppercase tracking-[0.05em] ${
                    pathname === link.href
                      ? 'text-[#A4906F]'
                      : 'text-white/80 hover:text-[#A4906F]'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <a
            href="https://app.nexhealth.com/appt/ascend-dental-alliance?lid=218673"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center px-8 py-3 border border-[#A4906F] text-[#A4906F] text-[11px] leading-[14px] tracking-[0.15em] uppercase font-sans transition-all duration-300 hover-elevate rounded-md"
          >
            Request Consultation
          </a>
        </nav>
      </div>
    </>
  );
}
