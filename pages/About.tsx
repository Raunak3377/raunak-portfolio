import React from 'react';
import { Target, Shield, Heart, Coffee, Globe, Linkedin, Twitter } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl">
              <img
                src="https://picsum.photos/800/1000?man-portrait"
                alt="Raunak"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/30 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-secondary/20 rounded-full blur-[100px]"></div>

            <div className="absolute bottom-10 left-10 right-10 glass-card p-6 rounded-2xl border-white/10 z-20 hidden md:block">
              <p className="text-white italic text-lg">
                "A good funnel removes effort. A great funnel removes doubt."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">
              The Operator
            </h3>
            <h1 className="text-5xl md:text-7xl font-black font-display mb-8">
              Meet <span className="text-gradient">Raunakk.</span>
            </h1>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12">
              <p>
                I build acquisition and admission systems for beauty academies and
                vocational training institutes across the US, UK, Europe, and Australia.
                My work focuses on one thing: predictable, scalable student admissions.
              </p>

              <p>
                Over the last 3+ years, I’ve engineered full-stack growth systems for
                leading academies — Aura, Lakme Academy Darbhanga, and Aurane International.
                These systems run independently: Meta ads → funnels → WhatsApp automation →
                counselor pipelines → admissions.
              </p>

              <p>
                I don't operate like an agency. No inflated reporting. No generic templates.
                I function as your fractional CMO — fixing broken funnels, enforcing disciplined
                follow-up, and installing data-backed systems that don't rely on guesswork.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-white font-bold mb-2">Core Philosophy</h4>
                <p className="text-sm text-gray-500">
                  Systems over hustle. Data over opinions. Admissions over lead volume.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-2">Expertise</h4>
                <p className="text-sm text-gray-500">
                  Meta Ads, Funnel Design, WhatsApp Automation, CRM Setup,
                  Counselor Tracking, Lead Quality Optimization.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:text-brand-accent transition-colors font-bold"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:text-brand-accent transition-colors font-bold"
              >
                <Twitter size={20} /> Twitter
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:text-brand-accent transition-colors font-bold"
              >
                <Globe size={20} /> Medium
              </a>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-32 border-t border-white/5">
          <h2 className="text-4xl font-black font-display text-center mb-20 italic text-gray-600">
            The Growth Stack I Rely On
          </h2>

          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale grayscale-100 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <div className="text-3xl font-black">META ADS</div>
            <div className="text-3xl font-black">GA4</div>
            <div className="text-3xl font-black">GOHIGHLEVEL</div>
            <div className="text-3xl font-black">WHATSAPP API</div>
            <div className="text-3xl font-black">SHEETS CRM</div>
            <div className="text-3xl font-black">MAKE.COM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;