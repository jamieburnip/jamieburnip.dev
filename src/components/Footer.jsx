import React from 'react';
import styled from 'styled-components';

import { wrapper, colors } from './../consts/style';
import config from '../../data/SiteConfig';

const FooterWrapper = styled.div`
  ${wrapper}
  display: flex;
  justify-content: flex-end;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;

const Footer = () => (
  <footer>
    <FooterWrapper>{config.copyright}</FooterWrapper>
  </footer>
);

export default Footer;
