import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  PlaySquareOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";

FilmFact.propTypes = {};

function FilmFact({ type, filmData, externalIdData }) {


  
  return (
    <div className="film-fact">
      <div className="film-social">
        {externalIdData?.imdb_id ? (
          <Tooltip title="IMDb" className="icon-container">
            <a
              href={`https://www.imdb.com/title/${externalIdData.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <PlaySquareOutlined className="icon" />
            </a>
          </Tooltip>
        ) : null}
        {externalIdData?.facebook_id ? (
          <Tooltip className="icon-container" title="Facebook">
            <a
              href={`https://www.facebook.com/${externalIdData.facebook_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookOutlined className="icon" title="Facebook" />
            </a>
          </Tooltip>
        ) : null}
        {externalIdData?.twitter_id ? (
          <Tooltip className="icon-container" title="Twitter">
            <a
              href={`https://twitter.com/${externalIdData.twitter_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <TwitterOutlined className="icon" title="Twitter" />
            </a>
          </Tooltip>
        ) : null}
        {externalIdData?.instagram_id ? (
          <Tooltip className="icon-container" title="Instagram">
            <a
              href={`https://www.instagram.com/${externalIdData.instagram_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramOutlined className="icon" title="Instagram" />
            </a>
          </Tooltip>
        ) : null}
        {filmData?.homepage ? (
          <Tooltip className="icon-container" title="Homepage">
            <a href={filmData?.homepage} target="_blank" rel="noreferrer">
              <LinkOutlined className="icon" title="Instagram" />
            </a>
          </Tooltip>
        ) : null}
      </div>
      <hr />
      {type === "tv" ? (
        <div className="film-facts">
          <h2 style={{ fontSize: "1.5rem" }}>Facts</h2>
          <div className="film-facts-info">
            <h2>Original Name</h2>
            <p>{filmData?.original_name}</p>
          </div>
          <div className="film-facts-info">
            <h2>Status</h2>
            <p>{filmData?.status}</p>
          </div>
          <div className="film-facts-info">
            <h2>Network</h2>
            <img
              src={
                filmData?.networks[0]?.logo_path
                  ? `https://image.tmdb.org/t/p/original${filmData?.networks[0]?.logo_path}`
                  : null
              }
              alt=""
            />
          </div>
          <div className="film-facts-info">
            <h2>Type</h2>
            <p>{filmData?.type}</p>
          </div>
          <div className="film-facts-info">
            <h2>Original Language</h2>
            <p>{filmData?.spoken_languages?.[0]?.name}</p>
          </div>
        </div>
      ) : (
        // movies
        <div className="film-facts">
          <h2 style={{ fontSize: "1.5rem" }}>Facts</h2>
          <div className="film-facts-info">
            <h2>Status</h2>
            <p>{filmData?.status}</p>
          </div>
          <div className="film-facts-info">
            <h2>Network</h2>
           {filmData?.production_companies[0]?.logo_path ?  <img
              src={
                filmData?.production_companies[0]?.logo_path
                  ? `https://image.tmdb.org/t/p/original${filmData?.production_companies[0]?.logo_path}`
                  : null
              }
              alt=""
            /> : '-'}
          </div>
          <div className="film-facts-info">
            <h2>Budget</h2>
            <p>
              {filmData?.budget
                ? filmData?.budget < 1000000
                  ? ` $${Math.trunc(filmData?.budget / 1000)} K`
                  : `${Math.trunc(filmData?.budget / 1000000)} M`
                : "-"}
            </p>
          </div>
          <div className="film-facts-info">
            <h2>Revenue</h2>
            <p>
              {filmData?.revenue
                ? filmData?.revenue < 1000000
                  ? ` $${Math.trunc(filmData?.revenue / 1000)} K`
                  : filmData?.revenue < 1000000000
                  ? `${Math.trunc(filmData?.revenue / 1000000)} M`
                  : `${(filmData?.revenue / 1000000000).toFixed(1)} B`
                : "-"}
            </p>
          </div>
          <div className="film-facts-info">
            <h2>Original Language</h2>
            <p>{filmData?.spoken_languages?.[0]?.name? filmData?.spoken_languages?.[0]?.name : '-'}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilmFact;
