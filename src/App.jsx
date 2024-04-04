import { useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import { themes } from "./components/layout/themes/ThemeBar";

function App() {
  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      console.log(theme);
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", themes[theme]?.accent);
    }
  }, []);

  return (
    <motion.div className={`App min-h-[100vh] bg-primary  duration-500`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>{" "}
    </motion.div>
  );
}

export default App;
