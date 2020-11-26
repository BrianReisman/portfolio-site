import styled from "styled-components";

const SidebarStyles = styled.div`
flex: 1 1 .40;
width: 40%;


  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

/* Brian's Code */
    /* Brian's Code */
        /* Brian's Code */
            /* Brian's Code */
                /* Brian's Code */


  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 95vh;
    /* width: 100%; */
  } 
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0 0 0 10%;
  }
    header p {
      font-size: 1.6rem;
    }
    s {
      font-size: 1.4rem;
    }
    h1 {
      width: 100%;
      font-size: 6rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    span {
      color: tomato;
    }
    #secret{
      text-decoration: none;
    }
    #point {
      font-size: 3rem;
    }
    #aside {
      font-size: 1.1rem;
    }
    a {
      /* text-decoration: none; */
      color: tomato;
    }
    nav {
      padding: 50px 0 0 0;
      width: 100%;
    }
    nav button {
      color: tomato;
      font-size: 1.6rem;
      border-radius: 20px 0 20px 0;
      padding: 8px 25px 8px 25px;
      margin-right: 5%;
      background-color: transparent;
      border: none;
      outline: none;
    }
    nav button:hover {
      color: white;
      background-color: tomato;
      text-decoration: none;
    }
  }
  *{
    /* border: 1px dotted tomato; */
    }



    footer{
      height: 4vh;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
    footer code{
      font-size: 1rem;
      font-family: monospace;
    }
`;

export default SidebarStyles;