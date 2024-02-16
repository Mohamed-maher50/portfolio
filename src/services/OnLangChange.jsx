import { useEffect, useState } from "react";
import i18n from "../i18";

const OnLangChange = ({ children }) => {
  const [direction, setDirection] = useState(document.body.dir || "ltr");
  useEffect(() => {
    if (i18n.language === "en") {
      setDirection("ltr");
    } else {
      setDirection("rtl");
    }
  }, []);

  i18n.on("languageChanged", () => {
    if (i18n.language === "en") {
      setDirection("ltr");
    } else {
      setDirection("rtl");
    }
  });

  return children(direction);
};

export default OnLangChange;
