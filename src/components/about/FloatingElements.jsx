import { motion } from "framer-motion";

const Sparkle = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0l1.8 8.2L22 10l-8.2 1.8L12 20l-1.8-8.2L2 10l8.2-1.8z" />
  </svg>
);

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* soft cream-tinted backdrop with subtle radials */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 35% at 10% 12%, rgba(127,90,240,0.18) 0%, transparent 60%), radial-gradient(35% 35% at 92% 18%, rgba(255,77,141,0.18) 0%, transparent 60%), radial-gradient(40% 35% at 80% 88%, rgba(255,159,67,0.18) 0%, transparent 60%)",
        }}
      />

      {/* gradient blobs */}
      <motion.div
        aria-hidden
        className="absolute top-[8%] -left-32 h-80 w-80 rounded-full bg-brand-purple/40 blur-3xl"
        animate={{ x: [0, 30, -10, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-[45%] -right-28 h-72 w-72 rounded-full bg-brand-pink/40 blur-3xl"
        animate={{ x: [0, -25, 15, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[5%] left-1/3 h-72 w-72 rounded-full bg-brand-orange/35 blur-3xl"
        animate={{ x: [0, 35, -20, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* sparkles scattered */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-[14%] left-[18%] text-brand-purple"
      >
        <Sparkle size={18} />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}
        className="absolute top-[22%] right-[12%] text-brand-pink"
      >
        <Sparkle size={14} />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.4, repeat: Infinity, delay: 1.2 }}
        className="absolute top-[55%] left-[8%] text-brand-orange"
      >
        <Sparkle size={16} />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.8, repeat: Infinity, delay: 0.8 }}
        className="absolute bottom-[18%] right-[20%] text-brand-purple"
      >
        <Sparkle size={20} />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.2, repeat: Infinity, delay: 1.6 }}
        className="absolute bottom-[8%] left-[42%] text-brand-pink"
      >
        <Sparkle size={12} />
      </motion.div>

      {/* doodle squiggles */}
      <motion.svg
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-[36%] left-[6%] text-brand-purple/50"
        width="64"
        height="22"
        viewBox="0 0 56 20"
        fill="none"
      >
        <path
          d="M2 14 C 10 4, 18 4, 28 14 S 46 4, 54 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </motion.svg>
      <motion.svg
        animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute top-[70%] right-[8%] text-brand-orange/60"
        width="56"
        height="20"
        viewBox="0 0 56 20"
        fill="none"
      >
        <path
          d="M2 14 C 10 4, 18 4, 28 14 S 46 4, 54 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* dot grid bottom-left */}
      <div
        aria-hidden
        className="absolute bottom-12 left-6 h-32 w-32 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7F5AF0 1px, transparent 1.2px)",
          backgroundSize: "14px 14px",
          maskImage: "radial-gradient(circle, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 30%, transparent 75%)",
        }}
      />

      {/* small floating UI shape — top right */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute top-[28%] right-[6%] h-16 w-16 rounded-full opacity-80"
        style={{
          background:
            "conic-gradient(from 0deg, #7F5AF0, #FF4D8D, #FF9F43, #7F5AF0)",
          maskImage:
            "radial-gradient(circle, transparent 55%, black 56%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 55%, black 56%, black 100%)",
        }}
      />
    </div>
  );
};

export default FloatingElements;
