import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative w-full py-32 flex items-center justify-center bg-[#FAF8F5]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop"
          alt="Spa Treatment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 bg-white px-12 py-16 rounded-[40px] shadow-2xl max-w-2xl w-full mx-4 text-center flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#5A4F41] mb-6">
          <span className="w-1.5 h-1.5 bg-[#5A4F41] rounded-full" />
          GET STARTED
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-[#2A2825] mb-10 leading-tight">
          Ready to Began Your
          <br />
          Spa Treatment Journey
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="flex items-center gap-4 bg-[#5A4F41] text-white px-2 py-2 rounded-full hover:bg-black transition w-full sm:w-auto">
            <span className="pl-6 font-medium text-sm">Book a Treatment</span>
            <div className="w-10 h-10 bg-white text-[#5A4F41] rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
          <button className="flex items-center px-8 py-4 rounded-full border border-[#EAE3DA] text-[#5A4F41] font-medium text-sm hover:bg-[#FAF8F5] transition w-full sm:w-auto justify-center">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}