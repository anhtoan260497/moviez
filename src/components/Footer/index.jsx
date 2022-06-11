import { GithubOutlined } from "@ant-design/icons";
import React from "react";

function Footer(props) {
  return (
    <>
      <footer
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#032541",
          height: "4rem",
          margin: "6rem 0 0 0",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/svg/footer_icon.svg"}
          alt=""
          style={{ width: "15rem" }}
        />
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
          <h1 style={{ fontSize: "1rem", color: "white", marginTop: "1rem" }}>
            Github Source Code
          </h1>
          <GithubOutlined style={{ fontSize: "2rem", color: "white" }} />
        </a>
      </footer>
    </>
  );
}

export default Footer;
