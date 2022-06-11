import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Sort from "../../../../components/Sort";

TypeFilter.propTypes = {};

function TypeFilter({ handleSortType }) {
  const [sortType, setSortType] = useState("ratingDescending");

  const [isSortTypeVisible, setIsSortTypeVisible] = useState(false);

  const options = [
    {
      value: "popularDescending",
      type: "Populariry Descending",
    },
    {
      value: "popularAscending",
      type: "Populariry Ascending",
    },
    {
      value: "ratingDescending",
      type: "Rating Descending",
    },
    {
      value: "ratingAscending",
      type: "Rating Ascending",
    },
    {
      value: "titleAscending",
      type: "Title (A-Z)",
    },
    {
      value: "titleDescending",
      type: "Title (Z-A)",
    },
  ];

  const handleSortOption = (e) => {
    setSortType(e.target.value);
  };

  const handleVisibleSortType = () => {
    setIsSortTypeVisible(!isSortTypeVisible);
  };


  return (
    <div className="type-filter">
      <Sort
        sortType={sortType}
        isSortTypeVisible={isSortTypeVisible}
        handleSortOption={handleSortOption}
        handleVisibleSortType={handleVisibleSortType}
        handleSortType={handleSortType}
        options={options}
      />
    </div>
  );
}

export default TypeFilter;
