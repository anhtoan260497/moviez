import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import movieAPI from "../../api/movieAPI";
import tvAPI from "../../api/tvAPI";
import { useState } from "react";
import TypeContent from "./components/TypeContent";
import TypeFilter from "./components/TypeFilter";

TypeFilm.propTypes = {};

function TypeFilm(props) {
  const API_Key = process.env.REACT_APP_MOVIE_API;

  const location = useLocation();

  const typeFilm = location?.pathname.slice(1, 3);

  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState();

  const [sortData, setSortData] = useState();

  const type =
    typeFilm === "tv" ? location.pathname.slice(4) : location.pathname.slice(7);

  const [sortType, setSortType] = useState("ratingDescending");

  const handleSortType = (values) => {
    setSortType(values);
  }; //set sortType

  useEffect(() => {
    if (!typeFilm || !type) return;
    const fetchFilmData = async () => {
      switch (typeFilm) {
        case "mo":
          switch (type) {
            case "popular": {
              const data = await movieAPI.getMoviePopular(API_Key, currentPage);
              setData(data.data.results);
              break;
            }
            case "nowplaying": {
              const data = await movieAPI.getMovieNowPlaying(
                API_Key,
                currentPage
              );
              setData(data.data.results);
              break;
            }
            case "upcoming": {
              const data = await movieAPI.getMovieUpcoming(
                API_Key,
                currentPage
              );
              setData(data.data.results);
              break;
            }
            case "toprated": {
              const data = await movieAPI.getMovieToprated(
                API_Key,
                currentPage
              );
              setData(data.data.results);
              break;
            }
            default:
              return null;
          }
          break;
        case "tv":
          switch (type) {
            case "popular": {
              const data = await tvAPI.getTvPopular(API_Key, currentPage);
              setData(data.data.results);
              break;
            }
            case "airing": {
              const data = await tvAPI.getTvAiring(API_Key, currentPage);
              setData(data.data.results);
              break;
            }
            case "ontv": {
              const data = await tvAPI.getTvOnTv(API_Key, currentPage);
              setData(data.data.results);
              break;
            }
            case "toprated": {
              const data = await tvAPI.getTvTopRated(API_Key, currentPage);
              setData(data.data.results);
              break;
            }
            default:
              return null;
          }
          break;
        default:
          return null;
      }
    };
    fetchFilmData();
  }, [typeFilm, type, API_Key, currentPage]);

  useEffect(() => {
    if (!sortType || !data) return;
    switch (sortType) {
      case "popularDescending":
        {
          const newData = [...data];
          newData.sort((a, b) => b.popularity - a.popularity);
          setSortData(newData);
        }
        break;
      case "popularAscending":
        {
          const newData = [...data];
          newData.sort((a, b) => a.popularity - b.popularity);
          setSortData(newData);
        }
        break;
      case "ratingDescending":
        {
          const newData = [...data];
          newData.sort((a, b) => b.vote_average - a.vote_average);
          setSortData(newData);
        }
        break;
      case "ratingAscending":
        {
          const newData = [...data];
          newData.sort((a, b) => a.vote_average - b.vote_average);
          setSortData(newData);
        }
        break;
      case "titleDescending":
        {
          const newData = [...data];
          newData.sort((a, b) => b.title - a.title);
          setSortData(newData);
        }
        break;
      case "titleAscending":
        {
          const newData = [...data];
          newData.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));
          setSortData(newData);
        }
        break;
      default:
        return null;
    }
  }, [sortType, data]);

  return (
    <section
      className="type-film"
      style={{
        position: "relative",
        top: "4rem",
        width: "100%",
        padding: "2% 5%",
      }}
    >
      <h1 style={{ fontSize: "2rem", margin: "0" }}>{type}</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <TypeFilter handleSortType={handleSortType} />
        <TypeContent
          data={sortData}
          type={typeFilm === "tv" ? "tv" : "movie"}
        />
      </div>
    </section>
  );
}

export default TypeFilm;
