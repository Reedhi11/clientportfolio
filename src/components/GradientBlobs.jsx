import { motion } from "framer-motion";

const blobs = [
  {
    className:
      "top-[-15%] left-[-12%] w-[44rem] h-[44rem] bg-brand-purple/55",
    duration: 22,
    delay: 0,
  },
  {
    className:
      "top-[20%] right-[-18%] w-[42rem] h-[42rem] bg-brand-pink/55",
    duration: 28,
    delay: 2,
  },
  {
    className:
      "bottom-[-25%] left-[15%] w-[40rem] h-[40rem] bg-brand-orange/55",
    duration: 30,
    delay: 4,
  },
  {
    className:
      "top-[55%] left-[-8%] w-[30rem] h-[30rem] bg-brand-pink/45",
    duration: 26,
    delay: 1.5,
  },
];

const GradientBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          aria-hidden
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default GradientBlobs;
