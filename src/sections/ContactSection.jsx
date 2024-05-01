import { useTranslation } from "react-i18next";
import ContactAnimation from "../components/ContactAnimation";
import ContactForm from "../components/ContactForm";
import SplitDualLayout from "../components/layout/SplitDualLayout";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto">
      <h2 className="mb-4 text-4xl text-secondary-content capitalize font-extrabold  ">
        {t("contactForm.contactMe")}📬
      </h2>
      <SplitDualLayout>
        <div className="relative">
          <ContactAnimation />
          <ContactForm />
        </div>
        <div className="flex items-center justify-center"></div>
      </SplitDualLayout>
    </section>
  );
};

export default ContactSection;
