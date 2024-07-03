import { useEffect } from "react";
import { themes } from "../constants/ThemeColors";

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
