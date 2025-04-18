import { createContext, useState, useContext, Children } from "react";

const ThemeContext = createContext(null);

export const ThemeContextProvidr = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  console.log(context);
  if (!context) throw new Error("ThemContext needs to wrapped");
  return context;
};
