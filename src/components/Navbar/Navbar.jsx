import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation('navbar');

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Felipe.dev</a>

            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#about">{t("links.about")}</a></li>
                    <li><a href="#courses">{t("links.courses")}</a></li>
                    <li><a href="#education">{t("links.education")}</a></li>
                    <li><a href="#projects">{t("links.projects")}</a></li>
                    <li><a href="#contact">{t("links.contact")}</a></li>
                </ul>
                <div className={styles.languageSwitcher}>
                    <button
                        className={`${styles.langBtn} ${i18n.language === "en" ? styles.active : ""}`}
                        onClick={() => handleLanguageChange("en")}
                    >
                        🇺🇸
                    </button>
                    <button
                        className={`${styles.langBtn} ${i18n.language === "pt" ? styles.active : ""}`}
                        onClick={() => handleLanguageChange("pt")}
                    >
                        🇧🇷
                    </button>
                </div>
            </div>
        </nav>
    );
};
