import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  Zap,
  Target,
  TrendingUp,
  Users,
  Award,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  Star
} from 'lucide-react';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams();

  const caseData: Record<string, any> = {
    'aura-academy': {
      client: "Aura National Hair & Beauty Academy",
      location: "Gaya, Bihar",
      revenue: "₹12–15L / mo",
      metrics: [
        { label: "Admissions/mo", value: "30+", icon: <Users /> },
        { label: "Avg Ticket", value: "₹20k–₹50k", icon: <Target /> },
        { label: "Primary Market", value: "Gaya Region", icon: <TrendingUp /> }
      ],
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop",

      branding: {
        title: "Fixing Positioning in a Crowded Local Market",
        desc: "Gaya had multiple low-cost beauty institutes. Aura was getting lost in the noise. We repositioned them from 'local training center' to 'National-Level Professional Academy' to justify higher fee structures.",
        details: [
          { title: "Authority First", text: "Shot trainer-led expert videos and classroom BTS to elevate trust." },
          { title: "Outcome Signaling", text: "Highlighted student placements and transformation stories to build credibility." }
        ]
      },

      funnel: [
        {
          step: "TOF Awareness",
          desc: "Short-form Meta ads showing student transformations, classroom energy, and career outcomes.",
          icon: <Zap />
        },
        {
          step: "MOF Engagement",
          desc: "WhatsApp nurturing sequence delivering fees, course details, certifications, and placement proof.",
          icon: <MessageSquare />
        },
        {
          step: "BOF Conversion",
          desc: "‘Free Demo Class’ + ‘Limited Seats’ offer to push fast action from leads.",
          icon: <Star />
        },
        {
          step: "Admissions Engine",
          desc: "Counselor scripts + follow-up workflow → consistent ₹20k–₹50k admissions.",
          icon: <Award />
        }
      ],

      offers: [
        "Professional Makeup & Hair Kit (worth ₹10,000).",
        "Placement-Focused Training Curriculum.",
        "Trainer-Led Career Guidance Sessions.",
        "EMI Plans to reduce enrollment friction."
      ],

      results: [
        { label: "Monthly Admissions", value: "30+", color: "text-brand-accent" },
        { label: "Monthly Revenue", value: "₹12–15L", color: "text-white" },
        { label: "Lead Cost", value: "₹8–₹12 CPL", color: "text-brand-secondary" }
      ]
    },

    'lakme-darbhanga': {
      client: "Lakme Academy Darbhanga",
      location: "Darbhanga, Bihar",
      revenue: "₹15–18L / mo",
      metrics: [
        { label: "Admissions/mo", value: "25–30", icon: <Users /> },
        { label: "Course Ticket", value: "₹40k–₹60k", icon: <Target /> },
        { label: "Brand Tier", value: "Premium", icon: <Star /> }
      ],
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",

      branding: {
        title: "Localizing a Premium National Brand",
        desc: "Darbhanga families saw Lakme as 'too premium'. We rebuilt messaging to make the brand aspirational but accessible — without dropping fee integrity.",
        details: [
          { title: "Mithila-Focused Creatives", text: "Testimonials from regional students boosted relevance and trust." },
          { title: "Career Path Clarity", text: "Explained actual income potential and placement possibilities to parents." }
        ]
      },

      funnel: [
        {
          step: "Lead Generation",
          desc: "High-intent Meta forms targeting Darbhanga + nearby districts with career-focused ad angles.",
          icon: <Zap />
        },
        {
          step: "Trust Building",
          desc: "WhatsApp automation delivering course modules, kit details, and facility walkthrough videos.",
          icon: <MessageSquare />
        },
        {
          step: "Authority Layer",
          desc: "'Lakme Fashion Week' and 'Celebrity Makeup' placements showcased for credibility.",
          icon: <ShieldCheck />
        },
        {
          step: "Counseling + Closure",
          desc: "Parent-focused calls explaining ROI of skill-based education → improved fee acceptance.",
          icon: <Award />
        }
      ],

      offers: [
        "International Certification Programs.",
        "Pro Makeup & Hair Kit Included.",
        "Exclusive Backstage Access at Lakme Fashion Week.",
        "Merit-Based Scholarship for Toppers."
      ],

      results: [
        { label: "Avg Admissions", value: "25–30/mo", color: "text-brand-accent" },
        { label: "Monthly Revenue", value: "₹15–18L", color: "text-white" },
        { label: "Cost Per Lead", value: "₹10–₹15", color: "text-brand-secondary" }
      ]
    }
  };

  const currentCase = caseData[id || ''];

  if (!currentCase) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">Case study not found</h1>
          <Link to="/case-studies" className="text-brand-accent flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to all cases
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Sticky Header + Title */}
      <div className="pt-24 px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} /> Back to Case Studies
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-3xl">
              <h4 className="text-brand-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">
                Strategy Breakdown
              </h4>

              <h1 className="text-4xl md:text-7xl font-black font-display leading-tight">
                {currentCase.client}
              </h1>
            </div>

            <div className="bg-brand-secondary/10 border border-brand-secondary/20 px-6 py-4 rounded-2xl">
              <div className="text-brand-secondary font-black text-3xl">
                {currentCase.revenue}
              </div>
              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                Growth Benchmark
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-6 mb-24">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative h-[400px] md:h-[600px]">
          <img
            src={currentCase.image}
            className="w-full h-full object-cover"
            alt={currentCase.client}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

          <div className="absolute bottom-12 left-12 right-12 flex flex-wrap gap-8">
            {currentCase.metrics.map((m: any, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-3 bg-white/10 backdrop-blur rounded-xl">
                  {React.cloneElement(m.icon as React.ReactElement<any>, { className: "text-white" })}
                </div>
                <div>
                  <div className="text-white font-black text-xl">{m.value}</div>
                  <div className="text-gray-400 text-[10px] font-bold uppercase">
                    {m.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-20">
            {/* 01 Branding */}
            <section>
              <h2 className="text-3xl font-black mb-8 flex items-center gap-4">
                <span className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-accent border border-white/10 font-display">
                  01
                </span>
                {currentCase.branding.title}
              </h2>

              <div className="glass-card p-10 rounded-[2.5rem] border-white/5 text-gray-400 space-y-6 text-lg leading-relaxed">
                <p>{currentCase.branding.desc}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {currentCase.branding.details.map((d: any, i: number) => (
                    <div
                      key={i}
                      className="p-6 bg-white/5 rounded-2xl border-l-4 border-brand-accent"
                    >
                      <h4 className="text-white font-bold mb-2">{d.title}</h4>
                      <p className="text-sm">{d.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 02 Funnel Architecture */}
            <section>
              <h2 className="text-3xl font-black mb-8 flex items-center gap-4">
                <span className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-secondary border border-white/10 font-display">
                  02
                </span>
                Growth Funnel Architecture
              </h2>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-secondary to-transparent hidden md:block"></div>

                <div className="space-y-8">
                  {currentCase.funnel.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="relative flex flex-col md:flex-row gap-6 md:items-center pl-0 md:pl-16"
                    >
                      <div className="md:absolute left-2 w-10 h-10 rounded-full bg-brand-dark border-2 border-brand-secondary flex items-center justify-center text-brand-secondary z-10">
                        {React.cloneElement(item.icon as React.ReactElement<any>, { size: 18 })}
                      </div>

                      <div className="glass-card p-6 rounded-2xl flex-grow border-white/5">
                        <h4 className="text-white font-black text-xl mb-1">
                          {item.step}
                        </h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 03 Offer Strategy */}
            <section>
              <h2 className="text-3xl font-black mb-8 flex items-center gap-4">
                <span className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-orange-400 border border-white/10 font-display">
                  03
                </span>
                Strategic Offer Design
              </h2>

              <div className="glass-card p-10 rounded-[2.5rem] border-white/5">
                <p className="text-gray-400 mb-8 text-lg leading-relaxed italic">
                  "Offers decide lead quality. Follow-up decides revenue."
                </p>

                <div className="space-y-4">
                  {currentCase.offers.map((t: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-white font-medium"
                    >
                      <ShieldCheck className="text-brand-secondary shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Results Sidebar */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl border-white/10 sticky top-24">
              <h3 className="text-xl font-black mb-6">Execution Results</h3>

              <div className="space-y-6">
                {currentCase.results.map((r: any, i: number) => (
                  <div key={i} className="pb-6 border-b border-white/5">
                    <div className={`${r.color} text-4xl font-black mb-1`}>
                      {r.value}
                    </div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="w-full mt-10 bg-brand-accent text-white py-4 rounded-xl font-black hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Scale Your Academy <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;