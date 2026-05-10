import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Search, Globe } from 'lucide-react';
import { GlowButton } from './ui';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'categories', 'properties', 'agents', 'testimonials', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Categories', href: '#categories', id: 'categories' },
    { name: 'Properties', href: '#properties', id: 'properties' },
    { name: 'Agents', href: '#agents', id: 'agents' },
    { name: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleMobileLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Wait for menu animation to close
    }
  };

  const handleDashboardClick = () => {
    alert("Dashboard is coming soon to the elite members!");
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
          isScrolled ? 'bg-midnight/60 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-2xl flex items-center justify-center neon-glow group-hover:scale-110 transition-transform duration-500 relative">
              <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-2xl font-black text-white italic relative z-10">A</span>
            </div>
            <div className="flex flex-col -gap-1">
              <span className="text-2xl font-black tracking-[0.2em] font-manrope bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">AETHERNEST</span>
              <span className="text-[8px] font-bold tracking-[0.5em] text-neon-cyan uppercase">Premium Ecosystem</span>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`transition-all font-bold text-xs uppercase tracking-[0.2em] relative py-2 ${
                  activeSection === link.id ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple to-neon-cyan cyan-glow"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-white/40 hover:text-neon-cyan transition-colors"
            >
              <Search size={22} />
            </button>
            <div className="w-[1px] h-6 bg-white/10 mx-2" />
            <button onClick={handleDashboardClick} className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              Dashboard
            </button>
            <GlowButton className="px-8 py-3.5 text-xs">
              <User size={16} />
              Sign In
            </GlowButton>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-midnight/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className={`text-lg font-medium transition-colors ${
                      activeSection === link.id ? 'text-neon-cyan' : 'text-white/60 hover:text-white'
                    }`}
                    onClick={(e) => handleMobileLinkClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-[1px] bg-white/10 my-2" />
                <div className="flex gap-4">
                  <GlowButton onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }} className="flex-1 py-3">
                    <Search size={18} />
                  </GlowButton>
                  <GlowButton onClick={handleDashboardClick} variant="outline" className="flex-1 py-3">
                    Dashboard
                  </GlowButton>
                </div>
                <GlowButton className="w-full">Sign In</GlowButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
