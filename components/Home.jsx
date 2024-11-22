import { useState } from "react";
import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useTheme } from "../hooks/useTheme";
// import { useOutletContext } from "react-router-dom";
// import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme();
  // const [isDark] = useOutletContext();
  // const [isDark] = useContext(ThemeContext);

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="countries_container">
        <div className="search_filter_container">
          <Searchbar setQuery={setQuery} />
          <SelectMenu setQuery={setQuery} />
        </div>
        {query === "unmount" ? "" : <CountriesList query={query} />}
      </div>
    </main>
  );
};

export default Home;
