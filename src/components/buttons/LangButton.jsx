import i18next from "i18next";

const LangButton = ({ changeLanguage }) => {
  return (
    <div className=" fixed z-20 top-6 flex flex-col gap-1 p-2">
      {i18next.language === "ar" && (
        <button
          className="btn-xs   shadow-md btn font-Rubik"
          onClick={() => changeLanguage("en")}
        >
          En
        </button>
      )}
      {i18next.language === "en" && (
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
