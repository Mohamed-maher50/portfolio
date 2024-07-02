import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ButtonOutline from "./shared/buttons/ButtonOutline";

const ProjectCard = ({ imgUrl, demoLink, description, title, demoText }) => {
  const contianerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contianerRef,
  });
  const whenScroll = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200]);

  return (
    <div className="flex  md:snap-center  py-10 overflow-hidden max-md:flex-col max-md:items-center max-md:text-center gap-3 max-w-screen-lg mx-auto">
      <img
        src={imgUrl}
        ref={contianerRef}
        alt="project"
        className="max-w-md max-md:max-w-sm h-fit  shadow-lg rounded-lg"
      />

      <motion.div
        style={{
          y: whenScroll,
        }}
        className="grow  stop_transition_small_screen flex-1 duration-200  ease-linear  flex flex-col  justify-start  h-full w-full max-w-full"
      >
        <h1 className="text-6xl text-accent max-sm:py-3 sm:my-5 lg:my-10 font-bold">
          {title}
        </h1>
        <p className="text-secondary-content  max-sm:text-justify  font-medium">
          {description}
        </p>
        <ButtonOutline
          WrapElement={({ children }) => {
            return (
              <Link to={demoLink} target="_blank">
                {children}
              </Link>
            );
          }}
        >
          {demoText}
        </ButtonOutline>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
