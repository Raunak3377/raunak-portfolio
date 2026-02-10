import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MessageSquare, ArrowRight, Instagram, Linkedin, Globe, Zap, BarChart3, Target, Film, Layers, User } from 'lucide-react';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import CreativeGallery from './pages/CreativeGallery';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';

const WhatsAppFloatingCTA = () => {
  return (
    <a 
      href="https://wa.me/917766828618" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] group flex items-center gap-3"
      aria-label="Contact on WhatsApp"
    >
      <div className="hidden md:block bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
        Chat with Raunak
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] blur-xl opacity-40 group-hover:opacity-80 transition-opacity animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-[#25D366] to-[#128C7E] p-4 rounded-full shadow-2xl text-white transform transition-transform group-hover:scale-110 group-active:scale-95">
          <MessageSquare size={28} fill="currentColor" stroke="none" />
        </div>
      </div>
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: <Globe size={18} /> },
    { name: 'Services', path: '/services', icon: <Zap size={18} /> },
    { name: 'Case Studies', path: '/case-studies', icon: <Target size={18} /> },
    { name: 'Gallery', path: '/gallery', icon: <Film size={18} /> },
    { name: 'Results', path: '/results', icon: <BarChart3 size={18} /> },
    { name: 'About', path: '/about', icon: <User size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white font-display">
          RAUNAK<span className="text-brand-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`text-sm font-medium hover:text-brand-accent transition-colors ${location.pathname === item.path ? 'text-brand-accent' : 'text-gray-400'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-brand-accent hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            onClick={() => setIsOpen(false)}
            className="text-3xl font-black font-display text-white hover:text-brand-accent flex items-center gap-4"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
        <Link 
          to="/contact" 
          onClick={() => setIsOpen(false)}
          className="bg-brand-accent text-white px-10 py-4 rounded-full text-lg font-bold"
        >
          Contact Now
        </Link>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black font-display mb-6">RAUNAK<span className="text-brand-accent">.</span></h2>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
            Scalable digital growth solutions for the next generation of global industry leaders.
          </p>
          <div className="flex space-x-4">
            <a href="https://wa.me/917766828618" target="_blank" className="p-3 glass-card rounded-full hover:bg-brand-accent transition-colors"><MessageSquare size={20} /></a>
            <a href="https://www.instagram.com/raunak4_/" className="p-3 glass-card rounded-full hover:bg-brand-accent transition-colors"><Instagram size={20} /></a>
            <a href="https://www.linkedin.com/in/raunak-kumar77/" className="p-3 glass-card rounded-full hover:bg-brand-accent transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Creative Gallery</Link></li>
            <li><Link to="/results" className="hover:text-white transition-colors">Performance Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Raunak Portfolio. All Rights Reserved.</p>
        <p>Built with Precision & High-Growth Strategy.</p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 md:pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/gallery" element={<CreativeGallery />} />
            <Route path="/results" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloatingCTA />
      </div>
    </HashRouter>
  );
};

export default App;
