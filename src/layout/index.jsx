import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer';
import './index.scss';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta name="description" content={config.siteDescription} />
          {/* <link rel="shortcut icon" type="image/png" href={favicon} /> */}
        </Helmet>
        <Navigation menuLinks={config.menuLinks} />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    );
  }
}
