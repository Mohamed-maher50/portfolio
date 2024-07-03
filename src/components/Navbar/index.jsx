/* eslint-disable react/jsx-pascal-case */
import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import * as Theme from "../Theme.tsx";
import changeTheme from "../../lib/changeTheme";
import * as Drawer from "../utils/Drawer";
import { CiMenuFries } from "react-icons/ci";
import { Link as ScrollLink } from "react-scroll";
import Toggle from "../shared/buttons/ToggleButton";
import i18n from "../../i18";
import { useTranslation } from "react-i18next";
import { themes } from "../../constants/ThemeColors.ts";

const Logo = () => {
  return (
    <img
      src="/android-chrome-192x192.png"
      className="w-12  h-12 object-contain rounded-full drop-shadow-lg"
      alt="mohamed maher front end developer logo"
    />
  );
};
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};
const itemVariants = {
  hidden: { x: "150%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 30,
      duration: 0.3,
    },
  },
};

const Navbar = () => {
  const [isSticky, setSticky] = useState(true);
  const { scrollY } = useScroll();
  const { t } = useTranslation();
  const [menubarStatus, setMenubarStatus] = useState(false);
  useEffect(() => {
    const handleScrollChange = (v) => {
      if (scrollY.get() <= 80) return setSticky(true);
      if (scrollY.getPrevious() > v && v > 150) {
        if (!isSticky) setSticky(true);
      } else if (scrollY.getPrevious() < v) {
        setSticky(false);
      }
    };
    scrollY.on("change", handleScrollChange);
  }, [isSticky, scrollY]);
  const languageHandler = (isActive) => {
    if (isActive) {
      i18n.changeLanguage("ar");
      document.documentElement.dir = "rtl";
    } else {
      i18n.changeLanguage("en");
      document.documentElement.dir = "ltr";
    }
  };

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
      variants={{
        hidden: {
          y: "-100%",
        },
        visible: {
          y: 0,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        duration: 0.3,
      }}
      initial={{ y: "-100%" }}
      animate={isSticky ? "visible" : "hidden"}
      className={`container  sticky z-30 bg-primary shadow-sm top-0 py-2 flex   gap-2 items-center`}
    >
      <div className="grow">
        <Logo />
      </div>
      {/* menu links */}

      <DropdownMenu.Root onOpenChange={setMenubarStatus}>
        <div className="gap-5 max-sm:hidden flex items-center">
          {renderNavLinks}
          <div className="relative scroll-auto ">
            <DropdownMenu.Portal>
              <AnimatePresence mode="wait">
                {menubarStatus && (
                  <DropdownMenu.Content
                    forceMount
                    asChild
                    align={"end"}
                    className="min-w-[220px] gap-3 grid  bg-secondary rounded-md z-30 p-[5px] shadow-md will-change-[opacity,transform]  "
                    sideOffset={5}
                  >
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                      className="overflow-hidden delay-1000"
                      exit={{
                        transitionDelay: 0.2,
                      }}
                    >
                      <AnimatePresence mode="wait">
                        {menubarStatus &&
                          Object.entries(themes).map(
                            ([name, colors], index) => {
                              return (
                                <DropdownMenu.Item
                                  onClick={() => changeTheme(name)}
                                  key={index}
                                  className=" hover:scale-95 duration-300 "
                                >
                                  <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    exit={{ x: "150%" }}
                                    style={{ marginBottom: "10px" }}
                                  >
                                    <Theme.default
                                      style={{
                                        background: Object.values(colors)[0],
                                      }}
                                      key={index}
                                    >
                                      <Theme.Title>{name}</Theme.Title>
                                      <Theme.Body>
                                        {Object.values(colors).map(
                                          (color, i) => {
                                            return (
                                              <div
                                                className={`h-4 w-4 rounded-full shadow-md`}
                                                style={{
                                                  background: color,
                                                }}
                                                key={i}
                                              ></div>
                                            );
                                          }
                                        )}
                                      </Theme.Body>
                                    </Theme.default>
                                  </motion.div>
                                </DropdownMenu.Item>
                              );
                            }
                          )}
                      </AnimatePresence>
                    </motion.div>
                  </DropdownMenu.Content>
                )}
              </AnimatePresence>
            </DropdownMenu.Portal>
          </div>
        </div>
        <div className="flex items-center p-1  gap-2">
          <DropdownMenu.Trigger
            asChild
            className="focus:outline-none   hover:bg-accent  focus:border-none active:outline-none"
          >
            <button className="px-4 py-2    select-none       active:scale-90  hover:scale-100 duration-200 rounded-lg">
              <img src="/brush.png" alt="" className="object-contain h-full" />
            </button>
          </DropdownMenu.Trigger>
          <Toggle
            onChange={languageHandler}
            className="  rounded-3xl max-sm:hidden p-1 gap-5 capitalize h-10 items-center flex"
          >
            {({ isActive }) => {
              return (
                <div className="flex text-xs sm:text-sm gap-1 relative">
                  <div className="h-full w-1/2    text-black left-0 "></div>
                  <span
                    className={`  p-1  rounded-3xl duration-500 ${
                      isActive === true ? "bg-white text-black " : ""
                    }`}
                  >
                    arabic
                  </span>
                  <span
                    className={`
                  p-1

                  duration-500
                   rounded-3xl
                  ${isActive === false && "bg-white   text-black"}
                  `}
                  >
                    English
                  </span>
                </div>
              );
            }}
          </Toggle>
          <Drawer.Trigger>
            <div className="sm:hidden rtl:rotate-180 border-2 border-secondary  hover:bg-secondary duration-200 rounded-md">
              <CiMenuFries className="text-accent px-4 py-3 cursor-pointer  rounded-lg shadow-sm box-content text-xl" />
            </div>
          </Drawer.Trigger>
        </div>
      </DropdownMenu.Root>
    </motion.div>
  );
};

export default Navbar;
