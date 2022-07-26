import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import EmailLink from './../components/EmailLink';
import { wrapper, colors } from './../consts/style';

const HeaderWrapper = styled.div`
  ${wrapper}
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
`;

const SiteTitle = styled(Link)`
  color: #000000;
  font-size: 12px;
  line-height: 30px;
  letter-spacing: 5px;
  font-weight: 700;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;

  &:hover {
    color: ${colors.primary};
    text-decoration: none;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -3px;
    right: 5px;
    height: 2px;
    width: calc(100% - 5px);
    transition: 0.35s ease-out;
    background-color: #000000;
  }

  &:hover:before {
    width: 0;
    background-color: ${colors.primary};
  }
`;

const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <SiteTitle to="/">Jamie Burnip</SiteTitle>
        <EmailLink />
      </HeaderWrapper>
    </header>
  );
};

export default Header;
