import { createGlobalStyle } from 'styled-components';
import '../style.css';

const GlobalStyle = createGlobalStyle`
*{    width: 100%;

    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --lavender: lavenderblush; 
    --white : white;
    --black: black;
    --crimson: crimson;
    --gray: gray;
  }
  html{
    font-size: 14px;
    background-color: var(--green-2);
    color: var(--black);
    margin: 0;
    padding: 0;
  }

  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container {
    max-width: 1500px;
    width: 70%;
    margin: auto;
  }
`;
export default GlobalStyle;
