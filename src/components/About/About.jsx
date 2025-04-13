import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation("about");
  const items = t("items", { returnObjects: true });

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t("title")}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {items.map((item, index) => (
            <li key={index}>
              <img
                src={getImageUrl(
                  index === 0
                    ? "about/frontend.png"
                    : index === 1
                    ? "about/backend.png"
                    : "about/webDesign.png"
                )}
                alt="icon"
                className={styles.aboutItems}
              />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
