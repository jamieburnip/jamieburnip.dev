import 'typeface-inter';
import 'typeface-roboto';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

html { 
  font-family: 'Inter', sans-serif; 
  font-feature-settings: 'dlig', 'zero', 'ss01', 'cv05', 'cv10';
}

@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  
}

footer {
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem 2rem;
    background-color: rgb(243, 243, 243);
}

`;

export default Global;
