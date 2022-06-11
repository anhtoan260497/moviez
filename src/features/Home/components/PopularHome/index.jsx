import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SlideButton from "../../../../components/SlideButton";
import "./styles.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import MovieTag from "../../../../components/MovieTag";
import { useState } from "react";
import movieAPI from "../../../../api/movieAPI";
import tvAPI from "../../../../api/tvAPI";

PopularHome.propTypes = {};

function PopularHome(props) {
  const API_Key = process.env.REACT_APP_MOVIE_API;

  const [popularType, setPopularType] = useState("option1");
  const [popularData, setPopularData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handlePopular = (e) => {
    const type = e.target.attributes.value.value;
    setIsLoading(true)
    if (type !== popularType) setPopularType(type); // check if type !== current popularType => change type
  };

  const renderPopularData = () => {
    if (!popularData) return;
    return popularData.map((item, idx) => {
      let name = "";
      if (popularType === "option1") name = item?.name;
      if (popularType === "option2") name = item?.original_title;
      return (
        <MovieTag
          key={idx}
          name={name}
          img={item?.poster_path}
          vote={item?.vote_average}
          type={popularType === "option1" ? "tv" : "movie"}
          id={item.id}
        />
      );
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [isLoading]);

  useEffect(() => {
    const fetchPopularData = async () => {
      setIsLoading(true);
      if (popularType === "option2") {
        const data = await movieAPI.getPopularHome(API_Key);
        const setData = [];
        for (let i = 0; i < 10; i++) {
          setData.push(data.data.results[i]);
        }
        setPopularData(setData);
        setIsLoading(false);
      }
      if (popularType === "option1") {
        const data = await tvAPI.getPopularHome(API_Key);
        const setData = [];
        for (let i = 0; i < 10; i++) {
          setData.push(data.data.results[i]);
        }
        setPopularData(setData);
        setIsLoading(false);
      }
    };
    fetchPopularData();
  }, [API_Key, popularType]);

  return (
    <section>
      <div className="popular-title">
        <h2>What's Popular ?</h2>
        <SlideButton
          option1="On TV"
          option2="Theaters"
          handleOption={handlePopular}
          optionType={popularType}
        />
      </div>
      {!isLoading ? (
        <div data-aos="zoom-in" className="popular-content">
          {renderPopularData()}
        </div>
      ) :null}
    </section>
  );
}

export default PopularHome;
