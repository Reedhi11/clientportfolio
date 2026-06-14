import { motion } from "framer-motion";
import { fadeUp, staggerParent } from "../../animations/variants";

const ROLES = [
  {
    title: "Junior UI/UX Designer",
    company: "medtigo",
    period: "Current",
    chip: "Now",
    chipColor: "#10B981",
    accent: "#7F5AF0",
    bg: "from-[#EFE7FF] to-[#D9C7FF]",
    bullets: [
      "Designing mobile + web UI/UX",
      "Building reusable design systems",
      "Marketing creatives & email templates (Klaviyo)",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "OSBEAM IT Pvt. Ltd.",
    period: "Previous",
    chip: "Past",
    chipColor: "#FF4D8D",
    accent: "#FF4D8D",
    bg: "from-[#FFE0EC] to-[#FFC3D9]",
    bullets: [
      "Company website & admin panel",
      "Internal app + leave management app",
      "End-to-end product flows",
    ],
  },
  {
    title: "Freelance Designer",
    company: "Independent Clients",
    period: "Ongoing",
    chip: "Side",
    chipColor: "#FF9F43",
    accent: "#FF9F43",
    bg: "from-[#FFEFD9] to-[#FFD9A8]",
    bullets: [
      "Logos & visual identity",
      "Brochures & print collateral",
      "Social media designs",
    ],
  },
  {
    title: "Google UX Design",
    company: "Coursera Certification",
    period: "Certified",
    chip: "Cert",
    chipColor: "#7F5AF0",
    accent: "#7F5AF0",
    bg: "from-[#E8E0FF] to-[#D2C5FF]",
    bullets: [
      "Foundations of UX research",
      "Wireframing → high-fidelity prototypes",
      "Usability testing & iteration",
    ],
  },
];

const CheckIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="M5 12l5 5L20 7" />
  </svg>
);

const ExperienceCards = () => {
  return (
    <section className="relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur-md px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-brand-dark/70">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-pink" />
          Experience
        </span>
        <h2 className="heading-display mt-4 text-3xl sm:text-4xl lg:text-5xl text-brand-dark">
          Roles &amp;{" "}
          <span className="text-gradient-funky">milestones</span>
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-brand-dark/65">
          The kind of work I've been shipping.
        </p>
      </motion.div>

      <motion.div
        variants={staggerParent(0.1, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
      >
        {ROLES.map((r) => (
          <motion.article
            key={r.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className={`relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br ${r.bg} p-5 shadow-soft`}
          >
            {/* corner glow */}
            <div
              aria-hidden
              className="absolute -top-10 -right-10 h-28 w-28 rounded-full opacity-30 blur-2xl"
              style={{ background: r.accent }}
            />

            {/* chip */}
            <span
              className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-white"
              style={{ background: r.chipColor }}
            >
              {r.chip}
            </span>

            {/* icon badge */}
            <div
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white font-display font-bold text-base shadow-sm"
              style={{ background: r.accent }}
            >
              {r.title.charAt(0)}
            </div>

            {/* title + company */}
            <p
              className="mt-4 text-[10px] font-mono uppercase tracking-[0.2em]"
              style={{ color: r.accent }}
            >
              {r.period}
            </p>
            <h3 className="mt-1 font-display text-base sm:text-lg font-bold text-brand-dark leading-tight">
              {r.title}
            </h3>
            <p className="mt-0.5 text-xs font-semibold text-brand-dark/75">
              {r.company}
            </p>

            {/* bullets */}
            <ul className="mt-4 space-y-1.5">
              {r.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-[11px] sm:text-xs text-brand-dark/75 leading-snug"
                >
                  <span
                    className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full text-white shrink-0"
                    style={{ background: r.accent }}
                  >
                    <CheckIcon />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceCards;
