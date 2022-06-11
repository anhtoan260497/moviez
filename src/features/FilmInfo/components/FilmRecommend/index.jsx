import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import RecommendTag from "../../../../components/RecommendTag";

FilmRecommend.propTypes = {};

function FilmRecommend({ filmRecommend }) {
  const renderFilmRecommend = () => {
    if (!filmRecommend) return;
    const newFilmRecommend = filmRecommend.filter((item) => item !== undefined);

    return newFilmRecommend.map((item, idx) => {
      const { backdrop_path, name, media_type, id, title } = item;
      return (
        <RecommendTag
          key={idx}
          img={backdrop_path}
          name={media_type === "tv" ? name : title}
          type={media_type}
          id={id}
        />
      );
    });
  };

  return (
    <div className="film-recommend">
      <h2 style={{ fontSize: "1.5rem" }}>Recommendations</h2>
      <div className="film-recommend-content">{renderFilmRecommend()}</div>
    </div>
  );
}

export default FilmRecommend;
