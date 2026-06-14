import { motion } from "framer-motion";
import { easeOutExpo } from "../animations/variants";
import PortraitCard from "./PortraitCard";

// ---- Organic blob backdrop wrapping AROUND the photo ----
const OrganicBlob = () => (
  <motion.div
    aria-hidden
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: easeOutExpo, delay: 0.2 }}
    className="absolute -inset-8 sm:-inset-10 -z-10 pointer-events-none"
  >
    {/* Main organic blob — larger than the photo, gradient fill */}
    <motion.svg
      viewBox="0 0 400 500"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      animate={{ rotate: [0, 4, -3, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF4D8D" />
          <stop offset="50%" stopColor="#FF9F43" />
          <stop offset="100%" stopColor="#7F5AF0" />
        </linearGradient>
      </defs>
      <path
        fill="url(#blobGrad)"
        d="M200 30 C 310 20, 385 110, 380 230 C 376 330, 355 420, 270 470 C 185 510, 90 485, 45 405 C 0 320, 12 195, 55 115 C 95 45, 150 35, 200 30 Z"
        opacity="0.95"
      />
    </motion.svg>

    {/* Purple accent — top-left */}
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute -top-3 -left-6 w-28 h-28 sm:w-32 sm:h-32"
      animate={{ rotate: [0, -12, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        fill="#7F5AF0"
        d="M150 95c0 35-23 68-55 80-32 12-72 3-90-25-18-28-13-72 13-95s72-26 99-7c20 14 33 30 33 47z"
        opacity="0.85"
      />
    </motion.svg>

    {/* Pink accent — bottom-right */}
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute -bottom-4 -right-2 w-28 h-28 sm:w-32 sm:h-32"
      animate={{ rotate: [0, 10, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
    >
      <path
        fill="#FF4D8D"
        d="M170 100c0 40-25 80-65 95-40 15-85 0-100-40-15-40 5-90 50-105 45-15 95-5 110 30 5 10 5 15 5 20z"
        opacity="0.78"
      />
    </motion.svg>

    {/* Orange accent — bottom-left small */}
    <motion.div
      className="absolute bottom-4 -left-2 h-16 w-16 rounded-full bg-brand-orange/70 blur-md"
      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.85, 0.6] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
  </motion.div>
);

// ---- Decorative floating sparkles & accent shapes around the composition ----
const Sparkle = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0l1.8 8.2L22 10l-8.2 1.8L12 20l-1.8-8.2L2 10l8.2-1.8z" />
  </svg>
);

const FloatingDecor = () => (
  <>
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-4 left-8 text-brand-purple z-30"
    >
      <Sparkle size={16} />
    </motion.div>
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute top-12 -left-6 text-brand-pink z-30"
    >
      <Sparkle size={12} />
    </motion.div>
    <motion.div
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      className="absolute -bottom-4 left-1/3 text-brand-orange z-30"
    >
      <Sparkle size={14} />
    </motion.div>

    {/* small triangle play icon — bottom left */}
    <motion.div
      aria-hidden
      animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-3 left-6 z-30"
    >
      <div className="h-6 w-6 rounded-md bg-brand-purple/90 flex items-center justify-center shadow-soft">
        <span className="block h-0 w-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-white ml-0.5" />
      </div>
    </motion.div>
  </>
);

const FloatingCards = () => {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center py-2 sm:py-3 perspective-1000"
      aria-label="Prakriti Panda — creative portrait composition"
    >
      {/* anchor for portrait + its orbiting accents */}
      <div className="relative w-[15rem] sm:w-[17rem] mx-auto">
        <OrganicBlob />
        <FloatingDecor />
        <PortraitCard />
      </div>
    </div>
  );
};

export default FloatingCards;
