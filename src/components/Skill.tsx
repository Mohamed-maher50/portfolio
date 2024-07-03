import React, { forwardRef } from "react";
import { motion } from "framer-motion";
interface ISkillCard {
  skill: string;
  icon: React.ReactNode;
  className?: string;
}
const Skill = forwardRef<HTMLDivElement, ISkillCard>(
  ({ skill, icon, className }, ref) => {
    return (
      <div
        ref={ref}
        className={`p-2 py-4 hover:bg-accent  hover:text-primary  bg-secondary overflow-hidden relative font-semibold  text-secondary-content shadow-lg rounded-lg ${className}`}
      >
        <div className="text-3xl block w-fit mx-auto">{icon}</div>
        <h1 className="text-sm  w-fit mx-auto">{skill}</h1>
      </div>
    );
  }
);

export default motion(Skill);
