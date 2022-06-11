import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import FilmCast from "../FilmCast";
import FilmFact from "../FilmFact";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import tvAPI from "../../../../api/tvAPI";
import movieAPI from "../../../../api/movieAPI";
import FilmRecommend from "../FilmRecommend";
import { useDispatch } from "react-redux";
import { changeFilmType } from "../../../Slice/filmTypeSlice";
import { useSelector } from "react-redux";

FilmDetail.propTypes = {};

function FilmDetail(props) {
  const API_Key = process.env.REACT_APP_MOVIE_API;
  const location = useLocation();

  const type = useSelector((state) => state.filmType);

  const dispatch = useDispatch();

  const id =
    type === "tv" ? location.pathname.slice(4) : location.pathname.slice(7);

  const [castData, setCastData] = useState();

  const [filmData, setFilmData] = useState();

  const [filmRecommend, setfilmRecommend] = useState();

  const [externalIdData, setExternalIdData] = useState();

  useEffect(() => {
    const type = location.pathname.slice(1, 3);
    const action = changeFilmType(type);
    dispatch(action);
  }, [location.pathname, dispatch]);

  useEffect(() => {
    if (!id || !type) return;
    const fetchCastData = async () => {
      if (type === "tv") {
        const data = await tvAPI.getTvCast(API_Key, id);
        const newData = [];
        for (let i = 0; i < 10; i++) {
          newData.push(data.data.cast[i]);
        }
        setCastData(newData);
      }
      if (type === "movie") {
        const data = await movieAPI.getMovieCast(API_Key, id);
        const newData = [];
        for (let i = 0; i < 10; i++) {
          newData.push(data.data.cast[i]);
        }
        setCastData(newData);
      }
    };
    fetchCastData();
  }, [id, type, API_Key]);

  useEffect(() => {
    if (!id || !type) return;
    const fetchFilmExternalId = async () => {
      if (type === "tv") {
        const data = await tvAPI.getTvExternalId(API_Key, id);
        setExternalIdData(data.data);
      }
      if (type === "movie") {
        const data = await movieAPI.getMovieExternalId(API_Key, id);
        setExternalIdData(data.data);
      }
    };
    fetchFilmExternalId();
  }, [id, type, API_Key]);

  useEffect(() => {
    if (!id || !type) return;
    const fetchFilmData = async () => {
      if (type === "tv") {
        const data = await tvAPI.getTvInfo(API_Key, id);
        setFilmData(data.data);
      }
      if (type === "movie") {
        const data = await movieAPI.getMovieInfo(API_Key, id);
        setFilmData(data?.data);
      }
    };
    fetchFilmData();
  }, [id, type, API_Key]);

  useEffect(() => {
    if (!id || !type) return;
    const fetchRecommend = async () => {
      if (type === "tv") {
        const data = await tvAPI.getTvRecommend(API_Key, id);
        let newData = [];
        for (let i = 0; i < 10; i++) {
          newData.push(data.data.results[i]);
        }
        setfilmRecommend(newData);
      }
      if (type === "movie") {
        const data = await movieAPI.getMovieRecommend(API_Key, id);
        let newData = [];
        for (let i = 0; i < 10; i++) {
          newData.push(data.data.results[i]);
        }

        setfilmRecommend(newData);
      }
    };
    fetchRecommend();
  }, [id, type, API_Key]);

  return (
    <div className="film-detail">
      <FilmCast castData={castData} />
      <FilmFact
        type={type}
        filmData={filmData}
        externalIdData={externalIdData}
      />
      <FilmRecommend filmRecommend={filmRecommend} />
    </div>
  );
}

export default FilmDetail;
