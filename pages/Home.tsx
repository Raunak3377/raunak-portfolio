import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Target, TrendingUp, BarChart, Smartphone, Layers } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-accent/20 blur-[120px] rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-brand-secondary/20 blur-[120px] rounded-full animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">
              Fractional CMO for Global Academies
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black font-display tracking-tight leading-[1.1] mb-8">
            I Don’t Run Ads—I Build Systems That <br />
            <span className="text-gradient">Bring Customers Every Week.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Full-stack ads, funnels, automation, and CRM systems designed to drive growth and eliminate lead wastage.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full md:w-auto bg-brand-accent text-white px-10 py-5 rounded-full text-lg font-black tracking-wide hover:bg-blue-600 transition-all flex items-center justify-center gap-3"
            >
              Book a Strategy Call <ArrowRight size={20} />
            </Link>

            <Link
              to="/case-studies"
              className="w-full md:w-auto glass-card text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center"
            >
              View Case Studies
            </Link>
          </div>

          {/* Social Proof Placeholder */}
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-2xl font-black font-display tracking-widest italic">AURA</div>
             <div className="text-2xl font-black font-display tracking-widest italic">LAKME</div>
             <div className="text-2xl font-black font-display tracking-widest italic">AURANE</div>
             <div className="text-2xl font-black font-display tracking-widest italic">GLOBAL</div>
          </div>
        </div>
      </section>

      {/* Core Specialties */}
      <section className="py-32 px-6 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h3 className="text-brand-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">
                What I Build
              </h3>
              <h2 className="text-4xl md:text-6xl font-black font-display">
                Full-Stack Growth <br /> Infrastructure.
              </h2>
            </div>
            <p className="text-gray-400 max-w-md pb-2">
              Systems that generate leads, qualify them, follow up automatically, and increase admissions with zero daily client involvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-3xl group hover:border-brand-accent/50 transition-all">
              <div className="p-4 bg-brand-accent/10 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                <Target className="text-brand-accent" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Meta Ads Engine</h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                End-to-end Meta acquisition system engineered for predictable, low-cost student leads.
              </p>
              <ul className="space-y-3 text-sm font-medium text-gray-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> TOF–MOF–BOF Funnel Ads</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> Lead Quality Optimization</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> Scaling Protocols</li>
              </ul>
            </div>

            <div className="glass-card p-10 rounded-3xl group hover:border-brand-secondary/50 transition-all">
              <div className="p-4 bg-brand-secondary/10 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                <Layers className="text-brand-secondary" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Funnel & Automation</h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                Landing pages, WhatsApp automation, and CRM workflows designed to convert inquiries into admissions.
              </p>
              <ul className="space-y-3 text-sm font-medium text-gray-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></div> High-Trust Landing Pages</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></div> WhatsApp Follow-Up Flows</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></div> Lead Routing + Tracking</li>
              </ul>
            </div>

            <div className="glass-card p-10 rounded-3xl group hover:border-white/30 transition-all">
              <div className="p-4 bg-white/5 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                <Smartphone className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Creative & UGC Systems</h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                Direct-response UGC, reels, and creative direction built for teaching and beauty industries.
              </p>
              <ul className="space-y-3 text-sm font-medium text-gray-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Classroom + Transformation Creatives</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Testimonial Videos</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Offer-Based Reels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-brand-accent to-brand-secondary p-12 md:p-24 rounded-[3rem]">
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-4xl md:text-7xl font-black font-display mb-8 text-white leading-tight">
                Need predictable <br />student admissions?
              </h2>
              <div className="flex flex-col md:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-white text-brand-dark px-12 py-5 rounded-full text-xl font-black hover:scale-105 transition-transform flex items-center justify-center gap-3"
                >
                  Book a Strategy Call <ArrowRight size={24} />
                </Link>

                <div className="flex -space-x-4 items-center justify-center md:justify-start">
                  {[1,2,3,4].map(i => (
                    <img
                      key={i}
                      src={`https://picsum.photos/100/100?random=${i}`}
                      className="w-12 h-12 rounded-full border-2 border-brand-accent"
                      alt="client"
                    />
                  ))}
                  <div className="ml-8 text-white font-bold">
                    Trusted by academies worldwide
                  </div>
                </div>
              </div>
            </div>

            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <Zap size={400} className="text-white absolute -right-20 -top-20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;