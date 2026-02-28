import Image from "next/image";

export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Book Your Appointment",
      desc: "Choose your preferred treatment, date, and therapist through our seamless online booking system. We confirm instantly & send reminders.",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Personalized Wellness Session",
      desc: "Upon arrival, our experts assess your skin, needs, and wellness goals to customize treatment and deliver an exceptional experience.",
      img: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Restore & Glow",
      desc: "Enjoy a luxurious spa experience with calming ambiance, premium products, soothing aromatherapy, and professional care.",
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#5A4F41] text-[#FAF8F5]">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/70">
            <span className="w-1.5 h-1.5 bg-white/70 rounded-full" />
            TREATMENT PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-serif leading-[1.2]">
            Transforming your journey
            <br />
            into <span className="italic font-light">pure relaxation.</span>
          </h2>
        </div>

        <div className="relative w-full">
          {/* Connecting Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[1px] bg-white/20 hidden md:block" />

          <div className="flex flex-col gap-16">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                {/* Left: Image (or Right for even index to alternate? The image shows all images on the left actually, let's verify.) */}
                {/* Wait, the image shows images on left, text on right, and circles in between them. So the line is not in the middle of the whole container, but rather between the images and text. */}
                <div className="w-full md:w-1/2 flex justify-end md:pr-12">
                  <div className="w-[300px] h-[180px] rounded-3xl overflow-hidden relative">
                    <Image src={step.img} alt={step.title} fill className="object-cover" />
                  </div>
                </div>

                {/* Number Circle */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-[#5A4F41] border flex items-center justify-center border-white/30 rounded-full z-10 text-xl font-serif">
                  {step.id}
                </div>

                {/* Right: Text */}
                <div className="w-full md:w-1/2 flex flex-col md:pl-12 text-center md:text-left gap-3">
                  <h3 className="text-2xl font-serif">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}