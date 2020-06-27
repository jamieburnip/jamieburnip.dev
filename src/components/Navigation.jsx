import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  border: 1px solid red;
`;

const NavList = styled.ul`
  display: flex;
  position: relative;
  transition: none;
  visibility: visible;
  padding: 0;
  left: 0;
  top: 0;
  width: auto;
`;

const NavListItem = styled.li`
  list-style: none;
  display: block;
  position: relative;

  & a {
    display: inline-block;
    color: #000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    padding: 1.25em 2em;
    font-weight: 500;
    line-height: 1.3125rem;
    font-size: 0.875rem;
  }

  &.current a {
    color: #f44647;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavListItem className="current">
          <a href="#home">Home</a>
        </NavListItem>
        <NavListItem className="">
          <a href="#services">Services</a>
        </NavListItem>
        <NavListItem className="">
          <a href="#about">About</a>
        </NavListItem>
        <NavListItem className="">
          <a href="#portfolio">Portfolio</a>
        </NavListItem>
        <NavListItem className="">
          <a href="#blog">Blog</a>
        </NavListItem>
        <NavListItem className="">
          <a href="#skills">Skills</a>
        </NavListItem>
        <NavListItem className="">
          <a href="#contact">Contact</a>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
