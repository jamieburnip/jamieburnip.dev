import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/main.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta name="description" content={config.siteDescription} />
          {/* <link rel="shortcut icon" type="image/png" href={favicon} /> */}

          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Helmet>
        {/* <Navigation menuLinks={config.menuLinks} /> */}
        <main id="main-content">
          <div className="container mx-auto bg-red">{children}</div>
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}
