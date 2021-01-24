import React from "react";
import { NavItem } from "./NavItem/NavItem";
import StyledNav from "./StyledNav";

export default function Nav() {
  return (
    <StyledNav>
      <nav>
        <NavItem className='btn' link="/asdf">testChildren</NavItem>
        <NavItem className='btn' link="/asdf">testChildren</NavItem>
        <NavItem className='btn' link="/asdf">testChildren</NavItem>
      </nav>
    </StyledNav>
  );
}
