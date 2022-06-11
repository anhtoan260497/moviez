import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Progress } from "antd";
import { Link } from "react-router-dom";

MovieTag.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  border: PropTypes.bool,
};

function MovieTag({ name, img, vote, id, type, border }) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top : 0,
      behavior:"smooth"
    })
  }


  return (
    <Link
      className="movie-tag border"
      style={
        border
          ? { boxShadow: "-2px 2px 10px gray", borderRadius: ".5rem" }
          : null
      }
      to={`/${type}/${id}`}
      onClick={handleScrollToTop}
    >
      <img
        className="movie-poster"
        src={
          img ? `https://www.themoviedb.org/t/p/w440_and_h660_face${img}` : null
        }
        alt=""
      />
      <Progress
        className="movie-points"
        type="circle"
        strokeColor={
          vote * 10 > 75
            ? "rgb(33,208,122)"
            : vote * 10 <= 75 && vote * 10 > 50
            ? "rgb(212,213,48)"
            : "rgb(219,35,96)"
        }
        width={30}
        percent={vote * 10}
        strokeWidth={10}
        trailColor={
          vote * 10 > 75
            ? "rgba(33,208,122,40%)"
            : vote * 10 <= 75 && vote * 10 > 50
            ? "rgba(212,213,48,40%)"
            : "rgba(219,35,96,40%)"
        }
      />
      <div className="movie-info">
        <h2 style={{ margin: "0" }}>{name}</h2>
        <p style={{ color: "rgb(85,85,85)", margin: "0" }}>Dec 17,2021</p>
      </div>
    </Link>
  );
}

export default MovieTag;
