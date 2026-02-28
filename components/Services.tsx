"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    { 
      name: "Detox Body Polish", 
      desc: "Revitalize your skin with our signature exfoliating scrub, leaving you glowing and refreshed.",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      name: "Aromatherapy Massage", 
      desc: "Custom essential oils blend with light pressure to completely relax body and mind.",
      img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      name: "Radiance Facial", 
      desc: "Deep cleansing and hydration explicitly tailored to bring out your natural, youthful shine.",
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      name: "Hot Stone Therapy", 
      desc: "Heated river stones apply deep warmth, melting away deep-set muscle tension.",
      img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=600&auto=format&fit=crop" 
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#5A4F41]">
              <span className="w-1.5 h-1.5 bg-[#5A4F41] rounded-full" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2A2825]">
              Experience our curated
              <br />
              <span className="italic font-light">wellness treatments</span>
            </h2>
          </div>
        </div>

        {/* 4 Cards in 1 Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div 
              key={i} 
              className="relative h-[450px] w-full rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={svc.img}
                alt={svc.name}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content Box (slides up on hover) */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-white text-2xl font-serif mb-3 leading-tight">
                    {svc.name}
                  </h3>
                  
                  {/* Expanding Description */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                    <p className="text-white/80 text-sm overflow-hidden line-clamp-3">
                      {svc.desc}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="text-white text-xs tracking-wider uppercase font-semibold border-b border-white/40 pb-1">
                      Read More
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}