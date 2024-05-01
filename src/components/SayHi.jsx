import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbFileCv } from "react-icons/tb";
import { useTranslation } from "react-i18next";
const variantsContainer = {
  down: {
    start: {
      y: -200,
    },
    end: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  },
  up: {
    start: {
      y: 1000,
    },
    end: {
      y: 0,
      transition: {
        delay: 0.3,
        ease: "easeInOut",
        type: "spring",
        stiffness: 40,
      },
    },
  },
};
const Links = [
  {
    label: "download cv",
    href: "/mohamedmaher_cv.pdf",
    download: true,
    Icon: TbFileCv,
  },
  {
    label: "GitHub ",
    href: "https://github.com/Mohamed-maher50/",
    download: true,
    Icon: FaGithub,
  },
  {
    label: "Linked in ",
    href: "https://www.linkedin.com/in/mohamed-maher-2937a1204/",
    download: true,
    Icon: FaLinkedin,
  },
];
const SayHi = () => {
  const { t } = useTranslation("");
  return (
    <div className="gap-2 flex flex-col">
      <motion.strong
        variants={variantsContainer.down}
        initial="start"
        animate="end"
        dangerouslySetInnerHTML={{ __html: t("Header.title") }}
        className="text-5xl h-fit   pt-10    text-secondary-content font-extrabold "
      ></motion.strong>

      <motion.p
        variants={variantsContainer.up}
        initial="start"
        animate="end"
        className="text-secondary-content font-extrabold text-4xl z-10    xl:text-6xl   "
      >
        {t("Header.about")}
      </motion.p>
      <div className="flex py-5 flex-wrap gap-4">
        {Links.map(({ href, label, Icon, ...other }, index) => {
          return (
            <Link
              key={index}
              className="btn btn-outline btn-accent w-fit hover:scale-95"
              to={href}
              target="_blank"
              {...other}
            >
              {label}
              {Icon && <Icon className="text-xl" />}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SayHi;
