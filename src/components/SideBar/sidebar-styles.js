import styled from "styled-components";

const SidebarStyles = styled.div`
flex: 1 1 .40;
width: 40%;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: space-between;

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
    height: 96vh;
    width: 100%;
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
      text-decoration-color: tomato;
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
      color: tomato;
    }
    nav {
      padding: 50px 0 0 0;
      width: 100%;
    }


    .btn{
      border-radius: 20px 0 20px 0;
      margin-right: 5%;
      padding: 8px 25px 8px 25px;
      outline: none;
      border: none;
      border-radius: 50px;
      position: relative;
      font-size: 1.4rem;
      background-color: transparent; /* //!Button default is ugly gray */
      mix-blend-mode: difference;
      color: blue;

      &::before{
        transition: all 0.75s cubic-bezier(0.68, -.55, 0.265, 1.55);
        content: '';
        width: 45px; /*<!> this is hard coded... a better way?*/
        height: 100%;
        background-color: orange;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50px; /* 50px; px makes the corners max round without making oval */
        mix-blend-mode: difference;
        & .btn-text{
          color: blue;
          mix-blend-mode: difference;
        }
      }
        &:hover{
          color: blue;
          &::before{
            width:100%; /*this is the dimension of the background after hover transition */
            background-color: red;
          }
        }
    }
  }

    footer{
      height: 3vh;
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












    /* FROM BEFORE TINKERING WITH BUTTON CSS */
    /* nav button {
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
    } */
    /* FROM BEFORE TINKERING WITH BUTTON CSS */