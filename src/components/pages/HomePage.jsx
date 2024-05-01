import React from "react";

import ThemeBar from "../layout/themes/ThemeBar";
import Header from "../layout/Header";
import Skills from "../layout/Skills";
import i18n from "../../i18";
import Projects from "../../containers/Projects";
import ContactForm from "../ContactForm";
import { ToastContainer } from "react-toastify";
import OnLangChange from "../../services/OnLangChange";
import LangButton from "../buttons/LangButton";
import ContactSection from "../../sections/ContactSection";

const HomePage = () => {
  const handleChangeLanguage = (lan) => {
    i18n.changeLanguage(lan);
    if (lan == "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  };

  return (
    <div className="grid gap-7 ">
      <OnLangChange>
        {() => <LangButton changeLanguage={handleChangeLanguage} />}
      </OnLangChange>
      <ThemeBar />
      <Header />
      <Skills />

      <section id="projects" className="pb-20  grid gap-14 mx-auto  ">
        <Projects />
      </section>
      <ContactSection />
      <OnLangChange>
        {(dir) => {
          return (
            <>
              {/* <ContactForm dir={dir} /> */}
              <ToastContainer
                position={dir === "rtl" ? "bottom-left" : "bottom-right"}
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={dir === "rtl"}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </>
          );
        }}
      </OnLangChange>
    </div>
  );
};

export default HomePage;
