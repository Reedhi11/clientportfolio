import { motion } from "framer-motion";
import { easeOutExpo } from "../animations/variants";

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  >
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const SparkleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="transition-transform duration-500 group-hover:rotate-180"
  >
    <path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8z" />
  </svg>
);

const CTAButtons = ({ onLetsTalk }) => {
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
      {/* Primary — gradient with animated glow */}
      <motion.a
        href="#projects"
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: easeOutExpo }}
        className="relative group inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3.5 text-sm sm:text-base font-semibold text-white overflow-hidden"
      >
        {/* gradient background */}
        <span className="absolute inset-0 bg-gradient-funky" />
        {/* shimmer */}
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2.5s linear infinite",
          }}
        />
        {/* outer glow */}
        <span className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-funky opacity-50 blur-xl group-hover:opacity-80 transition-opacity duration-500" />
        <span className="relative flex items-center gap-2">
          View Projects <ArrowIcon />
        </span>
      </motion.a>

      {/* Secondary — glassy outline. Opens contact modal via callback. */}
      <motion.button
        type="button"
        onClick={onLetsTalk}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: easeOutExpo }}
        className="relative group inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3.5 text-sm sm:text-base font-semibold text-brand-dark border border-brand-dark/20 bg-white/50 backdrop-blur-xl hover:border-brand-dark/40 transition-colors"
      >
        <span className="text-brand-purple">
          <SparkleIcon />
        </span>
        Let's Talk
        <span className="ml-1 inline-block h-2 w-2 rounded-full bg-brand-pink shadow-[0_0_10px_rgba(255,77,141,0.9)] animate-pulse" />
      </motion.button>
    </div>
  );
};

export default CTAButtons;
