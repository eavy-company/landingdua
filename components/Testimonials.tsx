import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const reviews = [
    {
      text: "Everything felt curated and thoughtful. The aromatherapy session was a dream—beautiful scents, perfect pressure, and a serene environment.",
      name: "Olivia Parker",
      role: "Beauty Influencer",
      rating: 4.5
    },
    {
      text: "Serenique Spa truly exceeded my expectations. The deep tissue massage removed stress I've carried for years. Highly recommended for anyone seeking real relaxation.",
      name: "Daniel Harris",
      role: "Travel Blogger",
      rating: 4.5
    },
    {
      text: "The atmosphere instantly relaxes you. The facial treatment improved my skin after just one session. Their team is incredibly skilled and welcoming.",
      name: "Sophia Bennett",
      role: "Wellness Enthusiast",
      rating: 4.5
    },
    {
      text: "My go-to spa for monthly wellness rituals. The hot stone therapy is unmatched. I've visited many spas, but Serenique remains my favorite for its professionalism and calming energy.",
      name: "Liam Crawford",
      role: "Real Estate Agent",
      rating: 4.5
    },
    {
      text: "I booked a wellness package and felt completely restored afterward. The team took time to understand my needs and created a tailored experience. Worth every second.",
      name: "Isabella Gomez",
      role: "Creative Director",
      rating: 4.5
    },
    {
      text: "Every detail felt luxurious—from the aroma to the lighting. My therapist understood exactly what my body needed. I left feeling lighter, calmer, and completely renewed.",
      name: "Emma Richardson",
      role: "Fashion Stylist",
      rating: 4.5
    }
  ];

  return (
    <section className="py-24 bg-[#5A4F41]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/70">
            <span className="w-1.5 h-1.5 bg-white/70 rounded-full" />
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#FAF8F5]">
            Where Our Guests Share
            <br />
            Their Wellness Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current blur-[0.5px] opacity-90" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-500">({review.rating})</span>
                </div>
                <p className="text-[#2A2825] text-sm leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative bg-gray-200">
                  <Image
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-[#2A2825]">{review.name}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}