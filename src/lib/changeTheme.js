import { themes } from "../constants/ThemeColors";

export default function changeTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", themes[theme].accent);

  localStorage.setItem("theme", theme);
}
