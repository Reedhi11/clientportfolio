import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoBg from "../assets/logo/logo_hero_bg.png";
import LogoShowcase from "../components/projects/logo/LogoShowcase";

const LogoDesign = () => {
  return (
    <MainLayout>
      <main className="relative min-h-screen bg-[#FFF9F5] pt-[110px] pb-12">
        {/* Hero Section */}
        <section className="relative h-[38vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${logoBg}')`,
              filter: "brightness(0.4)",
            }}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#FFF9F5] z-[1]" />

          {/* Decorative Grid Lines */}
          <div
            className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4"
          >
            {/* Overline */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-[#D4AF37]/80 mb-6"
            >
              Brand Identity Portfolio
            </motion.span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
              Logo{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #D4AF37 0%, #F5E6A3 50%, #D4AF37 100%)",
                }}
              >
                Design
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Crafting memorable brand identities through strategic design,
              refined typography, and purposeful visual storytelling.
            </p>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mx-auto mt-8 h-px w-32 origin-center"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #D4AF37, transparent)",
              }}
            />
          </motion.div>
        </section>

        {/* Logo Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-2"
        >
          <LogoShowcase />
        </motion.div>

        {/* Back to Projects Button */}
        <div className="relative z-10 flex justify-center mt-8 pb-0">
          <Link
            to="/projects"
            className="flex items-center gap-3 rounded-full bg-[#2c2c2c] px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-[#D4AF37] hover:text-[#0A1628]"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </main>
    </MainLayout>
  );
};

export default LogoDesign;
