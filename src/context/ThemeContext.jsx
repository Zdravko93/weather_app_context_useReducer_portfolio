import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeContext.");
  }

  return context;
};

export const ThemeProvider = ({ children }) => {
  // get theme from local storage or system preference
  const getSystemTheme = () => {
    const getSystemPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
    return getSystemPreference;
  };

  // if there's saved theme in localStorage, otherwise fall back to system's preference
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || getSystemTheme();
  });

  // switch between dark and light themes
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme to the document body - toggle between light and dark
  useEffect(() => {
    if (theme === "light") {
      document.body.setAttribute("data-theme", theme);
    } else {
      // remove data-theme attribute and apply default styles(dark theme)
      document.body.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
