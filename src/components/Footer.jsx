import React from 'react';
import { ArrowUp, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141312] text-[#FBF9F5] pt-20 pb-12 border-t border-[#2A2725]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2A2725]">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-sm bg-[#2A2725] flex items-center justify-center p-1.5">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <circle cx="16" cy="13" r="3.2" stroke="#BA946B" strokeWidth="1.8" />
                  <path
                    d="M20 14C23 11.5 28 13.5 31 16.5C33.5 19 36 17.5 37 17"
                    stroke="#BA946B"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="13" cy="25" r="7" stroke="#BA946B" strokeWidth="1.8" />
                  <path
                    d="M21 27L25 21L29 27L33 21L37 27"
                    stroke="#BA946B"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-serif text-2xl tracking-[0.25em] text-[#FBF9F5] font-light uppercase">
                OMEGA BED
              </span>
            </div>
            <p className="text-xs text-[#A49682] font-light max-w-sm leading-relaxed">
              Egyptian luxury sleep house. Handcrafted in our Helwan, Cairo atelier with solid hardwood joinery, pure Egyptian Giza cotton, and natural horsehair.
            </p>
            <div className="text-[11px] text-[#7E7770] tracking-widest uppercase font-sans">
              Helwan, Cairo, Egypt
            </div>
          </div>

          {/* Simple Navigation Directory (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7E7770] block font-sans">
              Navigation
            </span>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#products" className="text-[#DDD3C5] hover:text-[#BA946B] transition-colors editorial-link">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#DDD3C5] hover:text-[#BA946B] transition-colors editorial-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#DDD3C5] hover:text-[#BA946B] transition-colors editorial-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Helwan Branch Contact Info (4 cols - No email newsletter form) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7E7770] block font-sans">
              Helwan Branch & Workshop
            </span>
            <div className="space-y-3 text-xs text-[#DDD3C5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BA946B] mt-0.5 flex-shrink-0" />
                <span>Al-Mansour Street, Helwan, Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>WhatsApp: <a href="https://wa.me/201008924100" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#25D366] font-medium">+20 100 892 4100</a></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BA946B] flex-shrink-0" />
                <span>Landline: +20 2 2554 1800</span>
              </div>
              <div className="pt-2 text-[11px] text-[#A49682]">
                Open Saturday to Thursday, 10:00 AM — 08:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7E7770]">
          <div>
            © {new Date().getFullYear()} OMEGA BED EGYPT. All rights reserved. Handcrafted in Helwan, Cairo.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#DDD3C5] hover:text-[#BA946B] transition-colors uppercase tracking-widest text-[10px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
