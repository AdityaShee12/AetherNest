import { motion } from 'framer-motion';
import { Home, Building2, Palmtree, Hotel, Factory, Tent, Warehouse, Building } from 'lucide-react';
import { GlassCard } from '../components/ui';

const categories = [
  { name: "Apartments", icon: Building2, count: "120+", color: "text-blue-400" },
  { name: "Villas", icon: Home, count: "85+", color: "text-neon-purple" },
  { name: "Smart Homes", icon: Building, count: "45+", color: "text-neon-cyan" },
  { name: "Commercial", icon: Hotel, count: "30+", color: "text-gold" },
  { name: "Penthouses", icon: Building2, count: "15+", color: "text-pink-500" },
  { name: "Beach Houses", icon: Palmtree, count: "25+", color: "text-teal-400" },
  { name: "Farmhouses", icon: Tent, count: "12+", color: "text-orange-400" },
  { name: "Office Spaces", icon: Warehouse, count: "50+", color: "text-indigo-400" },
];

const PropertyCategories = ({ id }) => {
  return (
    <section id={id} className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-neon-cyan font-black tracking-[0.4em] text-[10px] uppercase mb-6 block"
          >
            SYSTEM ARCHITECTURE
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black font-manrope tracking-tight mb-6">
            Asset <span className="text-gradient-cyan">Taxonomy</span>
          </h2>
          <p className="text-white/30 text-sm font-medium uppercase tracking-widest">Multi-dimensional property classification for elite portfolios.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <GlassCard className="group flex flex-col items-center text-center p-10 hover:bg-white/[0.08] border-white/5 cursor-pointer relative overflow-hidden !rounded-[2.5rem]">
                <div className={`w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:cyan-glow transition-all duration-500 ${cat.color} relative z-10`}>
                  <cat.icon size={36} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-black font-manrope mb-2 tracking-tight relative z-10">{cat.name}</h3>
                <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em] relative z-10">{cat.count} Nodes</span>
                
                {/* Background decorative element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-neon-cyan/10 transition-colors" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
