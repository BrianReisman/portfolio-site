import styled from 'styled-components';

const HeaderStyles = styled.div`
border-bottom: 2px solid #ccc;
h1, div{
border: 1px solid tomato;
}
display: flex;
width: 90%;
justify-content: space-between;
align-items: center;
div{
  padding: 1%;
  background-color: rose;
  border-radius: 0 30px 0 30px;
  transition-property: all 1s;
  &::before{
    transition: 1s;
    content: '';
    display: none;
  }
  &:hover{
    background-color: tomato;
    &::before{
      content: '*';
      color: white;
      display: inline;
      background-color: black;
      border-radius: 50px;
    }
  }
}
  h1{
    font-size: 3rem;
    display: block;
  }
`;

export default HeaderStyles;