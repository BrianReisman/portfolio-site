import React from "react";
import { NavItem } from "./NavItem/NavItem";
import StyledNav from "./StyledNav";

export default function Nav() {
  return (
    <StyledNav>
      <nav>
        <NavItem link="/now">Now</NavItem>
        <NavItem link="/projects">Projects</NavItem>
        <NavItem link="/contact">Contact</NavItem>
      </nav>
    </StyledNav>
  );
}
