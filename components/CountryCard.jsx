import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital, data }) => {
  return (
    <>
      <Link className="country_card" to={`/${name}`} state={data}>
        <div className="flag_container">
          <img src={flag} alt={name + " Flag"} />
        </div>
        <div className="country_card_content">
          <h3 className="country_title">{name}</h3>
          <div className="country_data">
            <div>
              <b>Population:</b> <span>{population}</span>
            </div>
            <div>
              <b>Region:</b> <span>{region}</span>
            </div>
            <div>
              <b>Capital:</b> <span>{capital}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CountryCard;
