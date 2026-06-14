import { motion } from "framer-motion";
import { staggerParent, fadeUp } from "../animations/variants";

const PersonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.7-8 6v2h16v-2c0-3.3-3.6-6-8-6z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 4h6a2 2 0 012 2v1h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h3V6a2 2 0 012-2zm0 3h6V6H9v1z" />
  </svg>
);

const PaletteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 100 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.9-.5-1.4 0-1.1.9-2 2-2h2c2.8 0 5-2.2 5-5 0-4.9-4.5-9-10-9zM6.5 13a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3-4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3.5 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 5h-2V3H7v2H5a2 2 0 00-2 2v2a4 4 0 004 4c.4 1.3 1.4 2.4 2.7 2.9V18H8v2h8v-2h-1.7v-2.1c1.3-.5 2.3-1.6 2.7-2.9a4 4 0 004-4V7a2 2 0 00-2-2zM5 9V7h2v4a2 2 0 01-2-2zm14 0a2 2 0 01-2 2V7h2v2z" />
  </svg>
);

const HIGHLIGHTS = [
  {
    title: "Current Role",
    body: "Junior UI/UX Designer at meditgo",
    icon: <PersonIcon />,
    accent: "#FF9F43",
    gradient: "from-[#FFE9D2] to-[#FFD2A8]",
  },
  {
    title: "Previous",
    body: "UI/UX Designer at OSBEAM IT Pvt. Ltd.",
    icon: <BriefcaseIcon />,
    accent: "#FF4D8D",
    gradient: "from-[#FFE0EC] to-[#FFC3D9]",
  },
  {
    title: "Freelance",
    body: "Logos, Brochures, Social Media Designs",
    icon: <PaletteIcon />,
    accent: "#7F5AF0",
    gradient: "from-[#E8E0FF] to-[#D2C5FF]",
  },
  {
    title: "Certification",
    body: "Google UX Design | Coursera",
    icon: <TrophyIcon />,
    accent: "#FF9F43",
    gradient: "from-[#FFEFD9] to-[#FFD9A8]",
  },
];

const ResumeHighlights = () => {
  return (
    <section id="experience" className="w-full">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="font-display text-lg sm:text-xl font-bold text-brand-dark mb-3"
      >
        Resume Highlights
      </motion.h2>

      <motion.div
        variants={staggerParent(0.08, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3"
      >
        {HIGHLIGHTS.map((h) => (
          <motion.div
            key={h.title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className={`relative overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br ${h.gradient} p-3 shadow-soft`}
          >
            {/* corner glow */}
            <div
              aria-hidden
              className="absolute -top-6 -right-6 h-20 w-20 rounded-full opacity-30 blur-2xl"
              style={{ background: h.accent }}
            />

            <div
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white shadow-sm"
              style={{ background: h.accent }}
            >
              {h.icon}
            </div>

            <p className="mt-2 font-display text-[13px] font-bold text-brand-dark leading-tight">
              {h.title}
            </p>
            <p className="mt-1 text-[11px] text-brand-dark/70 leading-snug">
              {h.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ResumeHighlights;
