import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: Poppins, sans-serif;
  margin: 0;
  padding: 0;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: background 0.2s ease-in, color 0.2s ease-in;
}

h2, p {
  margin: 0;
  padding: 0;
}

img {
    display:block;
}
`
export const lightTheme = {
  body: '#F7F7F7',
  text: '#070D0D'
};
export const darkTheme = {
  body: '#070D0D',
  text: '#F7F7F7'
};


export default GlobalStyles;

