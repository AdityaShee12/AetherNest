import { motion } from 'framer-motion';
import { Search, MapPin, Filter, Sparkles, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { GlowButton, GlassCard } from '../components/ui';

const Hero = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 scale-110">
        <img 
          src="https://images.unsplash.com/photo-1600607687940-4e5a9942d4b3?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Property" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,5,0.8)_100%)]" />
      </div>

      {/* Animated Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: Math.random() * 0.5, 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%" 
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-premium border-white/5 text-neon-cyan text-xs font-black tracking-[0.3em] mb-10"
          >
            <Sparkles size={14} className="animate-pulse" />
            AI-DRIVEN REAL ESTATE ECOSYSTEM
          </motion.div>
          
          <h1 className="text-7xl lg:text-9xl font-black font-manrope tracking-tight leading-[0.9] mb-8">
            <span className="text-white">AETHER</span><br />
            <span className="text-gradient-cyan">NEST</span>
          </h1>
          
          <p className="text-xl text-white/40 max-w-lg mb-12 leading-relaxed font-medium">
            Experience the zenith of luxury living. Our ecosystem combines elite architecture with predictive AI analytics.
          </p>

          <div className="flex flex-wrap gap-6">
            <GlowButton className="text-sm px-12 py-6">
              Explore Universe
            </GlowButton>
            <GlowButton variant="outline" className="text-sm px-12 py-6">
              Connect Advisor
            </GlowButton>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex items-center gap-10">
            {[
              { icon: ShieldCheck, text: "Secured Assets" },
              { icon: Users, text: "Elite Network" },
              { icon: TrendingUp, text: "Optimized ROI" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity cursor-default group">
                <badge.icon size={18} className="group-hover:text-neon-cyan transition-colors" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Search UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-neon-purple/20 blur-[120px] rounded-full animate-pulse-subtle" />
          
          <GlassCard variant="dark" className="p-10 border-white/10 relative z-20 overflow-visible">
            <div className="flex gap-2 mb-10 p-1 bg-white/5 rounded-2xl">
              <button className="flex-1 py-4 rounded-xl bg-white/10 text-xs font-black tracking-widest uppercase shadow-xl">Acquisition</button>
              <button className="flex-1 py-4 rounded-xl hover:bg-white/5 text-xs font-black tracking-widest uppercase text-white/30 transition-all">Residency</button>
            </div>

            <div className="space-y-6">
              <div className="relative group">
                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-neon-cyan transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="GEO-LOCATION" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-6 text-sm font-bold tracking-widest placeholder:text-white/10 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/[0.08] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select className="bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-[10px] font-black tracking-widest uppercase focus:outline-none focus:border-neon-cyan/50 appearance-none cursor-pointer">
                  <option>ASSET TYPE</option>
                  <option>VILLA</option>
                  <option>PENTHOUSE</option>
                </select>
                <select className="bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-[10px] font-black tracking-widest uppercase focus:outline-none focus:border-neon-cyan/50 appearance-none cursor-pointer">
                  <option>VALUATION</option>
                  <option>$10M - $50M</option>
                  <option>$50M+</option>
                </select>
              </div>

              <GlowButton variant="cyan" className="w-full py-6 mt-4">
                <Search size={20} />
                INITIALIZE SEARCH
              </GlowButton>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              animate={{ y: [0, -15, 0], rotateZ: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 z-30"
            >
              <GlassCard className="py-6 px-8 border-gold/40 hover:scale-110">
                <div className="text-gold text-3xl font-black font-manrope">$8.4B+</div>
                <div className="text-white/30 text-[8px] font-black uppercase tracking-[0.3em]">Market Cap</div>
              </GlassCard>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.5em]">Sequence Scroll</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-neon-cyan to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;
