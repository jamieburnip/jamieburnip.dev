import React from 'react';
import styled from 'styled-components';
import EmailLink from './../components/EmailLink';
import { wrapper, colors } from './../consts/style';

import config from '../../data/SiteConfig';

const Section = styled.section`
  ${wrapper}
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;

const EmailDiv = styled.div`
  padding: 2.5rem 0;
  text-align: center;
`;

const SocialList = styled.ul`
  margin: 4rem 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const SocialListItem = styled.li`
  display: block;
  list-style: none;

  & a {
    color: #000;
    width: 100%;
    font-size: 12px;
    line-height: 30px;
    letter-spacing: 5px;
    padding: 1.25em 3.5em;
    margin-right: -10px;
    display: inline-block;

    &:hover {
      color: ${colors.primary};
      text-decoration: none;
    }
  }
`;

const SocialLinks = () => (
  <Section>
    <EmailDiv>
      <EmailLink />
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
