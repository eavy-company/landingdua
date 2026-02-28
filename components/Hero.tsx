"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden bg-[#5a4f41]">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Spa"
          fill
          priority
          className="object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center mt-12 md:mt-24 w-full max-w-4xl px-4">
        <div className="hero-text flex items-center gap-2 text-white/90 text-xs md:text-sm font-semibold tracking-widest uppercase mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Award-Winning Spa Experience</span>
        </div>

        <h1 className="hero-text text-4xl md:text-6xl lg:text-[80px] leading-[1.1] text-white font-medium mb-10">
          <span className="font-serif">Elevate your well-being</span>
          <br className="hidden md:block" />
          <span className="font-serif italic font-light lowercase"> with luxury spa.</span>
        </h1>

        <div className="hero-text flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="flex items-center justify-between gap-4 bg-white text-[#2a2825] px-2 py-2 rounded-full hover:bg-[#FAF8F5] transition w-full sm:w-auto overflow-hidden">
            <span className="pl-6 font-medium text-sm">Book a Treatment</span>
            <div className="w-10 h-10 bg-[#FAF8F5] text-[#2a2825] rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
          <button className="flex items-center px-8 py-4 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition w-full sm:w-auto justify-center">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}