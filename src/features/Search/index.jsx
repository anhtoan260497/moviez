import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import searchAPI from "../../api/searchAPI";
// import { changeSearch } from "../Slice/searchSlice";
import SearchContent from "./components/SearchContent";
import SearchFilter from "./components/SearchFilter";

Search.propTypes = {};

function Search(props) {
  const location = useLocation(); // get params
  const keyword = useSelector(state => state.search.submit)// keyword to search

  const dispatch = useDispatch()
  
  const API_Key = process.env.REACT_APP_MOVIE_API;

  const [searchData, setSearchData] = useState();
  const [searchFilter, setSearchFilter] = useState();

  const [typeOfFilm, setTypeOfFilm] = useState();
  const [selectType, setSelectType] = useState();

  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   if (!location) return;
  //           ;// get query string, path is ?query='querystring', first 7 letters need to slice
  //   const action = changeSearch(params)
  //   dispatch(action)
  // }, [location,dispatch]); // add keyword

  useEffect(() => {
    if (!keyword) return;
    const fetchSearchData = async () => {
      const data = await searchAPI.getSearchData(API_Key, keyword,page);
      if (!selectType) {
        const newData = data.data.results.filter(
          (item) => item.media_type === "tv" || item.media_type === "movie"
        );
        setSearchData(newData);
        setSearchFilter(newData);
      }
      if (selectType && selectType !== "all") {
        const newData = data.data.results.filter(
          (item) => item.media_type === selectType
        );
        setSearchFilter(newData);
      }

      if (selectType === "all") {
        const newData = data.data.results.filter(
          (item) => item.media_type === "tv" || item.media_type === "movie"
        );
        setSearchFilter(newData);
      }
    };
    fetchSearchData();
  }, [keyword, API_Key, selectType,page]); // add data

  useEffect(() => {
    if (!searchData) return;
    const typesSet = {};
    for (let i = 0; i < searchData.length; i++) {
      if (searchData[i].media_type in typesSet) {
        typesSet[searchData[i].media_type] += 1;
      } else {
        typesSet[searchData[i].media_type] = 1;
      }
    }

    setTypeOfFilm(typesSet);
  }, [searchData]); // get all types

  const handleSelectType = (value) => {
    setSelectType(value);
  }; // set type

  const handlePagination = (e) => {
    setTimeout(()=> {
      window.scrollTo({
        top : 0,
        behavior:'smooth'
      })
    },700)
    let currentPage = page;
    if (e.target.value === "backward") {
      currentPage -= 1;
      if (currentPage < 1) return;
      setPage(currentPage);
    }
    if (e.target.value === "forward") {
      if(searchData?.length === 0) return
      setPage(page + 1);
    }
  }

  return (
    <section
      className="search-container"
      style={{
        width: "90%",
        margin: "0 5%",
        paddingTop: "2rem",
        position: "relative",
        top: "4rem",
        zIndex: 1,

        display: "flex",
        justifyContent: "space-between",
        gap: "2rem",
        fontFamily: "Source Sans Pro",
      }}
    >
      <SearchFilter
        typeOfFilm={typeOfFilm}
        total={searchData?.length}
        handleSelectType={handleSelectType}
      />
      <SearchContent searchData={searchFilter} page={page} handlePagination={handlePagination}/>
    </section>
  );
}

export default Search;
