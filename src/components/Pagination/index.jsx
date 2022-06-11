import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Pagination.propTypes = {
    handlePagination : PropTypes.func,
    page : PropTypes.number.isRequired,
};

function Pagination({handlePagination,page}) {


  return (
    <section className="pagination">
      <button
        className="page-back transistion"
        value="backward"
        onClick={(e) => handlePagination(e)}
      >
        &#8249;
      </button>
      <div className="page-number">{page}</div>
      <button
        className="page-forward transistion"
        value="forward"
        onClick={(e) => handlePagination(e)}
        // disabled = {true}
      >
        &#8250;
      </button>
    </section>
  );
}

export default Pagination;
