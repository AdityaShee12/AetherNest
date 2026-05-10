import { motion } from 'framer-motion';
import { MessageCircle, Phone, Star, Camera, UserPlus, Share2 } from 'lucide-react';
import { GlassCard, GlowButton } from '../components/ui';

const agents = [
  {
    name: "Alexander Sterling",
    role: "Senior Partner - Dubai",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
    experience: "15+ Years",
    properties: "450+ Sold",
    rating: 4.9,
    bio: "Specializing in ultra-high-net-worth real estate acquisitions across the GCC region."
  },
  {
    name: "Sophia Valentine",
    role: "Global Listings Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
    experience: "10+ Years",
    properties: "320+ Sold",
    rating: 5.0,
    bio: "Exquisite taste and an unparalleled network of international luxury buyers."
  },
  {
    name: "Marcus Chen",
    role: "Investment Strategist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop",
    experience: "12+ Years",
    properties: "580+ Sold",
    rating: 4.8,
    bio: "Expert in identifying high-yield residential and commercial property opportunities."
  }
];

const LuxuryAgents = ({ id }) => {
  return (
    <section id={id} className="py-32 bg-space-black/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(188,19,254,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-gold font-black tracking-[0.5em] text-[10px] uppercase mb-6 block">The Cognitive Network</span>
            <h2 className="text-5xl md:text-7xl font-black font-manrope tracking-tight">
              Elite <span className="text-gradient-cyan">Advisors</span>
            </h2>
          </div>
          <GlowButton variant="outline" className="text-[10px] border-white/5 hover:border-white/20 px-10 py-5">EXPAND NETWORK</GlowButton>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <GlassCard variant="dark" className="group p-0 overflow-hidden border-white/5 h-full flex flex-col !rounded-[2.5rem]">
                <div className="relative h-[28rem] overflow-hidden">
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-80" />
                  
                  {/* Social Links */}
                  <div className="absolute top-8 right-8 flex flex-col gap-4 transform translate-x-16 group-hover:translate-x-0 transition-transform duration-700">
                    <button className="w-12 h-12 rounded-2xl glass-premium flex items-center justify-center hover:bg-neon-purple transition-all">
                      <Camera size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-2xl glass-premium flex items-center justify-center hover:bg-neon-purple transition-all">
                      <UserPlus size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-2xl glass-premium flex items-center justify-center hover:bg-neon-purple transition-all">
                      <Share2 size={20} />
                    </button>
                  </div>

                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl font-black font-manrope mb-1 tracking-tight">{agent.name}</h3>
                    <p className="text-neon-cyan text-xs font-black tracking-widest uppercase">{agent.role}</p>
                  </div>
                </div>

                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                      <Star size={14} className="fill-gold text-gold" />
                      <span className="text-xs font-black tracking-tighter">{agent.rating} RATING</span>
                    </div>
                  </div>

                  <p className="text-white/40 text-sm mb-10 flex-1 italic leading-relaxed font-medium">
                    "{agent.bio}"
                  </p>

                  <div className="grid grid-cols-2 gap-8 mb-10 border-t border-white/5 pt-8">
                    <div>
                      <div className="text-[8px] text-white/20 font-black uppercase tracking-[0.3em] mb-2">Service Era</div>
                      <div className="text-xl font-black tracking-tight">{agent.experience}</div>
                    </div>
                    <div>
                      <div className="text-[8px] text-white/20 font-black uppercase tracking-[0.3em] mb-2">Node Success</div>
                      <div className="text-xl font-black tracking-tight">98%</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <GlowButton className="flex-1 py-4 px-0 bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white shadow-none text-[10px]">
                      <MessageCircle size={18} /> NEURAL CHAT
                    </GlowButton>
                    <GlowButton variant="outline" className="flex-1 py-4 px-0 border-white/10 text-[10px] hover:border-neon-cyan/50">
                      <Phone size={18} /> TRANSMIT
                    </GlowButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryAgents;
