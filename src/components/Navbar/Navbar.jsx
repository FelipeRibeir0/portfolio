import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import ThemeToggle from './ThemeToggle/ThemeToggle';
import LanguageDropdown from './LanguageDropdown/LanguageDropdown';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation('navbar');
    const menuContainerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuContainerRef.current && !menuContainerRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = [
        { id: "about", text: t("links.about") },
        { id: "projects", text: t("links.projects") },
        { id: "courses", text: t("links.courses") },
        { id: "education", text: t("links.education") },
        { id: "contact", text: t("links.contact") }
    ];

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Felipe.dev</a>

            <div className={styles.menu}>
                <div ref={menuContainerRef}>
                    <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
                        <img
                            src={getImageUrl(menuOpen ? "nav/closeIcon.png" : "nav/menuIcon.png")}
                            alt={menuOpen ? "Close menu" : "Open menu"}
                        />
                    </button>

                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} onClick={() => setMenuOpen(false)}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <LanguageDropdown />
                <ThemeToggle />
            </div>
        </nav>
    );
};
