import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, PieChart, BarChart3, ArrowUpRight, Zap } from 'lucide-react';
import { GlassCard, GlowButton } from '../components/ui';

const data = [
  { name: '2020', value: 4000 },
  { name: '2021', value: 5500 },
  { name: '2022', value: 4800 },
  { name: '2023', value: 7000 },
  { name: '2024', value: 8500 },
  { name: '2025', value: 12000 },
];

const InvestmentSection = ({ id }) => {
  return (
    <section id={id} className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-neon-purple/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Side: Chart UI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <GlassCard variant="dark" className="p-10 border-white/5 overflow-hidden !rounded-[3rem]">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h3 className="text-3xl font-black font-manrope tracking-tight">Market Pulse</h3>
                  <p className="text-white/30 text-xs font-black uppercase tracking-widest mt-2">Neural Appreciation Index v4.0</p>
                </div>
                <div className="px-6 py-2 rounded-full bg-neon-cyan/5 border border-neon-cyan/20 text-neon-cyan text-[10px] font-black tracking-widest uppercase cyan-glow">
                  +32.8% PROJECTION
                </div>
              </div>

              <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#00f2ff" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff03" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="#ffffff10" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false} 
                      tick={{ fontWeight: 'black', letterSpacing: '0.2em' }}
                    />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#020205', border: '1px solid #ffffff05', borderRadius: '24px', padding: '20px' }}
                      itemStyle={{ color: '#00f2ff', fontWeight: 'black' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#00f2ff" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { label: "Alpha ROI", val: "22.4%" },
                  { label: "Net Yield", val: "9.1%" },
                  { label: "Stability", val: "98/100" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.05] transition-all">
                    <div className="text-white/20 text-[8px] font-black uppercase tracking-[0.3em] mb-2">{stat.label}</div>
                    <div className="text-2xl font-black tracking-tighter group-hover:text-neon-cyan transition-colors">{stat.val}</div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -15, 0], rotateZ: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 z-30"
            >
              <GlassCard className="p-6 border-neon-purple/30 group">
                <Zap size={28} className="text-neon-purple mb-3 group-hover:scale-125 transition-transform" />
                <div className="text-[10px] font-black uppercase tracking-widest mb-1">AETHER-AI</div>
                <div className="text-[8px] text-white/30 font-black uppercase tracking-[0.2em]">Neural Predictor</div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-neon-purple font-black tracking-[0.5em] text-[10px] uppercase mb-6 block">Wealth Engineering</span>
            <h2 className="text-5xl md:text-7xl font-black font-manrope tracking-tight mb-10 leading-[0.95]">
              Algorithmic <br />
              <span className="text-gradient-cyan">Prosperity</span>
            </h2>
            <p className="text-xl text-white/30 mb-12 leading-relaxed font-medium">
              Our proprietary neural network analyzes petabytes of global market data to isolate high-yield property nodes with surgical precision.
            </p>

            <div className="space-y-8 mb-16">
              {[
                { title: "Predictive Nodes", desc: "Isolate market anomalies before they manifest.", icon: TrendingUp, color: "text-neon-purple" },
                { title: "Yield Optimization", desc: "AI-driven dynamic rental valuation protocols.", icon: BarChart3, color: "text-neon-cyan" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-[2rem] hover:bg-white/[0.03] transition-all border border-transparent hover:border-white/5 group">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 transition-all`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black tracking-tight uppercase mb-1">{item.title}</h4>
                    <p className="text-white/30 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <GlowButton className="gap-4 px-12 py-6 text-sm">
              INITIALIZE PORTFOLIO <ArrowUpRight size={20} />
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
