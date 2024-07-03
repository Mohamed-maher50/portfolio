import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18";
import { BrowserRouter } from "react-router-dom";
import ThemeLayout from "./layouts/ThemeLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <ThemeLayout>
        <App />
      </ThemeLayout>
    </I18nextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
