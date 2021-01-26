import styled from "styled-components";

const StyledProjectCard = styled.div`
  background-color: antiquewhite;
  border: 1px solid gold;
  width: 50%;
  max-height: 50%;
  word-wrap: break-word;
  padding: 5px;
  margin: 5px;

  a, h1 {
    font-size: 3.2rem;
    color: black;
    text-decoration: none;
  }
  :hover {
    a, h1 {
      transition-duration: 0.2s;
      color: tomato;
      cursor: pointer;
    }
  }
  img {
    border-radius: 8px;
    width: 100%;
    height: auto;
  }
`;

export default StyledProjectCard;
