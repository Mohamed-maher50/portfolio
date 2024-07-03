/* eslint-disable react/jsx-pascal-case */

import { motion } from "framer-motion";
import * as Drawer from "../utils/Drawer";
import { CiMenuFries } from "react-icons/ci";
import { Link as ScrollLink } from "react-scroll";
import LangButton from "./LanguageButton";
import { useTranslation } from "react-i18next";
import Logo from "./Logo.tsx";
import { navVariants } from "./NavMotionVariants.tsx";
import ThemeMenu from "./ThemeMenu";
import useStickyNav from "../hooks/useStickyNav";

const Navbar = () => {
  const { isSticky } = useStickyNav();
  const { t } = useTranslation();
  let Links = t("navLinks", {
    returnObjects: true,
  });
  const renderNavLinks = Links.map((e, index) => {
    return (
      <ScrollLink
        to={e.link}
        key={index}
        activeClass={
          " after:w-full  relative after:bg-accent after:content['*'] after:absolute after:h-1 after:-bottom-2 after:left-0 after:origin-center after:scale-0 after:scale-100 after:duration-500"
        }
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-200}
        duration={500}
        delay={50}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
        className="capitalize cursor-pointer text-secondary-content hover:text-accent duration-500 after:w-full relative after:bg-accent after:content['*'] after:absolute after:h-1 after:-bottom-2 after:left-0 after:origin-center after:scale-0 hover:after:scale-100 after:duration-500 text-lg"
      >
        {e.label}
      </ScrollLink>
    );
  });
  return (
    <motion.div
      variants={navVariants}
      initial={{ y: "-100%" }}
      animate={isSticky ? "visible" : "hidden"}
      className={`container  sticky z-30 bg-primary shadow-sm top-0 py-2 flex   gap-2 items-center`}
    >
      <div className="grow">
        <Logo />
      </div>
      {/* menu links */}
      <div className="gap-5 max-sm:hidden flex items-center">
        {renderNavLinks}
      </div>
      {/* theme drop down */}
      <ThemeMenu />
      <LangButton />
      <Drawer.Trigger>
        <div className="sm:hidden rtl:rotate-180 border-2 border-secondary  hover:bg-secondary duration-200 rounded-md">
          <CiMenuFries className="text-accent px-4 py-3 cursor-pointer  rounded-lg shadow-sm box-content text-xl" />
        </div>
      </Drawer.Trigger>
    </motion.div>
  );
};

export default motion(Navbar);
