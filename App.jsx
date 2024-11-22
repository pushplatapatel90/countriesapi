import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
// import { useState } from "react";
// import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>

    /* <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header />
      <Outlet />
    </ThemeContext.Provider> */

    /* <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
      {/* if we use context then we don't have to use props to send value.. to avoid prop drilling
    </> */
  );
};

export default App;
