import { motion, useMotionValueEvent, useSpring } from "framer-motion";
import { useState } from "react";
import SubTitle from "./SubTitle";

const SubTitleWithProgress = ({ subtitle, scrollYProgress }) => {
  const [stopVisable, setStopVisable] = useState(false);
  const withSpring = useSpring(scrollYProgress, {
    stiffness: 100,
  });

  useMotionValueEvent(scrollYProgress, "change", (lastvalue) => {
    if (lastvalue >= 1) {
      setStopVisable(true);
    } else {
      setStopVisable(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: {
          top: -2,
        },
        hidden: {
          top: "-100%",
        },
      }}
      className={` sticky overflow-x-hidden -top-2 z-20  w-full`}
      animate={stopVisable ? "hidden" : "visible"}
      transition={{
        duration: 1,
      }}
    >
      <SubTitle subtitle={subtitle} />
      <motion.div
        className="h-2  bg-accent"
        style={{ scaleX: withSpring }}
      ></motion.div>
    </motion.div>
  );
};

export default SubTitleWithProgress;
