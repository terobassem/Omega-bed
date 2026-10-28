import React, { useState } from 'react';
import { ArrowUpRight, X, MessageCircle } from 'lucide-react';

const products = [
  {
    id: 'sovereign-01',
    name: 'The Sovereign No. 1',
    category: 'The Grand Masterpiece Bed',
    price: '185,000 LE',
    subtitle: 'Triple suspension, pure horsehair & Egyptian Giza cotton',
    primaryImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=85',
    dimensions: 'King: 180 × 200 cm | Super King: 200 × 200 cm | Bespoke',
    craftTime: '190 hours of artisan handcraft and upholstery',
    materials: [
      '100% Egyptian Giza 87 long-staple cotton satin',
      'Double calico-pocketed Swedish steel springs',
      'Hand-carded natural equine horsehair core',
      'Solid kiln-dried beech frame crafted in our Helwan atelier'
    ],
    description: 'The pinnacle of Egyptian luxury sleep. Built with zero synthetic foam or petrochemical binders, The Sovereign No. 1 utilizes the natural breathability of Egyptian Giza cotton and horsehair to ensure a cooling, serene micro-climate throughout hot Egyptian summers and mild winters.'
  },
  {
    id: 'pavillon-monolith',
    name: 'The Pavillon Monolith',
    category: 'Architectural Platform Bed',
    price: '145,000 LE',
    subtitle: 'Hand-cast bronze plinth & Nile Delta woven linen',
    primaryImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85',
    dimensions: 'Queen: 160 × 200 cm | King: 180 × 200 cm | Emperor: 200 × 220 cm',
    craftTime: '140 hours of metal casting and master upholstery',
    materials: [
      'Solid hand-rubbed antique bronze base',
      'Organic Egyptian flax linen upholstery',
      'Natural latex core harvested from certified Hevea trees',
      'Pure organic virgin wool lumbar cushion layer'
    ],
    description: 'Conceived for architectural residences. The grounded bronze plinth creates a weightless, floating silhouette while providing flawless spine alignment.'
  },
  {
    id: 'selene-daybed',
    name: 'The Séléné Daybed',
    category: 'Sculptural Lounge Daybed',
    price: '98,000 LE',
    subtitle: 'Smoked oak joinery & hand-woven bouclé',
    primaryImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    dimensions: '100 × 210 cm | Height: 44 cm',
    craftTime: '95 hours of artisanal wood-turning and tufting',
    materials: [
      'Smoked quarter-sawn solid European oak',
      'Egyptian combed wool & organic cashmere blend',
      'Equine hair ergonomic neck bolster',
      'Hand-turned brass leveling discs'
    ],
    description: 'An architectural statement piece ideal for private suites, library alcoves, or sunlit spaces. Hand-planed by our master craftsmen in Helwan and finished with organic protective oils.'
  },
  {
    id: 'elysian-cloud',
    name: 'The Elysian Mattress System',
    category: 'Autonomous Pocket Coil Mattress',
    price: '74,000 LE',
    subtitle: '16-gauge Swedish steel & Egyptian silk tufts',
    primaryImage: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=85',
    dimensions: 'Custom sizing available for all bed frames',
    craftTime: '110 hours of hand-tufting and double side-stitching',
    materials: [
      '2,600 pocket coils in individual calico envelopes',
      'Natural curled horsehair temperature barrier',
      'Egyptian Giza cotton damask quilted cover',
      'Hand-tied mulberry silk tufting rosettes'
    ],
    description: 'Engineered for complete motion isolation and progressive lumbar support. Designed to fit any master bedstead, delivering cloud-like comfort without trapping body heat.'
  }
];

export default function Products({ onSelectProductForInquiry }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleInquire = (product) => {
    const text = `Hello Omega Bed, I would like to inquire about ${product.name} (${product.price}) from your Helwan atelier.`;
    window.open(`https://wa.me/201008924100?text=${encodeURIComponent(text)}`, '_blank');
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-24 md:py-36 bg-[#FBF9F5] border-t border-[#ECE4DA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#ECE4DA] gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#7E7770] font-sans block mb-3">
              Curated Masterworks • Prices in Egyptian Pounds (LE)
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1D1B1A] font-light tracking-tight leading-[1.15]">
              The Sleep Collection
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm md:text-[15px] text-[#5C5651] font-light leading-relaxed">
            Every bed is handcrafted at our workshop in Helwan, Cairo to your exact dimensions and preferred firmness, using Egyptian Giza cotton and solid hardwoods.
          </p>
        </div>

        {/* Product Catalog Grid — 4 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 lg:gap-y-20">
          {products.map((product, idx) => {
            const isHovered = hoveredProductId === product.id;

            return (
              <article
                key={product.id}
                className="group flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Photography */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE4DA] border border-[#ECE4DA]">
                  {/* Primary Image */}
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                      isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
                    }`}
                    loading="lazy"
                  />

                  {/* Secondary Image on Hover */}
                  <img
                    src={product.secondaryImage}
                    alt={`${product.name} craftsmanship detail`}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                      isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
                    }`}
                    loading="lazy"
                  />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 bg-[#FBF9F5]/90 backdrop-blur-sm px-3 py-1 border border-[#ECE4DA]">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#1D1B1A] font-medium">
                      No. 0{idx + 1}
                    </span>
                  </div>

                  {/* Hover Quick Action Indicator */}
                  <div
                    className={`absolute bottom-4 right-4 bg-[#1D1B1A] text-[#FBF9F5] px-3.5 py-2 text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center gap-1.5 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Information */}
                <div className="pt-6 flex flex-col justify-between flex-grow">
                  <div className="flex items-baseline justify-between gap-4 border-b border-[#ECE4DA] pb-3">
                    <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#1D1B1A] group-hover:text-bronze-dark transition-colors duration-300">
                      {product.name}
                    </h3>
                    {/* Clear Price in LE */}
                    <span className="font-serif text-xl md:text-2xl text-bronze-dark font-medium whitespace-nowrap">
                      {product.price}
                    </span>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs text-[#7E7770]">
                    <span className="tracking-wide uppercase text-[10px]">
                      {product.category}
                    </span>
                    <span className="italic font-serif text-sm text-[#5C5651]">
                      {product.subtitle}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Discreet Link & Inquiry */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-[#ECE4DA] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#7E7770] tracking-wider uppercase">
            Direct from our Helwan workshop • White-glove delivery & professional installation.
          </p>
          <a
            href="https://wa.me/201008924100?text=Hello%20Omega%20Bed%2C%20I%20want%20to%20inquire%20about%20custom%20bed%20dimensions%20and%20woodwork."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-medium text-[#1D1B1A] hover:text-[#25D366] transition-colors editorial-link"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Chat on WhatsApp for Custom Dimensions</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Specification Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-[#1D1B1A]/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-[#FBF9F5] border border-[#ECE4DA] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 text-[#7E7770] hover:text-[#1D1B1A] transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-[#ECE4DA] pb-6 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#7E7770] block mb-2">
                Omega Bed Helwan • {selectedProduct.category}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="font-serif text-3xl md:text-4xl text-[#1D1B1A]">
                  {selectedProduct.name}
                </h3>
                <span className="font-serif text-2xl md:text-3xl text-bronze-dark font-medium">
                  {selectedProduct.price}
                </span>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="aspect-[4/3] overflow-hidden bg-[#ECE4DA]">
                <img
                  src={selectedProduct.primaryImage}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-[#ECE4DA]">
                <img
                  src={selectedProduct.secondaryImage}
                  alt={`${selectedProduct.name} detail`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Description */}
            <p className="font-sans text-sm md:text-base text-[#5C5651] font-light leading-relaxed mb-6">
              {selectedProduct.description}
            </p>

            {/* Craft Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F5EFE8] p-5 mb-8 border border-[#ECE4DA]">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#7E7770] mb-1">
                  Egyptian Craftsmanship
                </span>
                <span className="text-sm font-medium text-[#1D1B1A]">
                  {selectedProduct.craftTime}
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#7E7770] mb-1">
                  Available Sizing
                </span>
                <span className="text-sm font-medium text-[#1D1B1A]">
                  {selectedProduct.dimensions}
                </span>
              </div>

              <div className="md:col-span-2 pt-2 border-t border-[#DDD3C5]">
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#7E7770] mb-2">
                  Materials & Craft Details
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3D3936]">
                  {selectedProduct.materials.map((mat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#ECE4DA]">
              <span className="text-xs text-[#7E7770] tracking-wide">
                Direct from our Helwan showroom & workshop.
              </span>
              <button
                type="button"
                onClick={() => handleInquire(selectedProduct)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium bg-[#25D366] hover:bg-[#20ba59] text-white transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp About This Piece</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
