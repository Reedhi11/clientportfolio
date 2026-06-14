import { motion } from "framer-motion";
import { fadeUp, staggerParent, easeOutExpo } from "../../animations/variants";

const StoryContent = () => {
  return (
    <motion.div
      variants={staggerParent(0.12, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full"
    >
      {/* kicker */}
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur-md px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-brand-dark/70"
      >


      </motion.span>

      {/* heading */}
      <motion.h2
        variants={fadeUp}
        className="heading-display mt-3 text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight"
      >
        Blending Art, Technology & <br className="hidden lg:block" /><span className="text-gradient-funky">Human-Centered Design</span>
      </motion.h2>

      {/* paragraphs */}
      <motion.p
        variants={fadeUp}
        className="mt-2 text-sm sm:text-base text-brand-dark/75 leading-relaxed"
      >
        My creative journey began with{" "}
        <span className="font-semibold text-brand-dark">Fashion Designing</span>
        , where I developed a strong understanding of aesthetics, color, composition, and visual storytelling. This foundation taught me how thoughtful design can influence emotions, shape identities, and create meaningful experiences.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-2 text-sm sm:text-base text-brand-dark/75 leading-relaxed"
      >
        Driven by curiosity and a passion for learning, I transitioned into{" "}
        <span className="font-semibold text-brand-dark">UI/UX Design</span> to combine creativity with technology. Today, I design intuitive digital interfaces, scalable design systems, branding assets, social media creatives, and user-centered experiences that balance functionality with visual appeal.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-2 text-sm sm:text-base text-brand-dark/75 leading-relaxed"
      >
        Beyond design, I've always enjoyed staying both creatively and physically active. Growing up, I balanced academics with sports, dance, and artistic pursuits, which taught me discipline, adaptability, and the confidence to embrace new challenges. Dance remains one of my greatest passions and a powerful form of self-expression. I also enjoy painting, creating handmade gifts, experimenting with DIY crafts, and exploring new recipes in the kitchen.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-2 text-sm sm:text-base text-brand-dark/75 leading-relaxed"
      >
        I believe inspiration can be found everywhere. Whether I'm learning a new skill, exploring a different art form, or solving a design challenge, I am constantly seeking opportunities to grow, create, and make a positive impact through meaningful experiences.
      </motion.p>


    </motion.div>
  );
};

export default StoryContent;
