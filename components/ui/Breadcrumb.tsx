'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2">
      <Link
        href="/"
        className="text-white/60 text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans hover:text-[#A4906F] transition-colors"
      >
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-3 h-3 text-white/30" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-white/60 text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans hover:text-[#A4906F] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white text-[10px] leading-[12px] tracking-[0.1em] uppercase font-sans">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
