import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [page, setPage] = useState("/");

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const location = useLocation();

  useEffect(() => {
    changePage(location.pathname);
  });

  const navUl = {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 0,
  };

  return (
    <nav
      style={{
        display: "flex",
        marginLeft: "0.2rem",
        background: "rgb(253,187,45)",
        background:
          "linear-gradient(0deg, rgba(253,187,45,1) 0%, rgba(235,240,232,0.6152836134453781) 0%, rgba(187,212,172,0.6152836134453781) 91%)",
      }}
    >
      <div>
        <img
          style={{
            height: "100%",
          }}
          src={require("../images/logo-vector The Tree Whisperer.png")}
        />
      </div>
      <div style={{ width: "80%" }}>
        <ul style={navUl}>
          <Link className="link-style" to="/">
            <li
              className="list-style"
              style={{
                textDecoration: page == "/" && "underline",
              }}
            >
              Home
            </li>
          </Link>
          <Link className="link-style" to="classifier">
            <li
              className="list-style"
              style={{
                textDecoration: page == "/classifier" && "underline",
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
