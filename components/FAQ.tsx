"use client";

import { ArrowRight, Plus, Minus, Star } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Do I need to book an appointment in advance?",
      a: "Yes, we recommend booking at least 24 hours in advance to ensure availability. Walk-ins are welcome based on open slots."
    },
    {
      q: "What products do you use? Are they safe?",
      a: "We use 100% organic, hypoallergenic, and cruelty-free products sourced from premium wellness brands."
    },
    {
      q: "Can I choose a male or female therapist?",
      a: "Absolutely. You can specify your preference during the booking process, and we will do our best to accommodate."
    },
    {
      q: "How long do the treatments take?",
      a: "Treatments generally range from 30 minutes to 2 hours, depending on the package you select."
    },
    {
      q: "What should I wear during a massage?",
      a: "You may undress to your comfort level. You will be professionally draped during the entire session."
    }
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#FAF8F5]">
      {/* Marquee */}
      <div className="w-full bg-[#5A4F41] py-4 overflow-hidden text-white/90 flex whitespace-nowrap">
        <div className="flex animate-marquee gap-8 items-center text-sm font-serif tracking-widest px-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span>MON - FRIDAY: 10 AM - 6 PM</span>
              <Star className="w-4 h-4 fill-current" />
            </div>
          ))}
        </div>
      </div>

      <div className="py-24 container mx-auto px-6 max-w-6xl flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3 flex flex-col items-start gap-6">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#5A4F41]">
            <span className="w-1.5 h-1.5 bg-[#5A4F41] rounded-full" />
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2A2825] leading-tight">
            Explore all essential questions answered.
          </h2>
          <button className="flex items-center gap-4 bg-[#5A4F41] text-white px-2 py-2 rounded-full hover:bg-[#4a4034] transition w-max group mt-4">
            <span className="pl-6 font-medium text-sm">Contact Now</span>
            <div className="w-10 h-10 bg-white text-[#5A4F41] rounded-full flex items-center justify-center group-hover:bg-[#FAF8F5]">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="md:w-2/3 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-[#EAE3DA] pb-4 transition-all duration-300 ${
                open === i ? "bg-white p-6 rounded-2xl shadow-sm border-transparent border-none mt-2" : "pt-4"
              }`}
            >
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setOpen(i)}
              >
                <span className={`font-serif text-xl ${open === i ? "text-[#2A2825]" : "text-[#2A2825]/80"}`}>
                  {faq.q}
                </span>
                {open === i ? (
                  <Minus className="w-5 h-5 text-[#5A4F41] shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#5A4F41] shrink-0" />
                )}
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden text-sm text-[#6C6652] leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}