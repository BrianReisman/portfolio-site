import React from "react";
import { NavItem } from "./NavItem/NavItem";
import StyledNav from "./StyledNav";
import ToggleTheme from '../ThemeToggle/ThemeToggle';

export default function Nav() {
  return (
    <StyledNav>
      <nav>
        <NavItem link="/now">Now</NavItem>
        <NavItem link="/projects">Projects</NavItem>
        <NavItem link="/contact">Contact</NavItem>
        <ToggleTheme/>
      </nav>
    </StyledNav>
  );
}
