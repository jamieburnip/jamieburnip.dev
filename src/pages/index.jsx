import React, { Fragment } from 'react';

import SEO from '../components/seo';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';

const IndexPage = () => (
  <Fragment>
    <SEO title="Hi" />

    <Hero />

    <SocialLinks />
  </Fragment>
);

export default IndexPage;
