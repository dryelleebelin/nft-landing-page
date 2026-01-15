import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], 
    },
  },
};

export const floating = (duration: number) => ({
  y: [-6, 6, -6],
  transition: {
    duration,
    ease: "easeInOut" as const,
    repeat: Infinity,
  },
});

export const glowPulse = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 10,
      ease: "easeInOut" as const,
      repeat: Infinity,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};
