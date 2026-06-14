import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 group"
      aria-label="Scroll down"
    >
      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-dark/60 group-hover:text-brand-dark transition-colors">
        Scroll
      </span>
      <div className="relative flex h-10 w-6 items-start justify-center rounded-full border border-brand-dark/30 p-1">
        <motion.span
          animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-2 w-1 rounded-full bg-gradient-to-b from-brand-purple to-brand-pink"
        />
      </div>
    </motion.a>
  );
};

export default ScrollIndicator;
