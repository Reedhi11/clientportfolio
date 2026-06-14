import { motion } from "framer-motion";
import { easeOutExpo, fadeUp } from "../../animations/variants";

const STEPS = [
    {
    title: "UI/UX Design Diploma",
    place: "Infinite Graphix Technology, Pune",
    body: "06/2023-11/2023",
    accent: "#7F5AF0",
    bg: "from-[#E8E0FF] to-[#D7CBFF]",
    icon: "🎓",
  },
  {
    title: "Fashion Designing",
    place: "INIFD Deccan, Pune",
    body: "2021-2023",
    accent: "#FF4D8D",
    bg: "from-[#FFE0EC] to-[#FFD2DF]",
    icon: "✂",
  },
  {
    title: "BA Economics",
    place: "St.Xavier's,Ahmedabad",
    body: "2018-2021",
    accent: "#FF9F43",
    bg: "from-[#FFEFD9] to-[#FFE0B5]",
    icon: "💰",
  },
  {
    title: "HSC",
    place: "The Lovedale Sr.Sec.School,Satna",
    body: "2016-2018",
    accent: "#10B981",
    bg: "from-[#D9F8EC] to-[#BFEED9]",
    icon: "📝",
  },
];

const JourneyTimeline = () => {
  return (
    <section className="relative w-full">
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur-md px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-brand-dark/70">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
          Education
        </span>
        <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-5xl text-brand-dark">
          Lessons that{" "}
          <span className="text-gradient-funky">shaped me</span>
        </h2>
        <p className="mt-2 max-w-xl mx-auto text-sm sm:text-base text-brand-dark/65">
          The classrooms, certifications, and chapters that built my creative
          foundation.
        </p>
      </motion.div>

      {/* timeline */}
      <div className="relative mt-8 sm:mt-10">
        {/* vertical connector line (mobile: left, desktop: center) */}
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-6 sm:left-1/2 sm:-translate-x-1/2 w-[2px] bg-gradient-to-b from-brand-purple/60 via-brand-pink/60 to-brand-orange/60 rounded-full"
        />

        <ul className="space-y-5 sm:space-y-7">
          {STEPS.map((s, i) => {
            const onLeft = i % 2 === 0;
            return (
              <motion.li
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: i * 0.05 }}
                className="relative"
              >
                {/* node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15, ease: easeOutExpo }}
                  className="absolute top-2 left-6 sm:left-1/2 -translate-x-1/2 z-10"
                >
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-display font-bold shadow-soft ring-4 ring-brand-cream"
                    style={{ background: s.accent }}
                  >
                    {s.icon}
                  </span>
                </motion.div>

                {/* card */}
                <div
                  className={`sm:grid sm:grid-cols-2 sm:gap-10 ${
                    onLeft ? "" : "sm:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className={`ml-16 sm:ml-0 ${
                      onLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br ${s.bg} p-4 sm:p-5 shadow-soft`}
                    >
                      {/* corner glow */}
                      <div
                        aria-hidden
                        className={`absolute -top-8 ${
                          onLeft ? "-right-8" : "-left-8"
                        } h-24 w-24 rounded-full opacity-30 blur-2xl`}
                        style={{ background: s.accent }}
                      />

                      <p
                        className="text-[10px] font-mono uppercase tracking-[0.2em] mb-1"
                        style={{ color: s.accent }}
                      >
                        Step {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-brand-dark leading-tight">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-semibold text-brand-dark/75">
                        {s.place}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm text-brand-dark/70 leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default JourneyTimeline;
