import { useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  useEffect(() => {
    if (localStorage.getItem("theme"))
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
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
