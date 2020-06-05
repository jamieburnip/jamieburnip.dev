import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";

import "../styles/normalize.css";
import "../styles/skeleton.css";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <html lang="en" />
          <meta charset="utf-8" />
          <title>{ config.siteTitle }</title>
          <meta name="description" content={ config.siteDescription } />
          <meta name="author" content="Jamie Burnip" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="css/normalize.css" />
          <link rel="stylesheet" href="css/skeleton.css" />
        </Helmet>

        <Header />

        <main>
          {children}
        </main>

        <div className="container">
          <div className="row">
            <div className="twelve column">One</div>
          </div>

          <div className="row">
            <div className="one column">One</div>
            <div className="eleven columns">Eleven</div>
          </div>

          <div className="row">
            <div className="two columns">Two</div>
            <div className="ten columns">Ten</div>
          </div>

          <div className="row">
            <div className="one-third column">1/3</div>
            <div className="two-thirds column">2/3</div>
          </div>
          <div className="row">
            <div className="one-half column">1/2</div>
            <div className="one-half column">1/2</div>
          </div>
        </div>

      </div>
    );
  }
}
