import React, { useEffect, useState } from "react";
import sunIcon from "../assets/light/sun.svg";
import moonIcon from "../assets/dark/moon.svg";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const currentMode = localStorage.getItem("theme");
    if (currentMode) {
      setTheme(currentMode);
      const htmls = document.getElementsByTagName("html");
      if (currentMode === "dark") {
        htmls[0].classList.add("dark");
      }
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleThemeHandler = () => {
    setTheme((theme) => {
      const html = document.getElementsByTagName("html");
      if (theme === "light") {
        html[0].classList.add("dark");
      } else {
        html[0].classList.remove("dark");
      }
      return theme === "light" ? "dark" : "light";
    });
  };

  return (
    <button onClick={toggleThemeHandler}>
      <img src={sunIcon} alt="light theme button" />
      <img src={moonIcon} alt="dark theme button" />
    </button>
  );
};

export default ThemeToggler;
