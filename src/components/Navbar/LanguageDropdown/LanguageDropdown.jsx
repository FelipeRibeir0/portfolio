import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../../utils";
import styles from "./LanguageDropdown.module.css";

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

  return (
    <div className={styles.languageDropdown} ref={dropdownRef}>
      <button
        className={styles.dropdownToggle}
        onClick={() => setOpen(!open)}
        aria-label="Change language"
      >
        <img src={getImageUrl("nav/languages.png")} alt="Change language" />
      </button>

      {open && (
        <div className={styles.dropdownMenu}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.langBtn} ${i18n.language === lang.code ? styles.active : ""}`}
              onClick={() => handleChange(lang.code)}
            >
              <span>{lang.flag}</span>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
