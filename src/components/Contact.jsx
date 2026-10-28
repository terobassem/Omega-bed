import React from 'react';
import { ArrowUpRight, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';

export default function Contact({ preselectedProduct }) {
  const whatsappNumber = '201008924100';
  const defaultMessage = preselectedProduct
    ? `Hello Omega Bed, I would like to inquire about ${preselectedProduct}.`
    : 'Hello Omega Bed, I would like to inquire about your handcrafted beds and prices.';

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const quickInquiries = [
    {
      title: 'Inquire About Product Prices & Catalog',
      desc: 'Get exact pricing in LE, available dimensions, and mattress specs.',
      msg: 'Hello Omega Bed, please share the full catalog and pricing details.'
    },
    {
      title: 'Custom Bed Sizing & Woodwork',
      desc: 'Bespoke dimensions tailored to your room and ergonomic needs.',
      msg: 'Hello Omega Bed, I want to inquire about custom bed dimensions and woodwork.'
    },
    {
      title: 'Visit Our Helwan Showroom & Workshop',
      desc: 'Test the beds in person and meet our master craftsmen.',
      msg: 'Hello Omega Bed, I would like to schedule a visit to your Helwan showroom.'
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#FBF9F5] border-t border-[#ECE4DA] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading & Subtitle */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#7E7770] font-sans block mb-3">
            Helwan, Cairo • Direct WhatsApp Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1D1B1A] font-light tracking-tight leading-[1.15] mb-6">
            Contact Us on WhatsApp
          </h2>
          <p className="font-sans text-[15px] text-[#5C5651] font-light leading-relaxed">
            We handle all client inquiries directly on WhatsApp. Connect with our team in Helwan, Cairo instantly for prices, custom specifications, or showroom visits.
          </p>
        </div>

        {/* Two-Column Layout: Direct WhatsApp Actions & Helwan Workshop Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Direct WhatsApp Action Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Primary WhatsApp Action Banner */}
            <div className="bg-[#1D1B1A] text-[#FBF9F5] p-8 md:p-12 border border-[#3D3936] flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs uppercase tracking-widest font-medium rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Available on WhatsApp</span>
                </div>
                
                <h3 className="font-serif text-3xl md:text-4xl text-white font-normal">
                  Start a Conversation Directly
                </h3>
                
                <p className="text-sm text-[#A49682] font-light max-w-lg leading-relaxed">
                  No forms or waiting for email replies. Message us right now on WhatsApp for instant pricing, photos of beds in our Helwan workshop, and custom advice.
                </p>

                <div className="pt-2">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#7E7770]">WhatsApp Number</div>
                  <div className="text-2xl font-serif text-[#BA946B] mt-0.5 tracking-wider font-light">
                    +20 100 892 4100
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Big Button */}
              <div className="pt-8 relative z-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-[0.24em] font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Open WhatsApp Chat</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick 1-Click WhatsApp Inquiries */}
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#7E7770] block font-sans">
                Quick WhatsApp Inquiries (Tap to Chat)
              </span>
              <div className="grid grid-cols-1 gap-3">
                {quickInquiries.map((item, idx) => {
                  const itemUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(item.msg)}`;
                  return (
                    <a
                      key={idx}
                      href={itemUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-5 bg-[#F5EFE8] border border-[#DDD3C5] hover:border-[#1D1B1A] transition-all flex items-center justify-between gap-4"
                    >
                      <div>
                        <h4 className="font-serif text-lg text-[#1D1B1A] group-hover:text-bronze transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#5C5651] font-light mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#1D1B1A] text-[#FBF9F5] group-hover:bg-[#25D366] transition-colors flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Column 2: Only Helwan Cairo Branch & Workshop (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#7E7770] block mb-2">
                  Our Only Branch & Workshop
                </span>
                <h4 className="font-serif text-3xl text-[#1D1B1A] font-light mb-3">
                  Helwan, Cairo
                </h4>
                
                <div className="bg-[#ECE4DA]/60 p-6 border border-[#DDD3C5] space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                    <div>
                      <span className="block font-medium text-base text-[#1D1B1A]">
                        Omega Bed Showroom & Atelier
                      </span>
                      <span className="text-sm text-[#5C5651] block mt-1 leading-relaxed">
                        Al-Mansour Street, Helwan, Cairo, Egypt
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-[#DDD3C5] text-xs text-[#5C5651]">
                    <Clock className="w-4 h-4 text-bronze flex-shrink-0" />
                    <span>Saturday — Thursday: 10:00 AM — 08:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Direct Tap-to-Chat / Call */}
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#7E7770] block">
                  Direct Numbers
                </span>
                
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#F5EFE8] border border-[#DDD3C5] hover:border-[#1D1B1A] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <div>
                      <span className="font-medium text-sm text-[#1D1B1A] block">+20 100 892 4100</span>
                      <span className="text-[11px] text-[#7E7770]">WhatsApp Chat (Instant Reply)</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#7E7770] group-hover:text-[#1D1B1A]" />
                </a>

                <a
                  href="tel:+20225541800"
                  className="flex items-center justify-between p-4 bg-[#F5EFE8] border border-[#DDD3C5] hover:border-[#1D1B1A] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-bronze" />
                    <div>
                      <span className="font-medium text-sm text-[#1D1B1A] block">+20 2 2554 1800</span>
                      <span className="text-[11px] text-[#7E7770]">Helwan Workshop Landline</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#7E7770] group-hover:text-[#1D1B1A]" />
                </a>
              </div>
            </div>

            {/* Note Card */}
            <div className="bg-[#ECE4DA]/60 p-6 border border-[#DDD3C5]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-bronze-dark font-medium block mb-1">
                Direct WhatsApp Service
              </span>
              <p className="text-xs text-[#5C5651] font-light leading-relaxed">
                Send us a message with your preferred room dimensions or bed design, and our master carpenter in Helwan will answer your questions directly with photos and recommendations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
