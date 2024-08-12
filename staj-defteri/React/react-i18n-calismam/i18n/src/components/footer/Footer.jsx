import React from 'react';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.column}>
            <h3 style={styles.heading}><h3>{t("footer1")}</h3></h3>
            <p style={styles.text}>
            <h3>{t("footer2")}</h3>
            </p>
          </div>
          <div style={styles.column}>
            <h3 style={styles.heading}> <h3>{t("footer3")}</h3></h3>
            <ul style={styles.list}>
              <li><a href="#home" style={styles.link}> <h3>{t("footer4")}</h3></a></li>
              <li><a href="#about" style={styles.link}> <h3>{t("footer5")}</h3></a></li>
              <li><a href="#services" style={styles.link}> <h3>{t("footer6")}</h3></a></li>
              <li><a href="#contact" style={styles.link}> <h3>{t("footer7")}</h3></a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3 style={styles.heading}> <h3>{t("footer7")}</h3></h3>
            <p style={styles.text}> <h3>{t("footer9")}</h3></p>
            <p style={styles.text}> <h3>{t("footer10")}</h3></p>
            <p style={styles.text}> <h3>{t("footer11")}</h3></p>
          </div>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>&copy;  <h3>{t("footer12")}</h3></p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    marginTop: '20px'
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  column: {
    flex: '1',
    margin: '10px'
  },
  heading: {
    fontSize: '18px',
    marginBottom: '10px'
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.5'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    lineHeight: '2'
  },
  bottomBar: {
    backgroundColor: '#222',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '10px'
  },
  bottomText: {
    fontSize: '12px'
  }
};

export default Footer;
