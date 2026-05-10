import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Command, History, TrendingUp, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onClose(); // This is just for testing if open
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const recentSearches = [
    "Penthouse in Palm Jumeirah",
    "Modern Villa in Malibu",
    "Smart Homes Tokyo",
  ];

  const trendingCategories = [
    { name: "Luxury Villas", count: "124 properties" },
    { name: "Modern Penthouses", count: "85 properties" },
    { name: "Smart Living", count: "42 properties" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 md:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-navy-light/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Search Input Area */}
            <div className="p-8 border-b border-white/5 bg-white/[0.02]">
              <div className="relative flex items-center group">
                <Search className="absolute left-6 text-white/20 group-focus-within:text-neon-cyan transition-colors" size={24} />
                <input
                  autoFocus
                  type="text"
                  placeholder="GEO-SPATIAL SEARCH..."
                  className="w-full bg-transparent border-none py-6 pl-16 pr-16 text-xl text-white focus:outline-none placeholder:text-white/10 font-black tracking-[0.2em]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-6 flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[10px] text-white/20 font-black tracking-tighter">
                    <Command size={12} />
                    <span>K</span>
                  </div>
                  <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-2xl transition-colors">
                    <X size={24} className="text-white/20" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results / Suggestions */}
            <div className="p-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
              {!searchTerm ? (
                <div className="space-y-12">
                  {/* Recent Searches */}
                  <div>
                    <div className="flex items-center gap-3 text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-6 ml-2">
                      <History size={14} className="text-neon-purple" />
                      Recent Nodes
                    </div>
                    <div className="space-y-3">
                      {recentSearches.map((item, i) => (
                        <button key={i} className="w-full text-left p-5 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 flex items-center gap-6 transition-all group">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:cyan-glow transition-all">
                            <Search size={20} />
                          </div>
                          <span className="text-white/40 group-hover:text-white font-bold tracking-widest uppercase text-xs">{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Trending */}
                  <div>
                    <div className="flex items-center gap-3 text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-6 ml-2">
                      <TrendingUp size={14} className="text-neon-cyan" />
                      Asset Classes
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {trendingCategories.map((cat, i) => (
                        <button key={i} className="flex flex-col gap-2 p-6 rounded-[1.5rem] border border-white/5 hover:border-neon-purple/50 bg-white/[0.02] hover:bg-white/[0.08] transition-all text-left group">
                          <span className="font-black text-white/60 group-hover:text-white tracking-widest text-sm uppercase">{cat.name}</span>
                          <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{cat.count}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Suggested Locations */}
                  <div>
                    <div className="flex items-center gap-3 text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-6 ml-2">
                      <MapPin size={14} className="text-gold" />
                      Global Locations
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {["Dubai Marina", "Beverly Hills", "Ginza, Tokyo", "Palm Jumeirah", "Manhattan"].map((loc) => (
                        <button key={loc} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/50 text-[10px] font-black tracking-widest text-white/30 hover:text-white transition-all uppercase">
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 bg-neon-cyan/5 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Search size={32} className="text-neon-cyan/40" />
                  </div>
                  <p className="text-white/30 font-black tracking-[0.2em] text-sm uppercase">INITIALIZING SEARCH FOR "{searchTerm}"</p>
                  <p className="text-[10px] font-black text-white/10 mt-4 tracking-[0.3em] uppercase">CONNECTING TO NEURAL DATA-LAKE...</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-white/[0.02] border-t border-white/5 flex justify-between items-center text-[8px] font-black text-white/10 uppercase tracking-[0.4em]">
              <div className="flex gap-8">
                <span className="flex items-center gap-2"><kbd className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">↑↓</kbd> SEQUENCE</span>
                <span className="flex items-center gap-2"><kbd className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">↵</kbd> EXECUTE</span>
              </div>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                AETHERNEST NEURAL ENGINE
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
