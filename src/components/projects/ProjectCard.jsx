import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProjectCard = ({
  imgUrl,
  demoLink,
  description,
  title,
  technologies,
}) => {
  const pRef = useRef(null);
  const { t } = useTranslation();

  return (
    <div className="card group h-fit duration-700 bg-black shadow-xl">
      <figure>
        <img src={imgUrl} alt="Shoes" className="h-60 w-full object-center " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p
          ref={pRef}
          className={`h-20 group-hover:h-[230px] duration-500 overflow-hidden`}
        >
          {description}
        </p>
        <div className="card-actions ">
          {technologies?.map((skill, index) => {
            return <div className="badge badge-outline">{skill}</div>;
          })}
        </div>
        <Link to={demoLink} target={"_blank"} className="btn btn-primary">
          {t("projects.buttonDemo")}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
