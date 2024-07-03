import { Skills as SkillsData } from "../../data/SkillsData";
import Skill from "../Skill";
import { useTranslation } from "react-i18next";
import SubTitle from "../SubTitle";
import { Variants, motion } from "framer-motion";

const Skills = () => {
  const { t } = useTranslation("");
  return (
    <section id="skills" className="py-24">
      <SubTitle subtitle={t("Skills.title")} />
      <div className="container mx-auto grid gap-y-11">
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {SkillsData.map((sk, index) => (
            <Skill
              {...sk}
              key={index}
              variants={skillVariants}
              initial={"initial"}
              whileInView={"start"}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
const skillVariants: Variants = {
  initial: { y: 100, opacity: 0, scale: 0 },
  start: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default Skills;
