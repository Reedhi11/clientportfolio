import { motion } from "framer-motion";
import { tagPop } from "../../animations/variants";

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
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

const ContactCard = ({ label, value, href, icon, accent, isExternal }) => {
  const linkProps = href
    ? {
        href,
        ...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {}),
      }
    : {};

  return (
    <motion.a
      variants={tagPop}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      {...linkProps}
      className="group relative block overflow-hidden rounded-2xl border border-white/70 bg-white/65 backdrop-blur-xl p-3 sm:p-4 shadow-soft transition-colors hover:bg-white/85"
    >
      {/* corner glow */}
      <div
        aria-hidden
        className="absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: accent }}
      />

      <div className="relative flex items-center gap-3">
        {/* icon badge */}
        <span
          className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl text-white shadow-sm shrink-0"
          style={{ background: accent }}
        >
          {icon}
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-dark/55">
            {label}
          </p>
          <p className="font-display text-sm sm:text-[15px] font-bold text-brand-dark truncate">
            {value}
          </p>
        </div>

        {/* arrow on hover */}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-dark/70 shrink-0">
          <ArrowIcon />
        </span>
      </div>
    </motion.a>
  );
};

export default ContactCard;
