/* eslint-disable react/jsx-pascal-case */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Theme from "../../Theme";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";
import { themesPalette } from "../../../constants/ThemeColors";
import changeTheme from "../../../lib/changeTheme";
const listVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

let MenuItemsVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 1.3 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.2,
      stiffness: 50,
    },
  },
  exit: {
    opacity: 0,
    x: 250,
    transition: {
      ease: "easeInOut",
    },
  },
};

const MenuItemWithMotion = motion(DropdownMenu.Item);
const MenuContentWithMotion = motion(DropdownMenu.Content);
const ThemeMenu = () => {
  const [menubarStatus, setMenubarStatus] = useState(false);
  return (
    <DropdownMenu.Root onOpenChange={setMenubarStatus}>
      <div className="gap-5 max-sm:hidden flex items-center">
        <div className="relative ">
          <DropdownMenu.Portal forceMount>
            <AnimatePresence mode="wait">
              {menubarStatus && (
                <MenuContentWithMotion
                  variants={listVariants}
                  animate={"visible"}
                  forceMount={true}
                  key={1}
                  initial={"hidden"}
                  exit={"exit"}
                  align={"end"}
                  className="min-w-[220px]  gap-3 grid  bg-secondary rounded-md z-30 p-[5px] shadow-md will-change-[opacity,transform]  "
                  sideOffset={5}
                >
                  {themesPalette.map((theme, index) => {
                    console.log(theme.colors[2]);
                    return (
                      <MenuItemWithMotion
                        variants={MenuItemsVariants}
                        onClick={() => changeTheme(theme.name)}
                        key={index}
                        className=" hover:shadow-none outline-none"
                        style={{ marginBottom: "10px" }}
                      >
                        <Theme.default
                          style={{
                            background: theme.colors[0],
                          }}
                          key={index}
                        >
                          <Theme.Title
                            className="capitalize font-bold"
                            style={{ color: theme.colors[1] }}
                          >
                            {theme.name}
                          </Theme.Title>
                          <Theme.Body>
                            {theme.colors.map((color, i) => {
                              return (
                                <Theme.CircleColorValue
                                  key={i}
                                  style={{ background: color }}
                                />
                              );
                            })}
                          </Theme.Body>
                        </Theme.default>
                      </MenuItemWithMotion>
                    );
                  })}
                </MenuContentWithMotion>
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
          <button className="px-4 py-2 select-none active:scale-90  hover:scale-100 duration-200 rounded-lg">
            <img src="/brush.png" alt="" className="object-contain h-full" />
          </button>
        </DropdownMenu.Trigger>
      </div>
    </DropdownMenu.Root>
  );
};

export default ThemeMenu;
