import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

CastTag.propTypes = {};

function CastTag({profile_path,character,name}) {

  return (
    <div className="cast-tag">
      <img
        className="cast-img"
        src={!profile_path ? process.env.PUBLIC_URL + '/svg/no_image.png' : `https://www.themoviedb.org/t/p/w440_and_h660_face${profile_path}`}
        alt=""
      />
      <div className="cast-detail">
      <h2 style={{fontSize:'1rem',textAlign:'center'}}>{name}</h2>
      <p style={{fontSize:'.8rem',margin:'0',textAlign:'center'}}>{character}</p>
      </div>
    </div>
  );
}

export default CastTag;
