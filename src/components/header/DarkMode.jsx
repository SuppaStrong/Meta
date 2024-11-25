import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgsun from "../../assets/images/icon/sun.png";
import imgmoon from "../../assets/images/icon/moon.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "is_dark";
  });

  useEffect(() => {
    const body = document.body;
    body.classList.remove("light", "is_dark");
    body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme(prevTheme => 
      prevTheme === "is_dark" ? "light" : "is_dark"
    );
  };

  return (
    <div className="mode_switcher">
      <h6>
        Dark mode <strong>Available</strong>
      </h6>
      <Link to="#" onClick={switchTheme}>
        {theme === "is_dark" ? (
          <img src={imgmoon} alt="Moon (Dark Mode)" />
        ) : (
          <img src={imgsun} alt="Sun (Light Mode)" />
        )}
      </Link>
    </div>
  );
};

export default DarkMode;