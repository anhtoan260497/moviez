import { React, useState } from "react";
import PropTypes from "prop-types";
import { CaretDownOutlined } from "@ant-design/icons";
import "./styles.scss";
import { useEffect } from "react";

Sort.propTypes = {
  sortType : PropTypes.string.isRequired,
  isSortTypeVisible : PropTypes.bool.isRequired,
  handleSortOption : PropTypes.func,
  handleVisibleSortType : PropTypes.func,
  options : PropTypes.array.isRequired,
};

function Sort({sortType,isSortTypeVisible,handleSortOption,handleVisibleSortType,handleSortType,options}) {

  const renderOptions = () => {
    return options.map((item,idx)=>{
      return <option key={idx} value={item.value}>{item.type}</option>
    })
  }

  useEffect(()=>{
    handleSortType(sortType)
  },[handleSortType,sortType]) // return sortType to TypeFilm component

  

  return (
    <div className="sort">
      <div className="sort-dropdown-btn" onClick={handleVisibleSortType}>
        <h2 style={{margin:'0'}}>Sort</h2>
        <CaretDownOutlined />
      </div>
     { isSortTypeVisible ? <><hr />
       <div className="sort-select-container">
        <p style={{margin:'0',color:'gray'}}>Sort results by</p>
        <select className="sort-select" onChange={(e) => handleSortOption(e)} value={sortType} type="select">
        {renderOptions()}
        </select>
      </div></> : null}
    </div>
  );
}

export default Sort;
