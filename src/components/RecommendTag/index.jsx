import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import {Link} from "react-router-dom";

RecommendTag.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

function RecommendTag({img, name, type, id}) {
    const handleScrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },700)
    }

    return (
        <Link to={`/${type}/${id}`} className="film-recommend-tag" onClick={handleScrollToTop}>
            <img
                className="film-recommend-img"
                src={img ? `https://image.tmdb.org/t/p/original${img}` : null}
                alt=""
            />
            <h2 style={{fontSize: "1rem", textAlign: "center", marginTop: ".2rem"}}>
                {name}
            </h2>
        </Link>
    );
}

export default RecommendTag;
