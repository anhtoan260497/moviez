import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

SearchFilter.propTypes = {
  typeOfFilm: PropTypes.object,
  handleSelectType: PropTypes.func,
  total: PropTypes.number,
};

function SearchFilter({ typeOfFilm, total, handleSelectType }) {
  const renderTypeOfFilm = () => {
    if (!typeOfFilm) return;
    const types = Object.keys(typeOfFilm);
    const amount = Object.values(typeOfFilm);
    types.push("all");
    amount.push(total);
    return types.map((item, idx) => {
      return (
        <li
          className="genres-type"
          key={idx}
          onClick={() => handleSelectType(item)}
        >
          <h3 style={{ textTransform: "capitalize" }}>{item}</h3>
          <p>{amount[idx]}</p>
        </li>
      );
    });
  };

  return (
    <div className="search-filter">
      <h2 className="search-filter-title">Search Result</h2>
      <ul className="search-genres">{renderTypeOfFilm()}</ul>
    </div>
  );
}

export default SearchFilter;
