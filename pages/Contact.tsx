import React, { useState } from 'react';
import { Send, MessageSquare, Mail, MapPin, Phone, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    spend: 'Below $5,000',
    goal: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the professional WhatsApp message
    const message = `Hi Raunak! 🚀%0A%0AI'm reaching out from your portfolio. Here are my project details:%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📧 *Email:* ${formData.email}%0A` +
      `💰 *Monthly Ad Spend:* ${formData.spend}%0A` +
      `🎯 *Primary Goal:* ${formData.goal}%0A%0A` +
      `Let's discuss how we can scale this!`;

    const whatsappUrl = `https://wa.me/917766828618?text=${message}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-6xl md:text-8xl font-black font-display mb-8">Let's Build <br /><span className="text-gradient">Something Big.</span></h1>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
              Whether you're looking to scale from $1M to $10M or just starting your journey, let's talk numbers.
            </p>

            <div className="space-y-8 mb-16">
              <a href="mailto:raunak8820@gmail.com" className="flex items-start gap-6 group">
                <div className="p-4 glass-card rounded-2xl group-hover:bg-brand-accent transition-colors">
                  <Mail className="text-white" />
                </div>
                <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">Email Me</h4>
                  <p className="text-xl font-bold text-white">raunak8820@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/917766828618" target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group">
                <div className="p-4 glass-card rounded-2xl group-hover:bg-[#25D366] transition-colors">
                  <MessageSquare className="text-white" />
                </div>
                <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-1">WhatsApp Fast-Track</h4>
                  <p className="text-xl font-bold text-white">+91 77668 28618</p>
                </div>
              </a>

              <div className="flex gap-4">
                <a href="https://www.instagram.com/raunak4_/" className="p-4 glass-card rounded-2xl hover:text-brand-accent transition-all"><Instagram /></a>
                <a href="https://www.linkedin.com/in/raunak-kumar77/" className="p-4 glass-card rounded-2xl hover:text-brand-accent transition-all"><Linkedin /></a>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="p-4 glass-card rounded-2xl hover:text-brand-accent transition-all"><Twitter /></a>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] border-white/5 relative">
            <h2 className="text-3xl font-black mb-8">Brief Me</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-accent outline-none transition-all text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400">Work Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-accent outline-none transition-all text-white" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400">Current Monthly Ad Spend</label>
                <select 
                  name="spend"
                  value={formData.spend}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-accent outline-none transition-all appearance-none text-white"
                >
                  <option className="bg-brand-dark" value="Below $5,000">Below $5,000</option>
                  <option className="bg-brand-dark" value="$5,000 - $20,000">$5,000 - $20,000</option>
                  <option className="bg-brand-dark" value="$20,000 - $100,000">$20,000 - $100,000</option>
                  <option className="bg-brand-dark" value="$100,000+">$100,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400">What is your primary goal?</label>
                <textarea 
                  name="goal"
                  required
                  rows={4} 
                  value={formData.goal}
                  onChange={handleInputChange}
                  placeholder="Describe your growth bottlenecks..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-accent outline-none transition-all text-white"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-full text-lg font-black tracking-wide transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20"
              >
                Submit via WhatsApp <MessageSquare size={20} fill="currentColor" stroke="none" />
              </button>
              
              <p className="text-center text-xs text-gray-500 font-medium">
                I typically respond within 24 hours on WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
