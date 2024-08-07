import "./App.css";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <motion.div className={`App min-h-[100vh]  bg-primary  duration-500`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <ScrollProgress />
    </motion.div>
  );
}

export default App;
