import { useEffect } from "react";
import i18n from "../i18";

const LangButton = ({ changeLanguage }) => {
  useEffect(() => {
    console.log(i18n.language);
  }, [i18n.language]);
  return (
    <div className=" fixed z-20 top-6 flex flex-col gap-1 p-2">
      {i18n.language === "ar" && (
        <button
          className="btn-xs   shadow-md btn font-Rubik"
          onClick={() => changeLanguage("en")}
        >
          En
        </button>
      )}
      {i18n.language === "en" && (
        <button
          className="btn-xs w-fit btn shadow-md "
          onClick={() => changeLanguage("ar")}
        >
          عربي
        </button>
      )}
    </div>
  );
};

export default LangButton;
