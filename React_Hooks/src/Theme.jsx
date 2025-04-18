import React from "react";
import { useThemeContext } from "./contexts/ThemeContext";
import "./assets/css/Theme.css";
const Theme = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div>
      Current Theme : {theme}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Theme;
