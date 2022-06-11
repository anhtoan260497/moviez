import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import SlideButton from "../../../../components/SlideButton";
import { useState } from "react";
import TrailerTag from "../../../../components/TrailerTag";
import movieAPI from "../../../../api/movieAPI";
import tvAPI from "../../../../api/tvAPI";

TrailerHome.propTypes = {};

function TrailerHome(props) {
  const [trailerType, setTrailerType] = useState("option1");
  const [trailerData, setTrailerData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const API_Key = process.env.REACT_APP_MOVIE_API;

  const handleTrailer = (e) => {
    const type = e.target.attributes.value.value;
    if (type !== trailerType) setTrailerType(type);
    setTrailerData(); 
    // id của trailerData k đổi kịp theo trailerType nên phải gán lại TrailerData bằng rỗng 
    // trước khi chạy useEffect để gán lại id cho từng cái TrailerTag ở dòng 49 và 27
  };

  const renderTrailerData = () => {
    if (!trailerData) return;

    return trailerData.map((item, idx) => {
      let name = "";
      if (trailerType === "option1") name = item?.name;
      if (trailerType === "option2") name = item?.original_title;
      return (
        <TrailerTag
          key={idx}
          name={name}
          img={item?.backdrop_path}
          id={item?.id}
          trailerType={trailerType}
        />
      );
    });
  };


  useEffect(() => {
    if (!trailerType) return;

    const fetchPopularData = async () => {
      setIsLoading(true);
      if (trailerType === "option2") {
        const data = await movieAPI.getPopularHome(API_Key);
        const setData = [];
        for (let i = 0; i < 10; i++) {
          setData.push(data.data.results[i]);
        }
        setTrailerData(setData);
        setIsLoading(false);
      }
      if (trailerType === "option1") {
        const data = await tvAPI.getPopularHome(API_Key);
        const setData = [];
        for (let i = 0; i < 10; i++) {
          setData.push(data.data.results[i]);
        }
        setTrailerData(setData);
        setIsLoading(false);
      }
    };
    fetchPopularData();
  }, [API_Key, trailerType]);

  return (
    <section className="trailer-home">
      <div className="trailer-title">
        <h2>Lastest Trailer</h2>
        <SlideButton
          option1="On TV"
          option2="Theaters"
          handleOption={handleTrailer}
          optionType={trailerType}
        />
      </div>
      {!isLoading ? (
        <div data-aos="zoom-in" className="trailer-content">
          {renderTrailerData()}
        </div>
      ) : null}
    </section>
  );
}

export default TrailerHome;
