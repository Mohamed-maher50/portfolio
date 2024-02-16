import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { useTranslation } from "react-i18next";
import SubTitle from "../components/SubTitle";
const ProjectsContainer = () => {
  const { t } = useTranslation();

  const projects = t("projects.data", {
    returnObjects: true,
  });

  return (
    <>
      <SubTitle subtitle={t("projects.subtitle")} />
      <section className="grid  min-h-screen gap-3 pt-3 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => {
          return <ProjectCard {...project} key={index} />;
        })}
      </section>
    </>
  );
};

export default ProjectsContainer;
