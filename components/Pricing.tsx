import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Haven Plan",
      price: "329.00 USD",
      highlighted: false,
      features: [
        "Tranquility Full-Body Massage (60 min)",
        "Botanical Facial Therapy",
        "Aromatic Foot Ritual"
      ],
      includes: [
        "10% savings on extra treatments",
        "Complimentary seasonal aroma infusion",
        "Priority booking on weekends"
      ]
    },
    {
      name: "Elysian Plan",
      price: "539.00 USD",
      highlighted: true,
      features: [
        "2 Harmony Signature Massages",
        "1 Hot Stone Restoration",
        "1 Detoxifying Body Polish"
      ],
      includes: [
        "15% savings on all services",
        "20% savings on spa essentials",
        "Free monthly wellness consultation"
      ]
    },
    {
      name: "Lumina Plan",
      price: "749.00 USD",
      highlighted: false,
      features: [
        "2 Elite Therapeutic Massages",
        "2 Hot Stone Melt Sessions",
        "1 Deep Muscle Renewal (90 min)"
      ],
      includes: [
        "25% savings on extra treatments",
        "30% savings on all retail products",
        "Exclusive access to private healing suite"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#5A4F41]">
            <span className="w-1.5 h-1.5 bg-[#5A4F41] rounded-full" />
            PRICING
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2A2825]">
            Affordable pricing for
            <br />
            premium spa treatment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-[32px] p-8 ${
                plan.highlighted
                  ? "bg-[#5A4F41] text-white shadow-xl shadow-black/5"
                  : "bg-transparent border border-[#EAE3DA] text-[#2A2825]"
              }`}
            >
              <h3 className="text-3xl font-serif mb-2">{plan.name}</h3>
              <div className="text-xl font-medium mb-8">$ {plan.price}</div>
              
              <button
                className={`w-full py-3 rounded-full text-sm font-medium transition mb-8 ${
                  plan.highlighted
                    ? "bg-white text-[#5A4F41] hover:bg-[#FAF8F5]"
                    : "bg-[#5A4F41] text-white hover:bg-[#4a4034]"
                }`}
              >
                Become a Member
              </button>

              <div className="mb-6">
                <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${plan.highlighted ? "text-white/70" : "text-[#A59582]"}`}>
                  What You Receive
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-white" : "text-[#5A4F41]"}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${plan.highlighted ? "text-white/70" : "text-[#A59582]"}`}>
                  Member Privileges
                </p>
                <ul className="space-y-3">
                  {plan.includes.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-white" : "text-[#5A4F41]"}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}