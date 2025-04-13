import React from "react";
import styles from './Contact.module.css';
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t("title")}</h2>
        <p>{t("text")}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:felipecorreiaribeiro7@gmail.com" target="_blank" rel="noopener noreferrer">
            felipecorreiaribeiro7@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedlnIcon.png")} alt="Linkedln icon" />
          <a href="https://www.linkedin.com/in/felipe-correia-ribeiro/" target="_blank" rel="noopener noreferrer">
            Felipe Correia Ribeiro
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/FelipeRibeir0" target="_blank" rel="noopener noreferrer">
            FelipeRibeir0
          </a>
        </li>
      </ul>
    </footer>
  );
};