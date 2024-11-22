import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
// import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "../hooks/useTheme";

const CountryDetail = () => {
  const params = useParams();
  const countryName = params.country;

  const { state } = useLocation();
  // console.log(state);

  // const countryName = new URLSearchParams(location.search).get("name");
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // const [isDark] = useOutletContext();
  const [isDark] = useTheme();

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      flag: data.flags.svg,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      languages: Object.values(data.languages || {}).join(", "),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders }))
      );
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country not found</div>;
  }
  return countryData === null ? (
    "Loading..."
  ) : (
    <>
      <main className={`${isDark ? "dark" : ""}`}>
        <div className="countries_container">
          <span className="back_button" onClick={() => history.back()}>
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>

          <div className="country_details">
            <img src={countryData.flag} alt={countryData.name} />
            <div className="details_text_container">
              <h1 className="country_name_title">{countryData.name}</h1>
              <div className="details_text_wrapper">
                <div className="details_text">
                  <p>
                    <b>Native Name: </b>
                    <span className="native_name">
                      {countryData.nativeName || countryData.name}
                    </span>
                  </p>
                  <p>
                    <b>Population: </b>
                    <span className="population">
                      {countryData.population.toLocaleString("en-IN")}
                    </span>
                  </p>
                  <p>
                    <b>Region: </b>
                    <span className="region">{countryData.region}</span>
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    <span className="sub_region">{countryData.subregion}</span>
                  </p>
                  <p>
                    <b>Capital: </b>
                    <span className="capital">
                      {countryData.capital?.join(", ")}
                    </span>
                  </p>
                </div>
                <div className="details_text">
                  <p>
                    <b>Top Level Domain: </b>
                    <span className="top_level_domain">{countryData.tld}</span>
                  </p>
                  <p>
                    <b>Currencies: </b>
                    <span className="currencies">{countryData.currencies}</span>
                  </p>
                  <p>
                    <b>Languages: </b>
                    <span className="languages">{countryData.languages}</span>
                  </p>
                </div>
              </div>
              {countryData.borders.length !== 0 && (
                <div className="border_countries">
                  <b>Border Countries: </b>&nbsp;
                  {countryData.borders.map((border) => (
                    <Link key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CountryDetail;
