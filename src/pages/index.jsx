import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

const HomePage = () => {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`${config.siteTitle} – Full Stack Software Developer`} />
        <div className="about">
          <h1>
            Edit About component or pages/about.jsx to include your information.
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
