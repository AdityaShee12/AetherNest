import { motion } from 'framer-motion';
import { Cpu, Lightbulb, ShieldAlert, Sun, BatteryCharging, Mic, Smartphone, Thermometer } from 'lucide-react';
import { GlassCard } from '../components/ui';

const features = [
  {
    icon: Cpu,
    title: "AI Automation",
    desc: "Self-learning home systems that adapt to your lifestyle and preferences.",
    color: "text-neon-purple"
  },
  {
    icon: Lightbulb,
    title: "Smart Lighting",
    desc: "Dynamic ambient lighting synced with your circadian rhythm.",
    color: "text-gold"
  },
  {
    icon: ShieldAlert,
    title: "Quantum Security",
    desc: "Next-gen biometric encryption and 24/7 AI-driven surveillance.",
    color: "text-neon-cyan"
  },
  {
    icon: Sun,
    title: "Solar Integration",
    desc: "Self-sustaining energy ecosystem with advanced battery storage.",
    color: "text-orange-400"
  },
  {
    icon: BatteryCharging,
    title: "EV Charging",
    desc: "Universal fast-charging docks integrated into every parking bay.",
    color: "text-green-400"
  },
  {
    icon: Mic,
    title: "Voice Control",
    desc: "Natural language processing for seamless environment control.",
    color: "text-blue-400"
  }
];

const SmartHomeSection = ({ id }) => {
  return (
    <section id={id} className="py-32 relative overflow-hidden bg-space-black/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neon-cyan/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-neon-purple font-black tracking-[0.5em] text-[10px] uppercase mb-6 block"
          >
            Neural Interface
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black font-manrope tracking-tight mb-8 leading-tight">
            Cognitive <span className="text-gradient-cyan">Living</span>
          </h2>
          <p className="text-white/30 max-w-2xl mx-auto text-sm font-medium uppercase tracking-[0.2em] leading-relaxed">
            AetherNest estates are pre-integrated with the Aether-X1 neural OS, a self-optimizing ecosystem that anticipates your every biological requirement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <GlassCard variant="dark" className="h-full group hover:bg-white/[0.08] transition-all border-white/5 !rounded-[2.5rem] p-10">
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:cyan-glow transition-all duration-500 ${feature.color}`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-black mb-4 font-manrope tracking-tight uppercase">{feature.title}</h3>
                <p className="text-white/30 text-xs font-medium leading-relaxed uppercase tracking-widest">
                  {feature.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Interactive Device Mockup */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-neon-cyan/5 blur-[120px] rounded-full" />
          <GlassCard variant="dark" className="max-w-5xl mx-auto p-0 overflow-hidden border-white/5 !rounded-[3rem] relative z-10">
            <div className="grid md:grid-cols-2">
              <div className="p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8 text-neon-cyan">
                  <Smartphone size={36} className="cyan-glow" />
                  <span className="text-3xl font-black font-manrope tracking-tight uppercase leading-tight">Universal <br /> Command</span>
                </div>
                <p className="text-white/30 mb-12 leading-relaxed font-medium uppercase tracking-widest text-xs">
                  AetherNest mobile-nodes provide a direct encrypted link to your estate's neural network. Real-time atmospheric control from any terrestrial coordinate.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 rounded-[1.5rem] bg-white/[0.03] border border-white/5 group hover:border-white/10 transition-all">
                    <div className="flex items-center gap-4">
                      <Thermometer className="text-neon-purple" size={24} />
                      <span className="text-xs font-black uppercase tracking-widest">Atmos Control</span>
                    </div>
                    <span className="text-neon-purple font-black italic text-xl">22.4°C</span>
                  </div>
                  <div className="flex items-center justify-between p-6 rounded-[1.5rem] bg-white/[0.03] border border-neon-cyan/30 group">
                    <div className="flex items-center gap-4">
                      <ShieldAlert className="text-neon-cyan cyan-glow" size={24} />
                      <span className="text-xs font-black uppercase tracking-widest">Quantum Guard</span>
                    </div>
                    <span className="text-neon-cyan font-black uppercase text-[10px] tracking-[0.3em] cyan-glow">ACTIVE</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-midnight to-space-black p-12 flex items-center justify-center min-h-[500px]">
                <motion.div 
                  animate={{ rotateY: [0, 15, 0], rotateX: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-72 h-[32rem] bg-black rounded-[3.5rem] border-[10px] border-white/5 shadow-[0_0_100px_rgba(0,242,255,0.1)] relative overflow-hidden group perspective-2000"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-b-3xl z-10" />
                  <div className="p-8 pt-16 space-y-6">
                    <div className="w-full h-40 rounded-3xl bg-gradient-to-br from-neon-purple/20 via-neon-cyan/20 to-transparent animate-pulse-subtle border border-white/5" />
                    <div className="space-y-3">
                      <div className="w-4/5 h-2 rounded-full bg-white/10" />
                      <div className="w-3/5 h-2 rounded-full bg-white/5" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-6">
                      <div className="h-20 rounded-2xl bg-white/[0.02] border border-white/5" />
                      <div className="h-20 rounded-2xl bg-white/[0.02] border border-white/5" />
                    </div>
                    <div className="w-full h-12 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default SmartHomeSection;
