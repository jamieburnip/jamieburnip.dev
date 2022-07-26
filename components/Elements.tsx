import styled from "styled-components";

import { colors } from "../consts/style";

export const EmailLink = styled.a`
  color: #000;
  font-size: 2rem;
  padding: 1.5rem 2rem;
  border: solid 2px ${colors.primary};
  font-family: "Roboto", sans-serif;

  &:hover {
    color: ${colors.primary};
    text-decoration: none;
  }
`;
