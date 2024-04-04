import { useEffect } from "react";
import i18n from "../i18";

const LangButton = ({ changeLanguage }) => {
  // useEffect(() => {

  // }, [i18n.language]);
  return (
    <div className=" fixed z-20 top-6 flex flex-col gap-1 p-2">
      {
        <button
          className="btn-xs shadow-md btn font-Rubik"
          onClick={() => changeLanguage("en")}
        >
          En
        </button>
      }
      {
        <button
          className="btn-xs w-fit btn shadow-md "
          onClick={() => changeLanguage("ar")}
        >
          عربي
        </button>
      }
    </div>
  );
};

export default LangButton;
