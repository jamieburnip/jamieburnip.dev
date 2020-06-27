import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Reboot from '../style/reboot';
import Global from '../style/global';

import Header from '../components/Header';
import Footer from './../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Reboot />
      <Global />
      <Header />

      <main>{children}</main>

      <Footer />
    </Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
