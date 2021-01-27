import styled from "styled-components";

const HeaderStyles = styled.div`
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
  /* border: 1px solid tomato; */
  display: flex;
  justify-content: center;
  h1,
  div {
    /* border: 1px solid tomato; */
  }
  div {
    padding: 1%;
    transition-property: all 1s;
    &::before {
      transition: 1s;
      content: "";
      display: none;
    }
    /* &:hover{
    /* background-color: tomato; */
    /* &::before{ */
    /* content: '*'; */
    /* color: white; */
    /* display: inline; */
    /* background-color: black; */
    /* border-radius: 50px; */
    /* } */
    /* } */
  }
  h1 {
    font-size: 3rem;
    display: block;
  }
  .container {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
  }
`;

export default HeaderStyles;
