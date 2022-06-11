import React from "react";
import "./styles.scss";
import SlideButton from "../../../../components/SlideButton";
import { useState, useEffect } from "react";
import trendingAPI from "../../../../api/trendingAPI";
import MovieTag from "../../../../components/MovieTag";

function TrendingHome(props) {
  const [trendingType, setTrendingType] = useState("option1");
  const [trendingData, setTrendingData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const API_Key = process.env.REACT_APP_MOVIE_API;

  const handleOption = (e) => {
    const type = e.target.attributes.value.value;
    if (type !== trendingType) setTrendingType(type);
  };

  useEffect(() => {
    if (!trendingType) return;
    const fetchTrendingData = async () => {
      setIsLoading(true);
      if (trendingType === "option1") {
        const data = await trendingAPI.getTrendingToday(API_Key);
        setTrendingData(data.data.results);
        setIsLoading(false);
      } // trending today
      if (trendingType === "option2") {
        const data = await trendingAPI.getTrendingWeek(API_Key);
        setTrendingData(data.data.results);
        setIsLoading(false);
      }
    };
    fetchTrendingData();
  }, [trendingType, API_Key]);

  const renderTrending = () => {
    if (!trendingData) return;
    return trendingData.map((item, idx) => {
      let name = "";
      if (item.media_type === "movie") name = item.original_title;
      if (item.media_type === "tv") name = item.name;
      return (
        <MovieTag
          name={name}
          img={item.poster_path}
          vote={item.vote_average}
          key={idx}
          id={item.id}
          type={item.media_type}
        />
      );
    });
  };

  return (
    <section className="trending-home">
      <div className="trending-title">
        <h2>Trending</h2>
        <SlideButton
          option1="Today"
          option2="This Week"
          handleOption={handleOption}
          optionType={trendingType}
        />
      </div>

      {!isLoading ? (
        <div data-aos="zoom-in" className="trending-content">
          {renderTrending()}
        </div>
      ) : null}
    </section>
  );
}

export default TrendingHome;
