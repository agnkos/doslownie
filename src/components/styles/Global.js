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
  color: #070D0D;
}

h2, p {
  margin: 0;
  padding: 0;
}

img {
    display:block;
}

.colored {
  color: #8ac926;
}
`
export default GlobalStyles;