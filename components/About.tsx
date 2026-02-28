import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row gap-16 items-center">
        {/* Left Image */}
        <div className="md:w-1/2 relative">
          <div className="w-full aspect-[4/5] overflow-hidden rounded-[40px] relative">
            <Image
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
              alt="Therapist giving massage"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col items-start gap-8">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#5A4F41]">
            <span className="w-1.5 h-1.5 bg-[#5A4F41] rounded-full" />
            About Us
          </div>

          <h2 className="text-4xl md:text-5xl font-serif leading-[1.2] text-[#2A2825]">
            At Serenique Spa, we believe wellness is more than a treatment — it's a ritual. Our expert therapists blend traditional healing with modern techniques, delivering moments of deep renewal.
          </h2>

          <button className="flex items-center gap-4 bg-[#5A4F41] text-white px-2 py-2 rounded-full hover:bg-black transition w-max group">
            <span className="pl-6 font-medium text-sm">About us More</span>
            <div className="w-10 h-10 bg-white text-[#5A4F41] rounded-full flex items-center justify-center group-hover:bg-[#FAF8F5]">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          <div className="flex gap-12 mt-8 w-full border-t border-[#EAE3DA] pt-8">
            <div className="flex flex-col">
              <span className="text-5xl font-serif text-[#2A2825]">14k+</span>
              <span className="text-xs text-[#6C6652] mt-2 font-medium">Client<br/>Satisfaction</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-serif text-[#2A2825]">20+</span>
              <span className="text-xs text-[#6C6652] mt-2 font-medium">Years of<br/>Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-serif text-[#2A2825]">68%</span>
              <span className="text-xs text-[#6C6652] mt-2 font-medium max-w-[150px]">Noticeable Health Improvement in 30 Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}