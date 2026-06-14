import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { easeOutExpo } from "../../animations/variants";

const ExperienceHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full pt-24 pb-6 sm:pt-28 sm:pb-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-10 left-[10%] w-64 h-64 bg-brand-pink/20 rounded-full blur-[80px]"
        />
      </div>

      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left: Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          style={{ opacity }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-brand-purple/5 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-brand-purple mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-purple animate-pulse" />
            My Journey
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-dark leading-tight tracking-tight mb-4">
            Two Years <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D8D] via-[#7F5AF0] to-[#FF9F43]">
              Shaping Design
            </span>
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/70 font-medium leading-relaxed max-w-sm">
            Crafting engaging digital experiences, beautiful interfaces, and impactful brand communication across a diverse range of products.
          </p>
        </motion.div>

        {/* Right: Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.1 }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="bg-white/70 backdrop-blur-xl border border-white/80 p-5 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFE0EC] to-[#FFD2DF] flex items-center justify-center text-xl mb-3 border border-white/60">
              🚀
            </div>
            <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-1.5">Growth & Strategy</h3>
            <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed font-medium">
              Working across UI/UX design, branding, and creative content production to build engaging user experiences.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-white/80 p-5 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFEFD9] to-[#FFE0B5] flex items-center justify-center text-xl mb-3 border border-white/60">
              🎨
            </div>
            <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-1.5">Diverse Projects</h3>
            <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed font-medium">
              Collaborated with freelance clients on event banners, branding, and customized physical DIY products.
            </p>
          </div>

          <div className="sm:col-span-2 bg-gradient-to-br from-brand-dark to-[#2A2A2A] text-white p-5 rounded-[1.5rem] shadow-md relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-4 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-150" />
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl border border-white/20 shrink-0">
              💻
            </div>
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-bold mb-1">Full-time Roles</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-medium max-w-lg">
                At medtigo, designing course experiences. Previously at OSBEAM IT, building responsive web apps, admin panels, and internal digital systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceHero;
