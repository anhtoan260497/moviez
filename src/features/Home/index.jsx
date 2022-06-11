import React from "react";
import PropTypes from "prop-types";
import SearchBar from "./components/SearchBar";
import PopularHome from "./components/PopularHome";
import TrailerHome from "./components/TrailerHome";
import TrendingHome from "./components/TrendingHome";
import Footer from "../../components/Footer";

Home.propTypes = {};

function Home(props) {
  return (
    <div
      className="home-container"
      style={{
        width: "90%",
        margin: "0 5%",
        position: "relative",
        top: "4rem",
        zIndex :1,
      }}
    >
      <SearchBar />
      <PopularHome />
      <TrailerHome />
      <TrendingHome /> 


    </div>
  );
}

export default Home;
