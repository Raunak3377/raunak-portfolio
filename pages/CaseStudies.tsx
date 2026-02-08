import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle, Target } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      id: "aura-academy",
      tag: "Beauty Academy",
      title: "Aura National Hair & Beauty Academy: 30 Admissions/mo at ₹20k–₹50k",
      summary:
        "Built a complete TOF–MOF–BOF Meta funnel, automated WhatsApp follow-up, and counselor tracking system that turned Aura into the most trusted academy in Gaya.",
      stats: [
        { label: "Monthly Revenue", value: "₹12–15L" },
        { label: "Avg. Ticket Size", value: "₹20k–₹50k" },
        { label: "Admissions/mo", value: "30+" }
      ],
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Reduced CPL from ₹40–₹50 to ₹8–₹12 consistently.",
        "Automated a zero-leak WhatsApp → CRM → counselor pipeline.",
        "Created offer stack + trust content that increased conversions 60%."
      ]
    },
    {
      id: "lakme-darbhanga",
      tag: "Franchise Academy",
      title: "Lakme Academy Darbhanga: Local Domination for a Global Beauty Brand",
      summary:
        "Scaled Lakme Darbhanga by building high-intent funnels, restructuring offers, and installing a disciplined counselor follow-up system.",
      stats: [
        { label: "Monthly Revenue", value: "₹15–18L" },
        { label: "Avg. Ticket Size", value: "₹40k–₹60k" },
        { label: "Market Lead", value: "Darbhanga" }
      ],
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Localized brand messaging for the Mithila audience.",
        "Created high-converting ‘Free Demo Day’ funnels.",
        "Built automated WhatsApp sequences improving conversions by 45%."
      ]
    },
    {
      id: "aurane-international",
      tag: "Premium Beauty Institute",
      title: "Aurane International Patna: High-Ticket Course Funnel Optimization",
      summary:
        "Implemented a clean acquisition pipeline for high-ticket beauty certifications by focusing on trust, placement proof, and offer clarity.",
      stats: [
        { label: "Revenue Growth", value: "+220%" },
        { label: "Lead Quality", value: "3x Improvement" },
        { label: "Cost Per Lead", value: "₹10–₹14" }
      ],
      image: "https://picsum.photos/1200/800?beauty",
      points: [
        "Built structured TOF–MOF–BOF ads with trainer authority videos.",
        "Installed lead routing → counselor workflows → follow-up automation.",
        "Created placement-based content that increased lead trust massively."
      ]
    }
  ];

  return (
    <div className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h3 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">
            Proof of Work
          </h3>
          <h1 className="text-5xl md:text-8xl font-black font-display leading-tight">
            Data. Funnels. Admissions. <br />
            <span className="text-gradient">Real Outcomes.</span>
          </h1>
        </div>

        <div className="space-y-40">
          {cases.map((cs, idx) => (
            <div key={idx} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={`${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                  <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-brand-accent text-sm font-bold mb-6">
                    {cs.tag}
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black mb-8 group-hover:text-brand-accent transition-colors">
                    {cs.title}
                  </h2>

                  <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                    {cs.summary}
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-12">
                    {cs.stats.map((s, i) => (
                      <div
                        key={i}
                        className="glass-card p-6 rounded-2xl border-white/5"
                      >
                        <div className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tighter">
                          {s.value}
                        </div>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {cs.points.map((p, i) => (
                      <div key={i} className="flex gap-4">
                        <CheckCircle
                          size={20}
                          className="text-brand-secondary shrink-0 mt-1"
                        />
                        <p className="text-gray-400 font-medium">{p}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/case-studies/${cs.id}`}
                    className="inline-flex mt-12 items-center gap-3 text-white font-black text-lg hover:gap-5 transition-all group/btn"
                  >
                    Read Full Strategy{" "}
                    <ArrowUpRight
                      size={24}
                      className="group-hover/btn:text-brand-accent"
                    />
                  </Link>
                </div>

                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-accent/5 group-hover:scale-[1.02] transition-transform duration-700">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;