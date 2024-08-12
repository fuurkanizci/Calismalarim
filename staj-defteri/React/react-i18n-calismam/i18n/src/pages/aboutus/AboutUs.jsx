import React from "react";
import { useTranslation } from "react-i18next";
function AboutUs() {
  const { t, i18n } = useTranslation();
  return (
    <div className="font-bold">
      <h3>{t("contact")}</h3>
    </div>
  );
}

export default AboutUs;
