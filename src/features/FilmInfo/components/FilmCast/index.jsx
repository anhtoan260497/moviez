import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import CastTag from "../../../../components/CastTag";

FilmCast.propTypes = {};

function FilmCast({castData}) {


  const renderCastTag = () => {
    if(!castData) return 

    const castDataItems = castData.filter((item)=>{
      return item !== undefined
    }) 

    return castDataItems.map((item,idx)=>{
      const {name,profile_path,character} = item
      return  <CastTag key={idx} profile_path={profile_path} character={character} name={name}/>
    })
  }

  return (
    <div className="film-cast">
      <h2 style={{fontSize:'1.5rem'}}>Series Cast</h2>
      <div style={{width : '70%',overflow:'scroll'}}>
        <div className="cast">
         {renderCastTag()}
        </div>
      </div>
    </div>
  );
}

export default FilmCast;
