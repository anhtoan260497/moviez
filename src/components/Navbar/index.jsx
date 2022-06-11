import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button, Input } from "antd";
import {GithubOutlined, SearchOutlined} from "@ant-design/icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeSearch, submitSearch } from "../../features/Slice/searchSlice";
import { useDispatch } from "react-redux";

Navbar.propTypes = {};

function Navbar(props) {
  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const keyword = useSelector((state)=> state.search.search)

  const menu_movies = (
    <Menu style={{ borderRadius: "1rem", width: " 8rem", textAlign: "center" }}>
      <Menu.Item className="menu-items" key={1}>
        <Link to="/movie/popular">Popular</Link>
      </Menu.Item>
      <Menu.Item className="menu-items" key={2}>
        <Link to="/movie/nowplaying">Now Playing</Link>
      </Menu.Item>
      <Menu.Item className="menu-items" key={3}>
        <Link to="/movie/upcoming">Upcoming</Link>
      </Menu.Item>
      <Menu.Item className="menu-items" key={4}>
        <Link to="/movie/toprated">Top Rated</Link>
      </Menu.Item>
    </Menu>
  );

  const menu_tv = (
    <Menu style={{ borderRadius: "1rem", width: " 8rem", textAlign: "center" }}>
      <Menu.Item className="menu-items" key={5}>
        <Link to="/tv/popular">Popular</Link>
      </Menu.Item>
      <Menu.Item className="menu-items" key={6}>
        <Link to="/tv/airing">Airing Today</Link>
      </Menu.Item>
      <Menu.Item className="menu-items" key={7}>
        <Link to="/tv/ontv">On TV</Link>
      </Menu.Item>
      <Menu.Item className="menu-items" key={8}>
        <Link to="/tv/toprated">Top Rated</Link>
      </Menu.Item>
    </Menu>
  );

  const handleSearchIcon = () => {
    setIsSearch(!isSearch);
  };
  

  const onSubmitNavbarSearch = (e,values) => {
    e.preventDefault()
    const action =  submitSearch(values)
    setIsSearch(!isSearch);
    dispatch(action)

    navigate({
      pathname: "search",
      search: `query=${values}`,
    });
  }

  const handleSearchNavbar = (e) => {
    const action = changeSearch(e.target.value) 
    dispatch(action)
  }

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-navigation">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/svg/icon.svg"}
              alt=""
              className="navbar-logo"
            />{" "}
          </Link>
          <div className="navbar-menu">
            <Dropdown
              className="navbar-menu-options"
              overlay={menu_movies}
              placement="bottomCenter"
            >
              <Button>Movies</Button>
            </Dropdown>
            <Dropdown
              className="navbar-menu-options"
              overlay={menu_tv}
              placement="bottomCenter"
            >
              <Button>TV Shows</Button>
            </Dropdown>
          </div>
        </div>
        <div className="navbar-auth-search">
            <a
                href="https://github.com/anhtoan260497/moviedb"
                target="_blank"
                rel="noreferrer"
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "15rem",
                    height: "4rem",
                }}
            >
                <GithubOutlined style={{ fontSize: "2rem", color: "white" }} />
            </a>
          <SearchOutlined
            style={{ fontSize: "1.2rem", cursor: "pointer" }}
            onClick={handleSearchIcon}
          />
        </div>
      </nav>
      {isSearch ? (
        <form className="search-input" onSubmit={(e)=>onSubmitNavbarSearch(e,keyword)}>
        
            <Input className="search" onChange={e=>handleSearchNavbar(e)} value={keyword} /> 
            <button className="submit-btn" type="submit">
              <SearchOutlined />
            </button>
       
        </form>
      ) : null}
    </>
  );
}

export default Navbar;
