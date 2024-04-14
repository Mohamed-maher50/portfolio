import React from "react";
import LangButton from "../LangButton";
import ThemeBar from "../layout/themes/ThemeBar";
import Header from "../layout/Header";
import Skills from "../layout/Skills";
import i18n from "../../i18";
import ProjectsContainer from "../../containers/ProjectsContainer";
import ContactForm from "../ContactForm";
import { ToastContainer } from "react-toastify";
import OnLangChange from "../../services/OnLangChange";

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
    <div className="grid gap-7">
      <OnLangChange>
        {() => <LangButton changeLanguage={handleChangeLanguage} />}
      </OnLangChange>
      <ThemeBar />
      <Header />
       <Skills />
      <section className="container mx-auto  ">
        <ProjectsContainer />
      </section>

      <OnLangChange>
        {(dir) => {
          return (
            <>
              <ContactForm dir={dir} />
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
