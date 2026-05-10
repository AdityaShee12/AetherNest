import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, Bot, X } from 'lucide-react';
import { GlowButton } from './components/ui';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import FeaturedProperties from './sections/FeaturedProperties';
import InvestmentSection from './sections/InvestmentSection';
import SmartHomeSection from './sections/SmartHomeSection';
import LuxuryAgents from './sections/LuxuryAgents';
import PropertyCategories from './sections/PropertyCategories';
import Testimonials from './sections/Testimonials';
import ContactSection from './sections/ContactSection';

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      
      <main>
        <Hero id="home" />
        <PropertyCategories id="categories" />
        <FeaturedProperties id="properties" />
        <InvestmentSection id="investment" />
        <SmartHomeSection id="smart-home" />
        <LuxuryAgents id="agents" />
        <Testimonials id="testimonials" />
        <ContactSection id="contact" />
      </main>

      <Footer />

      {/* Floating Actions */}
      <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-6">
        {/* Chatbot Toggle */}
        <div className="relative">
          <AnimatePresence>
            {isChatOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="absolute bottom-24 right-0 w-80 glass-dark-premium rounded-[2.5rem] p-8 border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-neon-purple/20 flex items-center justify-center text-neon-purple shadow-[0_0_15px_rgba(188,19,254,0.2)]">
                      <Bot size={20} />
                    </div>
                    <div>
                      <span className="font-black text-[10px] uppercase tracking-widest block">Neural Assistant</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                        <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em]">Aether-AI v1.2</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setIsChatOpen(false)} className="text-white/20 hover:text-white transition-colors"><X size={20} /></button>
                </div>
                <div className="space-y-6 h-[250px] overflow-y-auto mb-8 pr-2 custom-scrollbar">
                  <div className="bg-white/5 p-5 rounded-[1.5rem] rounded-tl-none text-[11px] font-medium text-white/60 leading-relaxed uppercase tracking-wider">
                    TRANSMISSION RECEIVED. INITIALIZING PROPERTY ADVISORY PROTOCOLS. HOW MAY I ASSIST YOUR ACQUISITION?
                  </div>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="ENTER QUERY..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-[10px] font-black tracking-widest focus:outline-none focus:border-neon-purple/50 placeholder:text-white/10 transition-all uppercase"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <GlowButton 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-16 h-16 rounded-2xl p-0 flex items-center justify-center bg-space-black border border-white/5 shadow-2xl hover:scale-110 transition-transform"
          >
            {isChatOpen ? <X size={24} /> : <Bot size={24} className="text-neon-purple" />}
          </GlowButton>
        </div>

        {/* WhatsApp/Direct Link */}
        <GlowButton className="w-16 h-16 rounded-2xl p-0 flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 shadow-none hover:scale-110 transition-transform">
          <MessageCircle size={24} className="text-neon-cyan" />
        </GlowButton>

        {/* Scroll Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-16 h-16 rounded-2xl glass-premium border-white/5 flex items-center justify-center hover:bg-white/10 transition-all shadow-2xl hover:scale-110"
            >
              <ArrowUp size={24} className="text-white/40" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Background blobs for depth */}
      <div className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-purple/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-cyan/5 rounded-full blur-[150px] animate-pulse" />
      </div>
    </div>
  );
};

export default App;
