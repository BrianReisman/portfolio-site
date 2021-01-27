import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 15vh;
  list-style: none;
  nav{
    display: flex;
    width: 100%;
  }
  nav a {
    //can target NavLink with a tag
    text-decoration: none;
    font-size: 2.2rem;
  }
  * {
    /* border: 1px solid blue; */
  }
  /* border: 1px solid blue; */
`;

export default StyledNav;
