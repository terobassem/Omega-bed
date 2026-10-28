import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#ECE4DA] py-4 shadow-[0_4px_24px_rgba(20,19,18,0.03)]'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze"
            aria-label="Omega Bed Helwan Home"
          >
            <div className="w-9 h-9 rounded-sm bg-[#1D1B1A] flex items-center justify-center p-1.5 transition-transform duration-500 group-hover:scale-105">
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
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl tracking-[0.2em] font-medium text-[#1D1B1A] uppercase leading-none">
                OMEGA
              </span>
              <span className="text-[9px] tracking-[0.35em] text-[#7E7770] font-sans uppercase mt-0.5">
                BED • HELWAN
              </span>
            </div>
          </a>

          {/* Simple Navigation: Products, About Us, Contact Us */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] uppercase tracking-[0.2em] font-medium text-[#5C5651] hover:text-[#1D1B1A] transition-colors duration-300 editorial-link py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Us CTA (No Reserve) */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium text-[#1D1B1A] bg-transparent border border-[#3D3936] hover:bg-[#1D1B1A] hover:text-[#FBF9F5] hover:border-[#1D1B1A] transition-all duration-300"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1D1B1A] hover:text-bronze focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#1D1B1A]/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-[82%] max-w-sm h-full bg-[#FBF9F5] border-l border-[#ECE4DA] p-8 pt-24 flex flex-col justify-between transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#7E7770]">
              Menu
            </span>
            <div className="flex flex-col divide-y divide-[#ECE4DA]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 font-serif text-2xl text-[#1D1B1A] hover:text-bronze transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#7E7770]" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#ECE4DA] flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 text-xs uppercase tracking-[0.2em] font-medium bg-[#1D1B1A] text-[#FBF9F5] hover:bg-bronze transition-colors"
            >
              Contact Us
            </a>
            <p className="text-[11px] text-[#7E7770] text-center tracking-wider">
              Branch & Workshop: Helwan, Cairo
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
