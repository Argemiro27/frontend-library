import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export const colors = {
  primary: "#0d0d0d",
  secondary: "#b5b5b5",
  lightgreen: "#8AA6A3",
  yellow: "#ffa500",
  success: "#50ba9e",
  danger: "#660000",
  black: "#131313",
  white: "#cfcfcf",
  blackText: "#333",
  lightgray: "#303030",
  darkgray: "#080808",
};

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    background-color: ${colors.secondary};
    color: #000;
    font-family: 'Titillium Web', sans-serif;
    a{
        color: white;
    }
    a:hover{
        color: ${colors.yellow};
    }
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
        background-color: ${colors.black};
        width: 8px;
        height: 8px;
        width: 6px;
    }   
    ::-webkit-scrollbar-thumb {
        background-color: ${colors.yellow};
        }
  }
  h1{
    background-color: ${colors.primary};
    padding: 15px;
    border-radius: 10px;
    color: #10403B;
    text-align: center;
  }
  .subtitle{
    background-color: ${colors.primary};
    padding: 5px;
    border-radius: 10px;
    color: #10403B;
    text-align: center;
  }
  body {
    font-size: 16px;
    line-height: 1.4;

    color: ${colors.blackText};
  }
  .btnYellow{
    background-color: orange !important;
    color: #995e2b !important;
    font-weight: bold !important;
    border: none;
  }
  ul,
ol {
  list-style-type: none;
}
`;
