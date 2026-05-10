import { motion } from 'framer-motion';
import { Bed, Bath, Move, Heart, Eye, ArrowRight, MapPin, Users } from 'lucide-react';
import { GlassCard, GlowButton } from '../components/ui';

const properties = [
  {
    id: 1,
    title: "The Zenith Penthouse",
    location: "Palm Jumeirah, Dubai",
    price: "$12,500,000",
    beds: 5,
    baths: 6,
    area: "8,500 sqft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    category: "Penthouse",
    status: "Featured"
  },
  {
    id: 2,
    title: "Crystal Waters Villa",
    location: "Malibu, California",
    price: "$24,000,000",
    beds: 7,
    baths: 9,
    area: "12,000 sqft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    category: "Villa",
    status: "Trending"
  },
  {
    id: 3,
    title: "Cyberpunk Sky Mansion",
    location: "Tokyo, Japan",
    price: "$8,900,000",
    beds: 4,
    baths: 4,
    area: "5,200 sqft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    category: "Smart Home",
    status: "New"
  }
];

const PropertyCard = ({ property }) => (
  <GlassCard className="group relative overflow-hidden p-0 border-white/5 bg-space-black/40 !rounded-[2rem]">
    {/* Property Image */}
    <div className="relative h-80 overflow-hidden">
      <motion.img 
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={property.image} 
        alt={property.title} 
        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60" />
      
      <div className="absolute top-6 left-6 flex gap-3">
        <span className="px-4 py-1.5 rounded-full glass-premium border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan cyan-glow">
          {property.status}
        </span>
      </div>
      <button className="absolute top-6 right-6 p-3 rounded-full glass-premium border-white/10 text-white/40 hover:text-red-500 hover:border-red-500/30 transition-all">
        <Heart size={20} />
      </button>
      
      {/* Quick Actions Overlay */}
      <div className="absolute inset-0 bg-midnight/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 translate-y-10 group-hover:translate-y-0 backdrop-blur-sm">
        <GlowButton variant="cyan" className="p-4 rounded-full">
          <Eye size={22} />
        </GlowButton>
        <GlowButton variant="outline" className="p-4 rounded-full border-white/20">
          <Move size={22} />
        </GlowButton>
      </div>
    </div>

    {/* Details */}
    <div className="p-8 relative">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-black font-manrope mb-2 text-white group-hover:text-neon-cyan transition-colors tracking-tight">{property.title}</h3>
          <p className="text-white/30 text-xs font-bold flex items-center gap-2 uppercase tracking-widest">
            <MapPin size={12} className="text-neon-purple" /> {property.location}
          </p>
        </div>
        <div className="text-2xl font-black text-white font-manrope tracking-tighter">{property.price}</div>
      </div>

      <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/5 mb-8">
        <div className="flex flex-col items-center gap-2">
          <Bed size={20} className="text-neon-purple opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">{property.beds} Units</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Bath size={20} className="text-neon-cyan opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">{property.baths} Baths</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Move size={20} className="text-gold opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">{property.area}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center">
            <Users size={18} className="text-white/20" />
          </div>
          <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">Elite Portfolio</span>
        </div>
        <GlowButton variant="outline" className="px-6 py-3 text-[10px] border-white/10 hover:border-neon-cyan/50">
          ANALYZE <ArrowRight size={14} />
        </GlowButton>
      </div>
    </div>

    {/* Glow Border on Hover */}
    <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-neon-purple/20 transition-all pointer-events-none" />
  </GlassCard>
);

const FeaturedProperties = ({ id }) => {
  return (
    <section id={id} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-neon-purple font-black tracking-[0.4em] text-[10px] uppercase mb-6 block"
            >
              ALGORITHMIC SELECTION
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black font-manrope tracking-tight">
              Global <span className="text-gradient-cyan">Assets</span>
            </h2>
          </div>
          <p className="text-white/30 max-w-sm text-right hidden md:block text-sm font-medium leading-relaxed">
            Proprietary AI-driven sourcing of high-performance luxury properties across the global market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((prop, index) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <PropertyCard property={prop} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <GlowButton variant="outline" className="px-16 py-6 text-xs border-white/5 hover:border-white/20">
            LOAD MORE DATA
          </GlowButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
