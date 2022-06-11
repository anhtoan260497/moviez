import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Progress } from "antd";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import tvAPI from "../../../../api/tvAPI";
import movieAPI from "../../../../api/movieAPI";
import { useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import { changeFilmType } from "../../../Slice/filmTypeSlice";
import { useDispatch, useSelector } from "react-redux";

FilmOverview.propTypes = {};

function FilmOverview() {
  const location = useLocation();

  const type = useSelector((state) => state.filmType);

  const dispatch = useDispatch();


  const id =
    type === "tv" ? location.pathname.slice(4) : location.pathname.slice(7);

  const API_Key = process.env.REACT_APP_MOVIE_API;

  const [data, setData] = useState();


  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    const type = location.pathname.slice(1, 3);
    const action = changeFilmType(type);
    dispatch(action);
  }, [location.pathname, dispatch]);

  useEffect(() => {
    if (!id || !type) return;
    const fetchMovieData = async () => {
      if (type === "tv") {
        const data = await tvAPI.getTvInfo(API_Key, id);
        setData(data.data);
      }
      if (type === "movie") {
        const data = await movieAPI.getMovieInfo(API_Key, id);
        setData(data.data);
      }
    };
    fetchMovieData();
  }, [id, type, API_Key]);

  useEffect(() => {
    // if (!data) return;
    const fetchTrailer = async () => {
      if (type === "tv") {
        const data = await tvAPI.getTrailerHome(API_Key, id);
        const trailer = data.data.results.filter(
          (item) =>
            item.name.includes("Official Trailer") ||
            item.name.includes("Trailer") ||  item.name.includes('trailer')
        );
        setTrailerURL(trailer[0]?.key);
      }
      if (type === "mo") {
        const data = await movieAPI.getTrailerHome(API_Key, id);
        const trailer = data.data.results.filter(
          (item) =>
            item.name.includes("Official Trailer") ||
            item.name.includes("Trailer")
        );
        setTrailerURL(trailer[0]?.key);
      }
    };
    fetchTrailer();
  }, [data, API_Key, id, type]);

  const renderOverview = () => {
    if (!data) return;


    return (
      <>
        <div
          style={{
            position: "absolute",
            height: "32rem",
            width: "100%",
            background:
              "linear-gradient(180deg,rgba(0,0,0,80%),rgba(0,0,0,100%))",
            opacity: "0.7",
          }}
        ></div>
        <div className="film-overview-content">
          <img
            className="film-overview-poster"
            src={data?.poster_path ? `https://image.tmdb.org/t/p/original${data?.poster_path}` : null}
            alt=""
          />
          <div className="film-overview-description">
            <div className="film-overview-title">
              <span>{type === "tv" ? data?.original_name : data?.original_title}</span>
              {trailerURL ?  <a
                style={{ marginLeft: "1rem", cursor: "pointer" }}
                title="Trailer"
                href={`https://www.youtube.com/watch?v=${trailerURL}`}
                target="_blank"
                rel="noreferrer"
              >
                <PlayCircleOutlined />
              </a> : null}
            </div>
            <div className="film-overview-score">
              <h4 style={{ color: "white", fontWeight: "600" }}>User Score</h4>
              <Progress
                width={70}
                className="score-progress"
                type="circle"
                percent={data?.vote_average * 10}
                trailColor={
                  data?.vote_average * 10 > 75
                    ? "rgba(33,208,122,40%)"
                    : data?.vote_average * 10 <= 75 && data?.vote_average * 10 > 50
                    ? "rgba(212,213,48,40%)"
                    : "rgba(219,35,96,40%)"
                }
                strokeColor={
                  data?.vote_average * 10 > 75
                    ? "rgb(33,208,122)"
                    : data?.vote_average * 10 <= 75 && data?.vote_average * 10 > 50
                    ? "rgb(212,213,48)"
                    : "rgb(219,35,96)"
                }
                strokeWidth={10}
              />
            </div>
            <p className="tagline">{data?.tagline}</p>
            <div className="overview">
              <h3 style={{ color: "white", fontSize: "1.5rem" }}>Overview</h3>
              <p className="overview-description">{data?.overview}</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <section
      className="film-overview"
      style={{
        backgroundImage: data
          ? `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`
          : null,
      }}
    >
      {" "}
      {renderOverview()}
    </section>
  );
}

export default FilmOverview;
