import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import HandmadeJourney from "../components/projects/freelance/HandmadeJourney";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import freelanceBg from "../assets/freelance/freelance_hero_bg.png";

const Freelance = () => {
  return (
    <MainLayout>
      <main className="relative min-h-screen bg-[#FDF9F1] pt-[110px] pb-6 overflow-hidden">
        {/* Decorative Background Textures (optional if we want more global texture) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-60 pointer-events-none mix-blend-multiply z-0"></div>

        {/* Hero Section */}
        <section className="relative h-[45vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden mb-8">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('${freelanceBg}')`,
              filter: 'brightness(0.35)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#FDF9F1] z-0" />

          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg font-['Playfair_Display',_serif]">
              Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D8D] to-[#FF9F43]">Works</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow">
              A curated collection of bespoke crafts and designs, each telling a unique story of artistry, patience, and love.
            </p>
          </motion.div>
        </section>

        {/* Scrapbook Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <HandmadeJourney />
        </motion.div>

        {/* Back to Projects Button */}
        <div className="relative z-10 flex justify-center mt-6 pb-0">
          <Link
            to="/projects"
            className="flex items-center gap-3 rounded-full bg-[#2c2c2c] px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-[#FF4D8D]"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </main>
    </MainLayout>
  );
};

export default Freelance;
