import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import TR from "../../assets/images/header/turkey.png";
import ENG from "../../assets/images/header/usa.png";

const Header = () => {
  const { t, i18n } = useTranslation();

  // Dil değiştirme fonksiyonu
  const handleLanguageChange = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLanguage);
  };

  // Buton üzerinde gösterilecek resim
  const buttonImage = i18n.language === "tr" ? ENG : TR;

  return (
    <header style={styles.header}>
      <div className=" flex-row" style={styles.container}>
        <div style={styles.logo}>
          <a href="/" style={styles.logoText}>
            Furkan İzci
          </a>
        </div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <a href="/" style={styles.navLink}>
              <h3>{t("header1")}</h3>
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="/aboutus" style={styles.navLink}>
              <h3>{t("header2")}</h3>
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="#services" style={styles.navLink}>
              <h3>{t("header3")}</h3>
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="/contact" style={styles.navLink}>
              <h3>{t("header4")}</h3>
              </a>
            </li>
            <li style={styles.navItem}>
              <div style={styles.container}>
                <button
                  className=" absolute top-4 right-4 w-[23px]"
                  onClick={handleLanguageChange}
                  style={styles.button}
                >
                  <img
                    className="w-full ml-3"
                    src={buttonImage}
                    alt="Language Flag"
                    style={styles.image}
                  />
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  logoText: {
    color: "#fff",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "20px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s",
  },
  navLinkHover: {
    color: "red",
  },
};

export default Header;
