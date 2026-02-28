import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const blogs = [
    {
      title: "Wellness at Home: Simple Rituals for Daily Relaxation",
      author: "Olivia Gray",
      role: "Wellness Coach",
      date: "JANUARY 28, 2026",
      img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "5 Luxury Facial Treatments That Transform Your Skin",
      author: "Sophia Bennett",
      role: "Skincare Specialist",
      date: "JANUARY 22, 2026",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Why Aromatherapy Works: The Science Behind Scents",
      author: "Liam Parker",
      role: "Aromatherapy",
      date: "JANUARY 17, 2026",
      img: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#5A4F41]">
              <span className="w-1.5 h-1.5 bg-[#5A4F41] rounded-full" />
              BLOG & TIPS
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2A2825]">
              Wellness Insights & <span className="italic font-light">Beauty Tips</span>
            </h2>
          </div>
          
          <button className="flex items-center gap-4 bg-[#5A4F41] text-white px-2 py-2 rounded-full hover:bg-black transition shrink-0 group">
            <span className="pl-6 font-medium text-sm">Explore Blogs</span>
            <div className="w-8 h-8 bg-white text-[#5A4F41] rounded-full flex items-center justify-center group-hover:bg-[#FAF8F5]">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-serif text-[#2A2825] mb-6 leading-snug group-hover:text-[#8b7965] transition-colors line-clamp-2">
                {blog.title}
              </h3>
              
              <div className="flex items-center justify-between border-t border-[#EAE3DA] pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative bg-gray-200">
                    <Image
                      src={`https://i.pravatar.cc/150?u=${i + 10}`}
                      alt={blog.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[#2A2825]">{blog.author}</span>
                    <span className="text-[10px] text-[#6C6652]">{blog.role}</span>
                  </div>
                </div>
                <span className="text-[10px] text-[#6C6652] uppercase tracking-wider font-medium">
                  {blog.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}