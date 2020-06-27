import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Navigation from './Navigation';

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 2.5rem 2rem;
  background-color: #fff0f0;
  display: flex;
  justify-content: space-between;

  &.is-scrolled {
    padding: 1.5rem 2rem;
  }
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
    color: #f44647;
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
    background-color: #f44647;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return window.removeEventListener('scroll', null);
  });

  return (
    <HeaderWrapper className={`${scrolled ? 'is-scrolled' : ''}`}>
      <SiteTitle to="/">Jamie Burnip</SiteTitle>
      {/* <Navigation /> */}
    </HeaderWrapper>
  );
};

export default Header;
