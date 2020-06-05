import React from "react";
import { Link } from "gatsby";
import ThemeToggler from "../ThemeToggler";
import config from "../../../data/SiteConfig";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="brand">
          <Link to="/">
            <span className="text">{config.siteTitle}</span>
          </Link>
        </div>
        <div className="links">
          {/* <a href="/me/">About</a> */}
          <Link to="/articles">Articles</Link>
          {/* <a href="/contact/">Contact</a> */}
        </div>
        <div className="cta">
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
