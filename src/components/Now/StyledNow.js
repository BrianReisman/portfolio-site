import styled from 'styled-components';

const NowStyles = styled.div`
h1{
  font-size: 3rem;
  color: #473144;
}
p{
  font-size: 2rem;
}
em{
  font-style: italic;
}
li{
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
  .icons{
    display: inline-block;
  }
`

export default NowStyles;