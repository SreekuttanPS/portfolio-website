"use client";
import React, { useEffect, useState } from "react";
import DarkThemeIcon from "../SVG/DarkThemeIcon";
import LightThemeIcon from "../SVG/LightThemeIcon";

const ThemeSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkTheme(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkTheme) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="flex items-center gap-2">
      <LightThemeIcon />
      <div className="theme-switch cursor-pointer" id="themeSwitch" onClick={toggleTheme}>
        <div
          className="theme-switch-handle"
          style={{
            transform: isDarkTheme ? "translateX(20px)" : "translateX(0)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
          <DarkThemeIcon />
    </div>
  );
};

export default ThemeSwitch;
