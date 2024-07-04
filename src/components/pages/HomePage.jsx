import Header from "../layout/Header";
import Skills from "../layout/Skills";
import { Link as ScrollLink } from "react-scroll";
import Projects from "../../sections/Projects";
import { ToastContainer } from "react-toastify";
import OnLangChange from "../../services/OnLangChange";
import ContactSection from "../../sections/ContactSection";
import Navbar from "../Navbar";
import * as Drawer from "../../components/utils/Drawer";
import DrawerLinks from "../utils/Drawer/DrawerLinks";
import { IoIosClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import i18n from "../../i18";
import Toggle from "../shared/buttons/ToggleButton";

const HomePage = () => {
  const { t } = useTranslation();
  let Links = t("navLinks", {
    returnObjects: true,
  });

  // ------------------------------------------- render navLinks ------------------------------------//
  const sidebarLinks = Links.map((link, index) => {
    return (
      <DrawerLinks key={index}>
        <ScrollLink
          to={link.link}
          activeClass={
            " after:w-full  relative after:bg-accent after:content['*'] after:absolute after:h-1 after:-bottom-2 after:left-0 after:origin-center after:scale-0 after:scale-100 after:duration-500"
          }
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-200}
          duration={500}
          delay={50}
          isDynamic={true}
          spyThrottle={500}
          className=" shadow-sm cursor-pointer uppercase text-secondary-content hover:text-accent duration-500 after:w-full relative after:bg-accent after:content['*'] after:absolute after:h-1 after:-bottom-2 after:left-0 after:origin-center after:scale-0 hover:after:scale-100 after:duration-500 text-lg"
        >
          {link.label}
        </ScrollLink>
      </DrawerLinks>
    );
  });
  const languageHandler = (isActive) => {
    if (isActive) {
      i18n.changeLanguage("ar");
      document.documentElement.dir = "rtl";
    } else {
      i18n.changeLanguage("en");
      document.documentElement.dir = "ltr";
    }
  };

  return (
    <div className="grid gap-7 ">
      <Drawer.Root>
        <Navbar />
        <Drawer.Content className={`flex flex-col pt-32 gap-4`}>
          <Drawer.CloseButton>
            <IoIosClose className="text-3xl w-10 h-10 duration-500 hover:scale-105 hover:shadow-md active:scale-95" />
          </Drawer.CloseButton>

          {sidebarLinks}
          <Toggle
            onChange={languageHandler}
            className="  rounded-3xl  p-1 gap-5 w-fit mx-auto capitalize h-10 items-center flex"
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
        </Drawer.Content>
      </Drawer.Root>
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
