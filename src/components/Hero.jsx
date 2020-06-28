import React from 'react';
import styled from 'styled-components';
import mq from './../style/mq';
import { wrapper, colors } from './../consts/style';

const HeroSection = styled.section`
  ${wrapper}
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;

  ${mq.lg`
    height: 60vh;
  `}

  ${mq.xl`
    height: 70vh;
  `}
`;

const NameTitle = styled.h1`
  text-align: center;
  color: ${colors.primary};
  font-style: italic;
  font-size: 2.5rem;
  line-height: 1.6em;

  ${mq.sm`
    font-size: 3rem;
  `}

  ${mq.md`
    font-size: 3.5rem;
  `}

  ${mq.lg`
    font-size: 4rem;
  `}

  ${mq.xl`
    font-size: 4.5rem;
  `}
`;

const NameSpan = styled.span`
  text-decoration: underline;
  font-style: normal;
  font-size: 1.3em;

  ${mq.sm`
    font-size: 1.4em;
  `}

  ${mq.md`
    font-size: 1.5em;
  `}

  ${mq.lg`
    font-size: 1.6em;
  `}

  ${mq.xl`
    font-size: 1.8em;
  `}
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <NameTitle>
          Hello I’m
          <br /> <NameSpan>Jamie Burnip</NameSpan>
        </NameTitle>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
