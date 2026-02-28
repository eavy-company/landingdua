export default function Logos() {
  const logos = [1, 2, 3, 4, 5];

  return (
    <section className="py-12 border-b border-[#EAE3DA] overflow-hidden bg-[#FAF8F5]">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs font-semibold tracking-wider text-[#A59582] uppercase mb-8">
          Trusted by the industry&apos;s leading brands
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((i) => (
            <svg
              key={i}
              className="w-24 h-8 md:w-32 md:h-10 text-[#554D3D]"
              viewBox="0 0 100 30"
              fill="currentColor"
            >
              {/* Mock Logo Ipsum */}
              <circle cx="15" cy="15" r="10" />
              <text x="35" y="20" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Logoipsum</text>
            </svg>
          ))}
        </div>
      </div>
    </section>
  );
}