import React from "react";
import { Link, withRouter, useLocation } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ display: "flex" }}>
      <div>
        <img
          style={{ height: "110%", margin: "0.7rem" }}
          src={require("../images/logo-vector The Tree Whisperer.png")}
        />
      </div>
      <div>
        <ul className="nav_ul">
          <Link to="/">
            <li
              style={{
                padding: "2rem",
                color: "black",
              }}
            >
              Home
            </li>
          </Link>
          <Link to="classifier">
            <li
              style={{
                padding: "2rem",
                color: "black",
              }}
            >
              Classifier
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
