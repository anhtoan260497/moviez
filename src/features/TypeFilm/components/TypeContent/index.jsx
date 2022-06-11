import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import MovieTag from "../../../../components/MovieTag";

TypeContent.propTypes = {};

function TypeContent({ data, type }) {


  const renderData = () => {
    if (!data) return;
    return data.map((item, idx) => {
      return (
        <MovieTag
          key={idx}
          name={type ==='movie' ? item.title : item.name}
          img={item.poster_path}
          vote={item.vote_average}
          id={item.id}
          type={type}
          border={true}
        />
      );
    });
  };

  return <div className="type-content">{renderData()}</div>;
}

export default TypeContent;
