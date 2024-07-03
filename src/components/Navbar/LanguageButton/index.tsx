import React from "react";
import Toggle from "../../shared/buttons/ToggleButton";
import i18n from "../../../i18";

const index = () => {
  const languageHandler = (isActive: boolean) => {
    if (isActive) {
      i18n.changeLanguage("ar");
      document.documentElement.dir = "rtl";
    } else {
      i18n.changeLanguage("en");
      document.documentElement.dir = "ltr";
    }
  };
  return (
    <div>
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
    </div>
  );
};

export default index;
