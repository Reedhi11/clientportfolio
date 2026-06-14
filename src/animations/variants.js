// Centralized Framer Motion variants used across the hero composition.

export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeSpring = [0.34, 1.56, 0.64, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeOutExpo } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeSpring },
  },
};

export const staggerParent = (stagger = 0.1, delayChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const tagPop = {
  hidden: { opacity: 0, y: 12, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeSpring },
  },
};

export const floatY = (distance = 10, duration = 6, delay = 0) => ({
  animate: {
    y: [0, -distance, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export const floatXY = (xRange = 14, yRange = 18, duration = 8, delay = 0) => ({
  animate: {
    x: [0, xRange, -xRange, 0],
    y: [0, -yRange, yRange, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export const slowRotate = (duration = 22) => ({
  animate: {
    rotate: 360,
    transition: { duration, repeat: Infinity, ease: "linear" },
  },
});

export const navItemHover = {
  rest: { y: 0 },
  hover: {
    y: -2,
    transition: { duration: 0.25, ease: easeOutExpo },
  },
};
