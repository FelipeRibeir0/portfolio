import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const { t, i18n } = useTranslation('navbar');

    const menuRef = useRef(null);
    const dropdownRef = useRef(null);

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
        setLangDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setLangDropdownOpen(false);
            }
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const navLinks = [
        { id: "about", text: t("links.about") },
        { id: "courses", text: t("links.courses") },
        { id: "education", text: t("links.education") },
        { id: "projects", text: t("links.projects") },
        { id: "contact", text: t("links.contact") }
    ];

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Felipe.dev</a>

            <div className={styles.menu}>
                <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
                    <img
                        src={getImageUrl(menuOpen ? "nav/closeIcon.png" : "nav/menuIcon.png")}
                        alt={menuOpen ? "Close menu" : "Open menu"}
                    />
                </button>

                <ul ref={menuRef}
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                >
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} onClick={() => setMenuOpen(false)}>{link.text}</a>
                        </li>
                    ))}
                </ul>

                <div className={styles.languageDropdown} ref={dropdownRef}>
                    <button
                        className={styles.dropdownToggle}
                        onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                        aria-label="Change language"
                    >
                        <img src={getImageUrl("nav/languages.png")} alt="Change language" />
                    </button>

                    {langDropdownOpen && (
                        <div className={styles.dropdownMenu}>
                            {[
                                { code: "en", label: "English", flag: "🇺🇸" },
                                { code: "pt", label: "Português", flag: "🇧🇷" },
                                { code: "es", label: "Español", flag: "🇪🇸" }
                            ].map((lang) => (
                                <button
                                    key={lang.code}
                                    className={`${styles.langBtn} ${i18n.language === lang.code ? styles.active : ""}`}
                                    onClick={() => handleLanguageChange(lang.code)}
                                >
                                    <span>{lang.flag}</span>
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <ThemeToggle />
            </div>
        </nav>
    );
};