import React from "react";

const CountryShimmerLoading = () => {
  // create new empty array method
  // new Array(10).fill('')

  const mapped = Array.from({ length: 10 }).map((el, i) => {
    return (
      <div key={i} className="country_card shimmer_card">
        <div className="image_content"></div>
        <div className="country_card_content shimmer_content">
          <h3></h3>
          <div className="country_data shimmer_data">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="country_list_wrapper">{mapped}</div>;
};

export default CountryShimmerLoading;
