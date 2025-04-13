import React from "react";
import { useTranslation } from "react-i18next";
import styles from './Main.module.css';
import { getImageUrl } from "../../utils";

export const Main = () => {
    const { t } = useTranslation('main');
    
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{t("title")}</h1>
                <p className={styles.description}>{t("description1")}</p>
                <p className={styles.description}>{t("description2")}</p>
                <p className={styles.description}>{t("description3")}</p>
                <a 
                    href="mailto:felipecorreiaribeiro7@gmail.com" 
                    className={styles.contactBtn}
                >
                    {t("contactBtn")}
                </a>
            </div>
            <img 
                src={getImageUrl("main/mainImage.png")} 
                alt="Image of me" 
                className={styles.heroImg} 
            />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </main>
    );
};