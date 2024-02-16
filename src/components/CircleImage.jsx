import React from "react";
import { motion } from "framer-motion";
import Hero from "../assets/images/hero.jpg";
const scaleVariant = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: { type: "spring", stiffness: 200, delay: 0.2 },
  },
};
const CircleImage = ({ customStyle }) => {
  return (
    <motion.img
      variants={scaleVariant}
      initial="initial"
      animate="animate"
      src={Hero}
      alt="mohamed maher"
      className={`h-72 w-72 border-secondary border-4 rounded-full object-cover ml-auto overflow-hidden shadow-xl ${customStyle} `}
    />
  );
};

export default CircleImage;
