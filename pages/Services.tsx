import React from 'react';
import { CheckCircle2, Megaphone, Monitor, Repeat, PenTool, Database, Search } from 'lucide-react';

const Services: React.FC = () => {
  const serviceItems = [
    {
      title: "Meta Ads Engine",
      description: "Full-funnel acquisition system built for academies — TOF awareness, MOF trust-building, and BOF conversion ads that drive predictable admissions.",
      icon: <Megaphone className="text-brand-accent" />,
      features: ["Pixel + Events Setup", "TOF–MOF–BOF Funnels", "Lead Quality Optimization", "Scaling Protocols"]
    },
    {
      title: "Google Search Campaigns",
      description: "Intent-based campaigns that capture high-intent students searching for training, certification, and skill-based courses in your city.",
      icon: <Search className="text-brand-secondary" />,
      features: ["PMax + Search Ads", "High-Intent Keyword Mapping", "Negative Keyword Control", "Conversion Tracking Setup"]
    },
    {
      title: "Landing Pages & CRO",
      description: "High-trust landing pages engineered for education and beauty training — built to reduce drop-offs and increase admissions.",
      icon: <Monitor className="text-blue-400" />,
      features: ["Mobile-First Layouts", "Trust Sections + Social Proof", "Speed Optimization", "A/B Testing Framework"]
    },
    {
      title: "UGC & Creative Direction",
      description: "Direct-response content tailored for academies — transformations, classroom BTS, trainer intros, and offer-driven reels.",
      icon: <PenTool className="text-purple-400" />,
      features: ["Ad Angle Research", "Short-Form Scripts", "Academy UGC Direction", "High-CTR Video Editing"]
    },
    {
      title: "Automation & CRM Workflows",
      description: "Automated lead capture → WhatsApp sequences → counselor routing → follow-up tracking. A full admission pipeline that runs without you.",
      icon: <Repeat className="text-emerald-400" />,
      features: ["WhatsApp Cloud API Setup", "Lead Routing Workflows", "Follow-Up Drip Sequences", "Counselor Performance Tracking"]
    },
    {
      title: "Data Systems & Reporting",
      description: "Custom dashboards for admissions, CPL, counselor performance, ROI, and weekly growth insights — no manual tracking needed.",
      icon: <Database className="text-orange-400" />,
      features: ["Lead Source Attribution", "Daily/Weekly Dashboards", "Admission Conversion Tracking", "Automated Reports"]
    }
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-8xl font-black font-display mb-8">
            Full-Stack Growth <br />
            <span className="text-gradient">Capabilities.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            As a fractional CMO for academies, I build the complete engine — ads, funnels, automation, CRM, and data — required to scale admissions consistently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div key={index} className="glass-card p-10 rounded-[2rem] hover:translate-y-[-10px] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-8">{service.description}</p>
              <div className="space-y-3">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                    <CheckCircle2 size={16} className="text-brand-secondary" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 glass-card rounded-[3rem] border-brand-accent/20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-black font-display mb-4">Need a custom system?</h2>
            <p className="text-gray-400 text-lg">
              Every academy is different. If you need a fully tailored acquisition, automation, or CRM setup — I can build it end-to-end.
            </p>
          </div>
          <button className="whitespace-nowrap bg-brand-accent text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform">
            Request Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;