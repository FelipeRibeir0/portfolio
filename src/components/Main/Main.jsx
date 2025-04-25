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
                    href="https://drive.google.com/file/d/1cqzl2mauhYweG1saZFomEcOlibDuV5CY/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactBtn}
                >
                    {t("curriculumBtn")}
                </a>
            </div>
            <img
                src={getImageUrl("main/mainImage.png")}
                alt="Image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>

            <div className={styles.whatsapp}>
                <a href="https://wa.me/5511980832140?text=Oi%20Felipe.%20Vim%20pelo%20seu%20portfolio" target="_blank">
                    <img src={getImageUrl("main/whatsapp.png")} alt="Fale comigo no Whatsapp" title="Fale comigo no Whatsapp"/>
                </a>
            </div>
        </main>
    );
};