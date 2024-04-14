import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { SendMail } from "../services/SendMail";
import { toast } from "react-toastify";

const ContactForm = ({ dir }) => {
  const { t } = useTranslation();
  const email = useRef();
  const message = useRef();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const res = SendMail({
      message: message.current.value,
      email: email.current.value,
    });

    toast.promise(res, {
      success: {
        render: () => {
          email.current.value = "";
          message.current.value = "";
          return dir === "rtl"
            ? "تم ارسال الرساله بنجاح 💌"
            : "Message sent successfully! 🤩";
        },
      },
      error:
        dir === "rtl" ? "فشل الارسال 🥺" : "Send failed. Please try again. 🥺",
      pending:
        dir === "rtl" ? "جر إسال الرساله 😁" : "Sending your message... 😁 ",
    });
  };
  return (
    <section className=" overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl text-secondary-content capitalize font-extrabold  ">
              {t("contactForm.contactMe")}📬
            </h2>
            <form
              onSubmit={handleSubmitForm}
              className="space-y-8 rounded-lg my-4  shadow-md bg-white p-2"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2  label font-medium  text-gray-700 text-lg"
                >
                  {t("contactForm.email")}📧
                </label>
                <input
                  ref={email}
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder={t("contactForm.emailPlaceholder")}
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg label font-medium text-gray-900 dark:text-gray-400"
                >
                  {t("contactForm.message")} 💌
                </label>
                <textarea
                  ref={message}
                  id="message"
                  rows="6"
                  className="block p-2.5 min-h-[200px] w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={t("contactForm.messagePlaceholder")}
                ></textarea>
              </div>
              <button className="btn btn-accent  text-primary shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {t("contactForm.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
