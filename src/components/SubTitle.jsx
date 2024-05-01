import { motion, useMotionValue, useScroll } from "framer-motion";
import React from "react";
import { useRef } from "react";

const SubTitle = ({ subtitle }) => {
  const subtitleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: subtitleRef,
    offset: ["start end", "center "],
  });

  return (
    <>
      <motion.h1
        ref={subtitleRef}
        style={{
          scale: scrollYProgress,
          borderbottom: "5px solid ",
        }}
        className="w-full max-md:text-3xl text-center py-5 sticky top-0 bg-primary z-20 text-secondary-content text-3xl font-bold uppercase mx-auto px-4 "
      >
        {subtitle}
      </motion.h1>
    </>
  );
};

export default SubTitle;
