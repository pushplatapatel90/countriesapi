// import { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "../hooks/useTheme";

const Header = ({ theme }) => {
  const [isDark, setIsDark] = useTheme();
  /* // const [isDark, setIsDark] = theme;
  // const [isDark, setIsDark] = useContext(ThemeContext);

  // we don't manipulate DOM in react
  /* if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }  */

  return (
    <>
      <nav className={`${isDark ? "dark" : ""}`}>
        <div className="header">
          <h2 className="logotext">Where in the world?</h2>
          <p
            className="darkmodeText"
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem("isDarkMode", !isDark);
            }}
          >
            <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
            <span>{isDark ? "Light" : "Dark"} Mode</span>
          </p>
        </div>
      </nav>
    </>
  );
};

export default Header;
