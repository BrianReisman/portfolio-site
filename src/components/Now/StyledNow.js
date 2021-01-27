import styled from "styled-components";

const NowStyles = styled.div`
  /* border: 1px dotted tomato; */
  h1 {
    font-size: 3rem;
    color: #473144;
  }
  p {
    font-size: 2rem;
  }
  em {
    font-style: italic;
  }
  li {
    list-style-type: lower-roman;
    border-left: 5px solid tomato;
    margin: 25px 0 25px 75px;
    font-size: 1.5rem;
    padding-left: 1%;
  }
  //this is for the Icon component
  img {
    width: 25px;
    margin: 0 5px 0 5px;
    /* position: relative;
    right: 150px; */
  }
  .icons {
    display: inline-block;
  }
  .containerNowTop {
    padding-top: 15px;
    display: flex;
    justify-content: center;
  }
  blockquote {
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    padding: 15px 0;
    margin: 15px 0;
  }
`;

export default NowStyles;
