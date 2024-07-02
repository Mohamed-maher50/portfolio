import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const value = useTransform(scrollYProgress, [0, 1], ["192px", "0px"]);
  const progressNumber = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const circleLength = 191.54; // Circumference of the circle

  // Transform scrollYProgress to the strokeDashoffset value
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circleLength, 0]
  );

  useEffect(() => {
    progressNumber.on("change", (e) => {
      setProgress(Math.round(e));
    });
  }, [progressNumber]);

  return (
    <div className="fixed w-fit flex justify-center items-center  bottom-0 left-0 p-2">
      <svg
        width="80"
        height="80"
        viewBox="-10 -10 101 101"
        className="relative"
        style={{ transform: "rotate(-90deg)" }}
        aria-label="Scroll progress indicator"
      >
        <circle
          r="30.5"
          cx="40.5"
          cy="40.5"
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth="3"
          strokeDasharray={circleLength}
        />
        <motion.circle
          r="30.5"
          cx="40.5"
          cy="40.5"
          fill="transparent"
          stroke="#76e5b1"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circleLength}
          strokeDashoffset={strokeDashoffset}
        />
        <text
          x="40.5"
          y="40.5"
          textAnchor="middle"
          alignmentBaseline="middle"
          className="text-lg fill-current text-blue-600"
          style={{ transform: "rotate(-90deg)" }}
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
};

export default ScrollProgress;
