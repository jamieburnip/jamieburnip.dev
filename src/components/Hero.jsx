import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mq from './../style/mq';

const HeroSection = styled.section`
  height: 100vh;
  padding: 85px 0;
  margin: 0;

  ${mq.desktop`
    padding: 60px 0;
  `}
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  ${'' /* justify-content: flex-end; */}
  position: relative;
  height: 100%;
`;

const NameTitle = styled.h1`
  position: absolute;
  color: #f44647;
  font-weight: 800;
  font-size: 140px;
  line-height: 143px;
  letter-spacing: -4px;
  z-index: 1;
  left: 0;

  ${mq.desktop`
    font-size: 120px;
    line-height: 123px;
  `}

  ${mq.tabletSmall`
    font-size: 110px;
    line-height: 113px;
  `}

  ${mq.tabletSmall`
    font-size: 70px;
    line-height: 73px;
    max-width: 340px;
    letter-spacing: -2px;
  `}

  ${mq.mobile`
    font-size: 56px;
    line-height: 62px;
    padding: 50px 0;
  `}
`;

const NameSpan = styled.span`
  text-decoration: underline;
`;

const Hero = () => {
  // const [navIsOpen, setNavIsOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log(window.scrollY);

    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
    });

    return window.removeEventListener('scroll', null);
  });

  return (
    <HeroSection>
      <HeroContainer>
        <NameTitle>
          Hello I’m <NameSpan>Jamie Burnip</NameSpan>
        </NameTitle>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
