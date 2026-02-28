import Image from "next/image";
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Therapists() {
  const therapists = [
    {
      name: "Olivia Hart",
      role: "Lead Wellness Therapist",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop"
    },
    {
      name: "Sofia Martinez",
      role: "Certified Massage Specialist",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Marcus Bennett",
      role: "Body Alignment Therapist",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Daniel Rivera",
      role: "Skincare & Facial Expert",
      img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#5A4F41]">
              <span className="w-1.5 h-1.5 bg-[#5A4F41] rounded-full" />
              OUR THERAPIST
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2A2825]">
              Meet Our Expert Wellness Therapists
            </h2>
          </div>
          
          <button className="flex items-center gap-4 bg-[#5A4F41] text-white px-2 py-2 rounded-full hover:bg-[#4a4034] transition shrink-0 group">
            <span className="pl-6 font-medium text-sm">Therapist More</span>
            <div className="w-8 h-8 bg-white text-[#5A4F41] rounded-full flex items-center justify-center group-hover:bg-[#FAF8F5]">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapists.map((person, i) => (
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-[4/5] bg-[#EAE3DA] rounded-t-[40px] overflow-hidden mb-4">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between px-2">
                <div>
                  <h3 className="text-xl font-serif text-[#2A2825]">{person.name}</h3>
                  <p className="text-xs text-[#6C6652] mt-1">{person.role}</p>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-7 h-7 rounded-full border border-[#D5CEC4] flex items-center justify-center text-[#5A4F41] hover:bg-[#5A4F41] hover:text-white transition">
                    <Facebook className="w-3 h-3" />
                  </div>
                  <div className="w-7 h-7 rounded-full border border-[#D5CEC4] flex items-center justify-center text-[#5A4F41] hover:bg-[#5A4F41] hover:text-white transition">
                    <Instagram className="w-3 h-3" />
                  </div>
                  <div className="w-7 h-7 rounded-full border border-[#D5CEC4] flex items-center justify-center text-[#5A4F41] hover:bg-[#5A4F41] hover:text-white transition">
                    <Linkedin className="w-3 h-3" />
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