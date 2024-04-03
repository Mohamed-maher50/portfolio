import React from "react";

import { useTranslation } from "react-i18next";
import SubTitle from "../components/SubTitle";
import ProjectCard from "../components/ProjectCard";
const ProjectsContainer = () => {
  const { t } = useTranslation();

  const projects = t("projects.data", {
    returnObjects: true,
  });
  console.log(projects);

  return (
    <>
      <SubTitle subtitle={t("projects.subtitle")} />
      <section className="grid gap-4 mt-5 min-h-screen ">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              {...project}
              key={index}
              className={`group ${index % 2 === 0 && "rtl"} `}
            />
          );
        })}
      </section>
    </>
  );
};

export default ProjectsContainer;
