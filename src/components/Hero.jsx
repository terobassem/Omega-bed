import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden">
      {/* Background ambient tone */}
      <div className="absolute inset-0 bg-[#FBF9F5] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

        {/* Hero Editorial Typography */}
        <div className="pt-12 md:pt-16 pb-12 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-light tracking-[-0.01em] text-[#1D1B1A] leading-[1.08]">
              The Art of <span className="italic font-normal text-bronze-dark">Egyptian Bed.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end lg:pl-6 space-y-6">
            <p className="font-sans text-[15px] sm:text-[16px] text-[#5C5651] font-light leading-relaxed">
              Egypt's premier luxury sleep house, based in Helwan, Cairo. We unite artisanal solid hardwood joinery, pure Egyptian Giza cotton, and natural horsehair for a lifetime of restorative comfort.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium bg-[#1D1B1A] text-[#FBF9F5] hover:bg-bronze transition-all duration-300 shadow-sm"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#1D1B1A] hover:text-bronze transition-colors py-3 px-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Large Curated Editorial Hero Photography */}
        <div className="relative group w-full mt-2">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-[#ECE4DA] border border-[#ECE4DA]">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=85"
              alt="Omega Bed handcrafted master suite with Egyptian cotton and solid beech woodwork"
              className="w-full h-full object-cover object-center img-editorial brightness-[0.98] contrast-[1.02]"
              loading="eager"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B1A]/40 via-transparent to-transparent pointer-events-none" />

            {/* In-photo Badge */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white flex items-center gap-4">
              <div className="h-8 w-[1px] bg-white/40" />
              <div>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-white/70">
                  Omega Bed Master Workshop
                </span>
                <span className="block font-serif text-base md:text-lg tracking-wide text-white font-light">
                  Helwan Showroom & Atelier — Cairo, Egypt
                </span>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 hidden sm:flex items-center gap-2 text-white/80 text-[11px] tracking-[0.2em] uppercase font-sans">
              <span>Helwan, Cairo</span>
              <span className="w-6 h-[1px] bg-white/60 inline-block" />
            </div>
          </div>

          {/* Egyptian Craftsman Attributes Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 pb-4 border-b border-[#ECE4DA] text-[#1D1B1A]">
            <div>
              <span className="block text-[11px] uppercase tracking-[0.22em] text-[#7E7770]">
                Branch Location
              </span>
              <span className="font-serif text-lg md:text-xl font-normal text-[#1D1B1A] mt-1 block">
                Helwan, Cairo
              </span>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-[0.22em] text-[#7E7770]">
                Organic Textiles
              </span>
              <span className="font-serif text-lg md:text-xl font-normal text-[#1D1B1A] mt-1 block">
                100% Egyptian Giza Cotton
              </span>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-[0.22em] text-[#7E7770]">
                Internal Core
              </span>
              <span className="font-serif text-lg md:text-xl font-normal text-[#1D1B1A] mt-1 block">
                Pure Horsehair & Coils
              </span>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-[0.22em] text-[#7E7770]">
                Guarantee
              </span>
              <span className="font-serif text-lg md:text-xl font-normal text-[#1D1B1A] mt-1 block">
                30-Year Warranty
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-6 flex justify-between items-center text-[#7E7770]">
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll to view products & prices in LE
        </span>
        <a
          href="#products"
          aria-label="Scroll to products"
          className="p-2 hover:text-[#1D1B1A] transition-colors"
        >
          <ArrowDown className="w-4 h-4 animate-bounce opacity-70" />
        </a>
      </div>
    </section>
  );
}
