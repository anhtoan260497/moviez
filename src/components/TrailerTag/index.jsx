import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useState } from "react";
import { useEffect } from "react";
import movieAPI from "../../api/movieAPI";
import tvAPI from "../../api/tvAPI";

TrailerTag.propTypes = {};

function TrailerTag({ name, img, id, trailerType }) {
  const [trailerData, setTrailerData] = useState("");
  const API_Key = process.env.REACT_APP_MOVIE_API;

  useEffect(() => {
    if (!id || !trailerType) return;
    const getTrailerKey = async () => {
      if (trailerType === "option2") {
        const data = await movieAPI.getTrailerHome(API_Key, id);
        const dataFilter = data.data.results.filter((item) => {
          return item.name.includes("Official Trailer")|| item.name.includes('Official') || item.name.includes('Trailer');
        });
        setTrailerData(dataFilter);
      }
      if (trailerType === "option1") {
        const data = await tvAPI.getTrailerHome(API_Key, id);
        const dataFilter = data.data.results.filter((item) => {
          return item.name.includes("Official Trailer") || item.name.includes('Official') || item.name.includes('Trailer');
        });
        setTrailerData(dataFilter);
      }
    };
    getTrailerKey();
  }, [id, API_Key, trailerType]);

  return (
    <a className="trailer-tag"
    href={`https://www.youtube.com/watch?v=${trailerData[0]?.key}`}
    target="_blank"
    rel="noreferrer"
    >
      <img
        className="trailer-img"
        src={`https://image.tmdb.org/t/p/original${img}`}
        alt=""
      />
     
        <h2 className="trailer-name">{name}</h2>
    </a>
  );
}

export default TrailerTag;
