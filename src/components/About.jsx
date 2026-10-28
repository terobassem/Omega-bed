import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function About() {
  const materialsData = [
    {
      name: 'Egyptian Giza Long-Staple Cotton',
      origin: 'Nile Delta, Egypt',
      description: 'Hand-picked along the fertile banks of the Nile. Renowned worldwide for unmatched fiber strength, silky softness, and cool thermal regulation.'
    },
    {
      name: 'Solid Hardwood Joinery',
      origin: 'Helwan Workshop, Cairo',
      description: 'Shaped by master Egyptian cabinetmakers using traditional blind mortise-and-tenon joints that withstand generations without warping or creaking.'
    },
    {
      name: 'Equine Horsehair Micro-Springs',
      origin: 'Natural Breathable Core',
      description: 'Natural curly horsehair acts as millions of tiny springs, providing contouring spinal support and continuously circulating fresh air while you sleep.'
    },
    {
      name: 'Egyptian Organic Flax Linen',
      origin: 'Nile Delta Flax Fields',
      description: 'Woven into breathable, tactile fabrics that feel dry and cool to the skin, even during the warmest summer nights in Cairo.'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-[#F5EFE8] border-t border-[#ECE4DA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Asymmetrical Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Photography & Egyptian Brand Plaque (5 Cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-6">
            {/* Primary Artisan Photograph */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#ECE4DA] border border-[#DDD3C5] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=85"
                alt="Egyptian master woodworker hand-finishing solid hardwood headboard in Helwan atelier"
                className="w-full h-full object-cover object-center img-editorial"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FBF9F5]/90 backdrop-blur-md p-4 border border-[#ECE4DA]">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#7E7770] block">
                  Helwan Workshop
                </span>
                <span className="font-serif text-sm text-[#1D1B1A] italic">
                  Hand-shaping solid beech & walnut frames — Helwan, Cairo
                </span>
              </div>
            </div>

            {/* Authentic Egyptian Brand Insignia Plaque */}
            <div className="relative bg-[#1D1B1A] p-4 sm:p-5 border border-[#3D3936] flex items-center gap-5">
              <div className="w-20 h-20 flex-shrink-0 overflow-hidden border border-[#BA946B]/30 bg-black">
                <img
                  src="/images/omega-bed-brand.jpg"
                  alt="Omega Bed handcrafted bronze hallmark on dark wood"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#BA946B] block font-sans">
                  Egyptian Hallmark
                </span>
                <h4 className="font-serif text-lg text-[#FBF9F5] font-light mt-0.5">
                  The Omega Bed Helwan Seal
                </h4>
                <p className="text-[11px] text-[#A49682] font-light mt-1 leading-snug">
                  Every commissioned bed carries our individually numbered bronze seal, cast in Cairo and embedded into the solid wood foundation.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Egyptian Brand Story (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Meta Tracker */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-bronze" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#7E7770] font-sans">
                About Us • Helwan, Cairo
              </span>
            </div>

            {/* Compelling Serif Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1D1B1A] font-light tracking-tight leading-[1.12] mb-8">
              Born in Helwan. <br />
              <span className="italic text-bronze-dark">Crafted for Generations.</span>
            </h2>

            {/* Brand Narrative */}
            <div className="space-y-6 text-[#5C5651] font-light text-[15px] sm:text-[16px] leading-relaxed max-w-2xl">
              <p>
                Omega Bed was founded on a singular conviction: the finest materials and woodworking traditions in Egypt belong right in our Helwan workshops. We refuse to use cheap synthetic foam or mass-produced assembly lines.
              </p>
              <p>
                In our Helwan atelier, our master craftsmen come from generations of wood joinery experts. Every headboard and plinth is sculpted from solid beech and walnut, joined with traditional interlocking mortise-and-tenon joints that never loosen or squeak.
              </p>
              <p>
                Inside the mattress, we combine Egypt’s legendary Giza long-staple cotton and natural flax with pure curled equine hair. This creates an all-natural, breathable suspension that naturally cools your body during warm Egyptian nights and retains cozy warmth in winter—guaranteeing 30 years of deep, restorative sleep.
              </p>
            </div>

            {/* Material Highlights */}
            <div className="mt-10 pt-8 border-t border-[#DDD3C5] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {materialsData.slice(0, 2).map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-bronze-dark font-medium">
                    {item.origin}
                  </span>
                  <h4 className="font-serif text-lg text-[#1D1B1A]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#7E7770] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Subtle Call to Action (No Reserve) */}
            <div className="mt-10 pt-6 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] font-medium text-[#1D1B1A] hover:text-bronze transition-colors editorial-link"
              >
                <span>Visit Our Helwan Showroom</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-2 text-xs text-[#7E7770]">
                <ShieldCheck className="w-4 h-4 text-bronze" />
                <span>100% Egyptian Giza Cotton & Natural Fillings</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
