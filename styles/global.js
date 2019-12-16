import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Playfair+Display:400,400i,700,700i,900,900i&display=swap');

  body{
    margin: 0;
    font-family:${props => props.theme.font.family.body};
    color:${props => props.theme.color.type};
    background-color: ${props => props.theme.color.bg};
  }

  h1,h2,h3,h4,h5,h6{
    font-family:${props => props.theme.font.family.header};
    color:${props => props.theme.color.main};
    margin:0;
  }

  h1{
    font-size:1.625em;
    font-weight:900;
  }

  h2{
    font-size:1.5em;
    font-weight:700;
    width: max-content;
    margin-bottom:16px;
    padding:4px 0px;
    border-bottom:1px solid ${props => props.theme.color.accent}
  }

  h3{
    font-size:1.25em;
    line-height:1.6em;
    font-weight:700;
  }

  h6{
    font-size:0.75em;
    font-weight:400;
  }

  small{
    font-size:0.75em;
    font-weight:700;
    color:${props => props.theme.color.type};
  }

  p{
    font-size:1em;
    color:${props => props.theme.color.type};
    line-height:2em;
  }

  a{
    text-decoration:none;
    color:inherit;
    color:${props => props.theme.color.type};
  }

`;

export default GlobalStyle;
