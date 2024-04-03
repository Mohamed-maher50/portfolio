import React from "react";
import Skill from "./Skill";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectCard = ({
  className,
  description,
  title,
  parentProps,
  technologies,
  imgUrl,
  demoLink,
}) => {
  const { t } = useTranslation();
  return (
    <div
      {...parentProps}
      className={`bg-secondary flex  shadow-lg text-white px-4 pt-4 rounded-3xl overflow-hidden ${className}`}
    >
      <div className="grid  max-md:grid-cols-1 max-lg:gap-1 grid-cols-2">
        <div className="px-5 group-[.rtl]:md:order-2  ">
          <img
            src={imgUrl}
            className="w-full h-full max-md:rounded-3xl  max-h-96 rounded-tr-3xl p-2 rounded-tl-3xl"
            alt="pexels"
          />{" "}
        </div>

        <div className="flex  p-4 lg:p-9 flex-col gap-2 lg:gap-7">
          <h1 className="text-4xl max-lg:text-3xl capitalize">{title}</h1>
          <h3 className="text-primary text-lg max-lg:text-base opacity-80 ">
            {description}
          </h3>
          <div className="flex  gap-2 flex-wrap py-2">
            {technologies.map((technology, index) => {
              return (
                <Skill
                  skill={technology}
                  key={index}
                  customStyle=" badge badge-primary text-base"
                />
              );
            })}
          </div>
          <div className="flex group/demo  justify-between">
            <Link
              to={demoLink}
              target="_blank"
              className="flex underline  items-center gap-2"
            >
              {t("projects.buttonDemo")}
              <FaArrowRightLong className=" pt-1 group-hover/demo:animate-runRight" />
            </Link>
            {/* <span>Github</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
