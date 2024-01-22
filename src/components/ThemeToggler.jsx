import React, { useEffect, useState } from "react";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";

const ThemeToggler = () => {
  const [theme, setTheme] = useState();
  useEffect(() => {
    const currentMode = localStorage.getItem("theme");
    if (currentMode) {
      setTheme(currentMode);
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleThemeHandler = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleThemeHandler}>
      <img src={sunIcon} alt="light theme button" />
      <img src={moonIcon} alt="dark theme button" />
    </button>
  );
};

export default ThemeToggler;
