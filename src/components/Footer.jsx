import { motion } from 'framer-motion';
import { Camera, Share2, UserPlus, PlayCircle, Apple, Play } from 'lucide-react';
import { GlowButton } from './ui';

const Footer = () => {
  return (
    <footer className="bg-midnight pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-neon-purple/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-2xl flex items-center justify-center neon-glow">
                <span className="text-2xl font-black text-white italic">A</span>
              </div>
              <div className="flex flex-col -gap-1">
                <span className="text-2xl font-black tracking-[0.2em] font-manrope">AETHERNEST</span>
                <span className="text-[8px] font-bold tracking-[0.5em] text-neon-cyan uppercase">Premium Ecosystem</span>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed font-medium">
              Revolutionizing the real estate paradigm through algorithmic excellence and predictive luxury living strategies.
            </p>
            <div className="flex gap-4">
              {[Camera, Share2, UserPlus, PlayCircle].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-2xl glass-premium border-white/5 flex items-center justify-center hover:bg-neon-purple/20 hover:border-neon-purple/40 transition-all group">
                  <Icon size={18} className="text-white/40 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-white/50">Asset Classes</h4>
            <ul className="space-y-5 text-white/30 text-xs font-bold tracking-widest uppercase">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Sky Villas</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Urban Penthouses</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Smart Ecosystems</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Submerged Assets</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Off-Market Nodes</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-white/50">Universe</h4>
            <ul className="space-y-5 text-white/30 text-xs font-bold tracking-widest uppercase">
              <li><a href="#" className="hover:text-neon-purple transition-colors">The Vision</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Advisor Network</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">ROI Analytics</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Global Nodes</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Legal Framework</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-white/50">Pulse</h4>
            <p className="text-white/30 text-xs font-medium mb-8 leading-relaxed uppercase tracking-widest">Connect to our neural network for exclusive off-market opportunities.</p>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="NEURAL IDENTIFIER" 
                className="bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-[10px] font-black tracking-widest focus:outline-none focus:border-neon-purple/50 transition-all placeholder:text-white/10"
              />
              <GlowButton className="w-full py-5 text-[10px]">Initialize Subscription</GlowButton>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
          <p className="text-white/10 text-[10px] font-black tracking-[0.4em] uppercase">
            © 2026 AETHERNEST ECOSYSTEM. ENCRYPTED ASSETS.
          </p>
          
          <div className="flex gap-6">
            <button className="flex items-center gap-4 glass-premium px-8 py-4 rounded-2xl hover:bg-white/10 transition-all border-white/5 group">
              <Apple size={24} className="text-white/40 group-hover:text-white" />
              <div className="text-left">
                <div className="text-[8px] text-white/20 font-black uppercase tracking-widest">Download Node</div>
                <div className="text-sm font-black tracking-tight">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-4 glass-premium px-8 py-4 rounded-2xl hover:bg-white/10 transition-all border-white/5 group">
              <Play size={24} className="text-white/40 group-hover:text-white" />
              <div className="text-left">
                <div className="text-[8px] text-white/20 font-black uppercase tracking-widest">Acquire Node</div>
                <div className="text-sm font-black tracking-tight">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
