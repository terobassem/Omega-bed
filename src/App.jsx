import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState(null);

  const handleSelectProduct = (productName) => {
    setSelectedProductForInquiry(productName);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1D1B1A] font-sans selection:bg-[#9E7A52] selection:text-white">
      {/* Minimal luxury navigation bar */}
      <Navbar />

      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Products Showcase */}
        <Products onSelectProductForInquiry={handleSelectProduct} />

        {/* Section 3: About Us / Craft & Heritage */}
        <About />

        {/* Section 4: Contact Us / Private Atelier Consultation */}
        <Contact preselectedProduct={selectedProductForInquiry} />
      </main>

      {/* Minimalist grounding footer */}
      <Footer />
    </div>
  );
}
