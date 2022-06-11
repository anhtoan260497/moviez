import React from "react";
import PropTypes from "prop-types";
import FilmOverview from "./components/FilmOverview";
import FilmDetail from "./components/FilmDetail";
import { useEffect } from "react";
import { useRef } from "react";

FilmInfo.propTypes = {};

function FilmInfo() {

  const myRef = useRef()



  return (
    <div ref={myRef} style={{ position: "relative", top: "4rem" }}>

      <FilmOverview />
      <FilmDetail />
    </div>
  );
}

export default FilmInfo;
