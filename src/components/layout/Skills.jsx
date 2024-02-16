import React from "react";
import { Skills as SkillsData } from "../../data/SkillsData";
import Skill from "../Skill";
import { useTranslation } from "react-i18next";
import SubTitle from "../SubTitle";
const Skills = () => {
  const { t } = useTranslation("");
  return (
    <section className="py-24">
      <div className="container mx-auto grid gap-y-11">
        <SubTitle subtitle={t("Skills.title")} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {SkillsData.map((sk, index) => (
            <Skill {...sk} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
