import React from "react";
import { useEffect } from "react";
import { themes } from "../components/layout/themes/ThemeBar";

const ThemeLayout = ({ children }) => {
  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);

      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", themes[theme]?.dark);
    }
  }, []);
  return <>{children}</>;
};

export default ThemeLayout;
