import React, { Component } from "react";
import { Link } from 'gatsby'
import ThemeToggler from "../ThemeToggler";

import "./Header.css";

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="twelve column">
            <Link
              to="/"
              aria-label="go to homepage"
              activeClassName="active"
            >
              Jamie Burnip
            </Link>

            <div className="headerButtons">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
