import React from "react";
import { Link, withRouter, useLocation } from "react-router-dom";

const NavBar = () => {
  const navStyle = {
    textDecoration: "none",
  };

  const listStyle = {
    padding: "2rem",
    color: "black",
  };

  const navUl = {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 0,
  };

  return (
    <nav style={{ display: "flex" }}>
      <div style={{ border: "2px solid red" }}>
        <img
          style={{ height: "100%", margin: "0.7rem" }}
          src={require("../images/logo-vector The Tree Whisperer.png")}
        />
      </div>
      <div style={{ width: "80%", border: "2px solid red" }}>
        <ul style={navUl}>
          <Link to="/" style={navStyle}>
            <li style={listStyle}>Home</li>
          </Link>
          <Link to="classifier" style={navStyle}>
            <li style={listStyle}>Classifier</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
