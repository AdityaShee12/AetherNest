import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { GlassCard, GlowButton } from '../components/ui';

const ContactSection = ({ id }) => {
  return (
    <section id={id} className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-neon-cyan font-black tracking-[0.5em] text-[10px] uppercase mb-6 block">Direct Transmission</span>
            <h2 className="text-5xl md:text-7xl font-black font-manrope tracking-tight mb-10 leading-tight">
              Initialize <br />
              <span className="text-gradient-cyan">Connection</span>
            </h2>
            <p className="text-xl text-white/30 mb-12 leading-relaxed font-medium">
              Our advisors are standing by for neural link initialization. Connect with the elite AetherNest network.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 items-center group">
                <div className="w-16 h-16 rounded-2xl glass-premium flex items-center justify-center text-neon-purple group-hover:neon-glow transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em] mb-1">Global Transceiver</div>
                  <div className="text-xl font-black tracking-tight group-hover:text-neon-purple transition-colors">+1 (800) AETHER-NODE</div>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-16 h-16 rounded-2xl glass-premium flex items-center justify-center text-neon-cyan group-hover:cyan-glow transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em] mb-1">Encrypted Channel</div>
                  <div className="text-xl font-black tracking-tight group-hover:text-neon-cyan transition-colors">SECURE@AETHERNEST.ECO</div>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-16 h-16 rounded-2xl glass-premium flex items-center justify-center text-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em] mb-1">Physical Node</div>
                  <div className="text-xl font-black tracking-tight group-hover:text-gold transition-colors">Sky-Platform 01, Dubai Horizon</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard variant="dark" className="p-12 border-white/5 bg-space-black/60 relative overflow-hidden !rounded-[3rem]">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-purple/5 blur-[100px] rounded-full" />
              
              <form className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 ml-2">Identity</label>
                    <input 
                      type="text" 
                      placeholder="FULL NAME" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-xs font-bold tracking-widest focus:outline-none focus:border-neon-purple/50 focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 ml-2">Neural Addr</label>
                    <input 
                      type="email" 
                      placeholder="EMAIL ADDRESS" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-xs font-bold tracking-widest focus:outline-none focus:border-neon-purple/50 focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 ml-2">Vector</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-xs font-bold tracking-widest focus:outline-none focus:border-neon-purple/50 appearance-none cursor-pointer">
                    <option className="bg-midnight">ASSET ACQUISITION</option>
                    <option className="bg-midnight">INVESTMENT PROTOCOL</option>
                    <option className="bg-midnight">STRATEGIC ALLIANCE</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 ml-2">Transmission</label>
                  <textarea 
                    rows={4} 
                    placeholder="DEFINE YOUR REQUIREMENTS..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-xs font-bold tracking-widest focus:outline-none focus:border-neon-purple/50 focus:bg-white/[0.08] transition-all resize-none"
                  />
                </div>

                <GlowButton className="w-full py-6 text-xs mt-4">
                  INITIALIZE TRANSMISSION <Send size={18} />
                </GlowButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
