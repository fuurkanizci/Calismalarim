import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <div className="text-red-600 font-bold">
      <h3>{t("contact")}</h3>
     
    </div>
  );
}

export default Contact;
