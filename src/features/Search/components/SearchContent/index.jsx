import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Pagination from "../../../../components/Pagination";
import { Link } from "react-router-dom";

SearchContent.propTypes = {
  searchData: PropTypes.array,
};

function SearchContent({ searchData,page,handlePagination }) {

  const renderSearchData = () => {
    if (searchData?.length === 0 || !searchData?.length) return;
    return searchData.map((item, idx) => {
      let filmName = "";
      if (item.media_type === "tv") filmName = item.name;
      if (item.media_type === "movie") filmName = item.original_title;
      let img_path = "";
      if (!item.poster_path)
        img_path = process.env.PUBLIC_URL + "/svg/no_image.png";
      if (item.poster_path)
        img_path = `http://image.tmdb.org/t/p/original${item.poster_path}`;

      return (
        <Link to={`/${item.media_type}/${item.id}`} className="search-item" key={idx}>
          <img className="search-image" src={img_path} alt="" />
          <div className="search-item-info">
            <div className="search-item-title">
              <h3 className="search-item-name">{`${filmName}`}</h3>
              <p className="search-item-date">{item.release_date}</p>
            </div>

            <p className="search-item-overview">
              {item.overview.slice(0, 300)}...
            </p>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className="search-content">
      <div style={{minHeight: '80vh'}}>{searchData?.length === 0 ? (
        <h2 style={{ fontSize: "2.5rem",height:'77vh' }}>No Movie Found</h2>
      ) : (
        renderSearchData()
      )}</div>
       <Pagination page={page} handlePagination={handlePagination}/>
    </div>
  );
}

export default SearchContent;
