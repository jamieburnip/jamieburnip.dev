import React from 'react';
import styled from 'styled-components';
import config from '../../data/SiteConfig';

const red = '#f44647';

const Section = styled.section`
  position: relative;
  padding: 1.5rem 2rem;
`;

const EmailDiv = styled.div`
  padding: 2.5rem 0;
  text-align: center;

  a {
    color: #000;
    font-size: 2rem;
    padding: 1.5rem 2rem;
    border: solid 2px ${red};
    font-family: 'Roboto', sans-serif;

    &:hover {
      text-decoration: none;
    }
  }
`;

const SocialList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  justify-content: center;
`;

const SocialListItem = styled.li`
  display: block;
  list-style: none;
  position: relative;

  & a {
    color: #000;
    width: 100%;
    font-size: 12px;
    line-height: 30px;
    letter-spacing: 5px;
    padding: 1.25em 2.5em;
    margin-right: -10px;
    display: inline-block;

    &:hover {
      color: ${red};
      text-decoration: none;
    }
  }
`;

const SocialLinks = () => (
  <Section>
    <EmailDiv>
      <a href={`mailto:${config.siteEmail}`}>Let’s Talk</a>
    </EmailDiv>
    <SocialList>
      {config.socialLinks.map(({ label, url }) => (
        <SocialListItem key={`${label}Link`}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        </SocialListItem>
      ))}
    </SocialList>
  </Section>
);

export default SocialLinks;
