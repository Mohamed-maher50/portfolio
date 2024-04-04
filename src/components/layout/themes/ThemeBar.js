import React, { useRef, useState } from "react";
import Theme from "../../Theme";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
export const themes = {
  light: {
    primary: "#F3F0CA",
    secondary: "#192655",
    accent: "#3876bf",
    sub: "#e1aa74",
  },
  dark: {
    primary: "#1A120B",
    secondary: "#D5CEA3",
    accent: "#D5CEA3",
    sub: "#E5E5CB",
  },
  natural: {
    primary: "#3C6255",
    secondary: "#EAE7B1",
    accent: "#A6BB8D", //61876E
    sub: "#61876E",
  },
  CoolTonesPalette: {
    primary: "#F1F6F9",
    secondary: "#394867",
    accent: "#212A3E", //61876E
    sub: "#9BA4B5",
  },
};
const variantsContainer = {
  down: {
    start: {
      y: "-90%",
    },
    end: {
      y: -15,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
      },
    },
  },
  dragIcon: {
    start: {
      opacity: 0.9,
      scale: 0.8,
    },
    end: {
      transition: {
        type: "spring",
        stiffness: 10,
        duration: 2,
      },
    },
  },
};
const ThemeBar = () => {
  const [isActive, setIsActive] = useState(false);
  // const [containerWidth, setContainerWidth] = useState(0);
  const themeContainer = useRef();
  const handleOnClick = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", themes[theme].accent);

    localStorage.setItem("theme", theme);
    setIsActive(false);
  };
  // useEffect(() => {
  //   themeContainer.current &&
  //     setContainerWidth(themeContainer.current.scrollWidth);
  // }, [themeContainer.current]);
  return (
    <motion.div className="fixed top-0 z-20   right-0 left-0">
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            layout
            initial="start"
            animate="end"
            variants={variantsContainer.down}
            exit={{
              y: "-100%",
            }}
            ref={themeContainer}
            className="bg-gray-100 p-5  overflow-hidden mx-auto  shadow-sm rounded-b-3xl  flex"
          >
            <motion.div
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              className="flex mx-auto gap-2 my-3 justify-around px-2"
            >
              {Object.entries(themes).map(([name, colors], index) => {
                return (
                  <Theme
                    onClick={() => handleOnClick(name)}
                    colors={Object.values(colors)}
                    name={name}
                    key={index}
                  />
                );
              })}
            </motion.div>
          </motion.div>
        )}{" "}
        <motion.span
          onClick={() => setIsActive(!isActive)}
          initial="start"
          variants={variantsContainer.dragIcon}
          whileHover={{
            opacity: 1,
            translateY: isActive ? "-5px" : "5px",
            scale: 1,
          }}
          className="font-bold z-50 fixed left-1/2  text-lg duration-200 shadow-md mt-2 bg-secondary text-primary mx-auto w-fit block rounded-full  cursor-pointer"
        >
          <FiChevronDown className="text-3xl" />
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
};

export default ThemeBar;
