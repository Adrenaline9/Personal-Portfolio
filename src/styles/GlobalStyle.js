import { createGlobalStyle } from 'styled-components';
import "../style.css";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --lavender: lavenderblush; 
    --white : white;
    --black: black;
    --gray: ;
  }
  html{
    font-size: 14px;
    background-color: var(--green-2);
    color: var(--black);
    width: 100%;
  }

  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
    background-color: var(--black);
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
`;
export default GlobalStyle;
