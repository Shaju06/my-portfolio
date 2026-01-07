"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";

type SectionHeadingProps = {
  children: string;
};

const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const xProgress = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div className="text-center mb-28">
      <motion.h2
        ref={ref}
        style={{ opacity: opacityProgress, x: xProgress }}
        className="text-3xl font-medium capitalize mb-8 text-center"
      >
        {children}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
