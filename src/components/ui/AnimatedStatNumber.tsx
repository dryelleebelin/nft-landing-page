"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate, useMotionValueEvent, useInView } from "framer-motion";
import type { AnimatedStatNumber } from "@/types/animatedStat";

export default function AnimatedStatNumber({ value, suffix = "" }: AnimatedStatNumber) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(
      latest >= 10 ? Math.round(latest) : Number(latest.toFixed(1))
    );
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: value >= 1000 ? 6.0 : 4.0,
      ease: [0.16, 1, 0.3, 1],
    });

    return controls.stop;
  }, [isInView, value, count]);

  return (
    <motion.span ref={ref}>
      {displayValue}
      {suffix}
    </motion.span>
  );
}
