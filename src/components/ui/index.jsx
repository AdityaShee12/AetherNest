import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const GlassCard = ({ children, className, hover = true, variant = 'light' }) => {
  const variants = {
    light: "glass-premium",
    dark: "glass-dark-premium",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -10, scale: 1.01 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        variants[variant],
        "rounded-[2.5rem] p-8 transition-all duration-500 relative group overflow-hidden",
        className
      )}
    >
      {/* Subtle glow effect on hover */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      {children}
    </motion.div>
  );
};

export const GlowButton = ({ children, className, variant = 'primary', ...props }) => {
  const variants = {
    primary: "bg-gradient-to-r from-neon-purple to-neon-cyan text-white neon-glow hover:shadow-[0_0_30px_rgba(188,19,254,0.6)]",
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
    outline: "border border-white/20 hover:bg-white/5 text-white hover:border-neon-cyan/50",
    cyan: "bg-neon-cyan text-black font-bold cyan-glow hover:scale-105 active:scale-95",
    gold: "bg-gradient-to-r from-gold to-gold-light text-black font-bold hover:scale-105 active:scale-95 shadow-lg shadow-gold/20",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-10 py-5 rounded-2xl font-bold transition-all duration-500 flex items-center justify-center gap-3 text-sm tracking-widest uppercase",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
