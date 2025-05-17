import React, { createContext, useState, useContext, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const getSavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  };

  const [theme, setTheme] = useState(getSavedTheme);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Componente de botão para alternar o tema
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const imageUrl = theme === 'light'
    ? 'https://cdn-icons-png.flaticon.com/512/547/547433.png'
    : 'https://cdn-icons-png.flaticon.com/512/10423/10423959.png';

  return (
    <img
      src={imageUrl}
      alt={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
      className={styles.themeToggle}
      onClick={toggleTheme}
    />
  );
};

export default ThemeToggle;