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
        I've always been someone who loves staying creatively and physically active. Growing up, I balanced academics with sports, dance, and various creative pursuits, which taught me discipline, curiosity, and the confidence to keep trying new things. Whether it was participating in sports, learning a new dance routine, or working on an art project, I enjoyed challenging myself and exploring different interests.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-2 text-sm sm:text-base text-brand-dark/75 leading-relaxed"
      >
        Dance has remained one of my biggest passions and favorite ways to express myself. Alongside that, I enjoy painting, creating handmade gifts, experimenting with DIY crafts, and exploring new creative forms whenever something sparks my interest. I also love spending time in the kitchen, trying new recipes and turning simple ingredients into something special.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-2 text-sm sm:text-base text-brand-dark/75 leading-relaxed"
      >
        I'm naturally curious and enjoy learning, whether it's picking up a new skill, exploring a different art form, or taking on a creative challenge. For me, the most exciting part of life is the opportunity to keep growing, creating, and finding inspiration in unexpected places.
      </motion.p>


    </motion.div>
  );
};

export default StoryContent;
