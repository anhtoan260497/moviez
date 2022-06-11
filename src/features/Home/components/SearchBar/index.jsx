import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeSearch, submitSearch } from "../../../Slice/searchSlice";
import { useSelector } from "react-redux";

SearchBar.propTypes = {};

function SearchBar() {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const search = useSelector(state => state.search.search)


  const onSubmitSearch = () => {
    const action = submitSearch(search)

    dispatch(action)

    navigate({
      pathname: "search",
      search: `query=${search}`,
    });
  };
  //get data after submit

  const handleChangeSearch = (e) => {
    dispatch(changeSearch(e.target.value))
  }

  return (
    <form onSubmit={handleSubmit(onSubmitSearch)}>
      {/*onSubmit event = handleSubmit(useForm) and has 1 parameter is onSubmitSearch function */}
      <input
        className="search-field"
        type="text"
        autoComplete="none"
        {...register("search", { maxLength: 20 })} //controller
        placeholder="Search for a movie, TV Show, ..."
        onChange={e=>handleChangeSearch(e)}
        value={search}
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
