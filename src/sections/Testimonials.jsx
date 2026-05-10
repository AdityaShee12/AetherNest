import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../components/ui';

const testimonials = [
  {
    name: "Jonathan Wick",
    role: "Tech Entrepreneur",
    content: "The futuristic design and seamless experience of AetherNest made finding my Dubai penthouse an absolute pleasure. Truly world-class.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "International Investor",
    content: "Their AI-driven market analytics gave me the confidence to expand my luxury portfolio. The ROI has exceeded all my expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop"
  }
];

const Testimonials = ({ id }) => {
  return (
    <section id={id} className="py-32 bg-midnight relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,242,255,0.05),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-20 items-center">
          <div className="lg:col-span-1">
            <span className="text-neon-purple font-black tracking-[0.5em] text-[10px] uppercase mb-6 block">Universal Validation</span>
            <h2 className="text-5xl md:text-6xl font-black font-manrope tracking-tight mb-8">
              Elite <br />
              <span className="text-gradient-cyan">Consensus</span>
            </h2>
            <div className="flex items-center gap-6 text-white/30 italic">
              <Quote size={48} className="text-neon-purple/20" />
              <p className="text-sm font-medium leading-relaxed">Trusted by the global elite and high-performance investors across the metaverse.</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <GlassCard variant="dark" className="h-full border-white/5 bg-space-black/40 relative !rounded-[2.5rem] p-10">
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-neon-cyan text-neon-cyan cyan-glow" />
                    ))}
                  </div>
                  <p className="text-lg text-white/70 mb-10 leading-relaxed font-medium">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl object-cover grayscale brightness-110" />
                    <div>
                      <div className="font-black text-sm flex items-center gap-2 tracking-tight uppercase">
                        {t.name}
                        <CheckCircle2 size={16} className="text-neon-cyan" />
                      </div>
                      <div className="text-[10px] text-white/30 font-black uppercase tracking-widest mt-1">{t.role}</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
