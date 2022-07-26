import React from 'react';
import styled from 'styled-components';

import { colors } from '../consts/style';
import config from '../../data/SiteConfig';

const Link = styled.a`
  color: #000;
  font-size: 2rem;
  border: solid 2px ${colors.primary};
  font-family: 'Roboto', sans-serif;
  padding: 1.5rem 2rem;

  &:hover {
    color: ${colors.primary};
    text-decoration: none;
  }

  header & {
    padding: 0.5rem 1.5rem;
  }
`;

const EmailLink = () => (
  <Link href={`mailto:${config.siteEmail}`}>Let’s Talk</Link>
);

export default EmailLink;
