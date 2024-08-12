import React from "react";
import { useTranslation } from "react-i18next";
function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className=" text-3xl">
      <h3>{t("home")}</h3> 
    </div>
  );
}

export default Home;
