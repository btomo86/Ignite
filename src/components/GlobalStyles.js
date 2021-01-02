import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    &::-webkit-scrollbar {
        width: 0.5rem;

    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgray;

    }
}
body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  
}
h2 {
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    color: #ED1D24;
}
h3 {
    font-size: 1.3rem;
    color: #ED1D24;
    padding: 1.5rem;
}
p {
    font-size:1.2rem;
    line-height: 200%;
    color: #ED1D24;
}
a {
    text-decoration: none;
    color: #ED1D24
}

`;

export default GlobalStyles;
