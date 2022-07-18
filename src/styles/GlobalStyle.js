import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --lightgreen-bg: #e1eedd;
    --green-1: #397754;
    --deep-green: #416a59;
    --green-2: #363636;
    --white : white;
    --black: black;
  }
  html{
    font-size: 14px;
    font-family: 'Roboto Mono';
    background-color: var(--white);
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
