import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerParent,
  easeOutExpo,
} from "../animations/variants";
import CTAButtons from "./CTAButtons";
import AnimatedTags from "./AnimatedTags";
import FloatingCards from "./FloatingCards";
import ResumeHighlights from "./ResumeHighlights";
import ContactModal from "./contact/ContactModal";

const HeroSection = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full flex flex-col items-stretch pt-32 pb-12 lg:pt-40 lg:pb-16"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-10 items-start">
          {/* ============ LEFT — CONTENT ============ */}
          <motion.div
            variants={staggerParent(0.12, 0.2)}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 relative z-10"
          >
            {/* Intro chip */}
            {/* <motion.div variants={fadeUp} className="inline-flex">
              <span className="group inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur-xl px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-dark/85 shadow-sm">
                Hello There
                <motion.span
                  animate={{ rotate: [0, 14, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                >
                  ✨
                </motion.span>
              </span>
            </motion.div> */}

            {/* Heading — quoted, name in gradient */}
            <motion.h1
              variants={fadeUp}
              className="heading-display text-[2.5rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4.5rem] text-brand-dark"
            >
              <span className="block">
                <span className="text-brand-dark/90">&ldquo;Hi, I&rsquo;m</span>
              </span>
              <span className="block">
                <span className="text-gradient-shimmer whitespace-nowrap">
                  Prakriti Panda.
                </span>
                <span className="text-brand-dark/90">&rdquo;</span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mt-4 font-display text-xl sm:text-2xl font-bold text-brand-dark"
            >
              UI/UX &amp; Graphic Designer
            </motion.p>

            {/* Description in quotes / italics */}
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-sm sm:text-base italic text-brand-dark/70 leading-relaxed"
            >
              &ldquo;With 2+ years of experience in UI/UX and Graphic Design, I create clean, user-friendly experiences and visually compelling designs that leave a lasting impression. I've worked on social media creatives, branding, banners, emailers, and marketing campaigns that capture attention and communicate with clarity.

From wireframes to final designs, I turn ideas into smooth, intuitive experiences—balancing aesthetics with logic so it's not just pretty, it performs.

If you're hiring someone who gets users, visuals, and impact... that's me.&rdquo;
            </motion.p>

            {/* CTAs */}
            {/* <motion.div variants={fadeUp} className="mt-7">
              <CTAButtons onLetsTalk={() => setContactOpen(true)} />
            </motion.div> */}

            {/* Tags */}
            <motion.div variants={fadeUp} className="mt-4">
              <AnimatedTags />
            </motion.div>
          </motion.div>

          {/* ============ RIGHT — VISUAL + RESUME HIGHLIGHTS ============ */}
          <div className="lg:col-span-6 relative flex flex-col items-center lg:items-stretch gap-10">
            <div className="w-full max-w-md lg:max-w-none flex justify-center">
              <FloatingCards />
            </div>
            <ResumeHighlights />
          </div>
        </div>
      </div>

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
