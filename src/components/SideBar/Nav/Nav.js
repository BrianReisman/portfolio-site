import React from "react";
import {NavItem} from "./NavItem/NavItem";

export default function Nav() {
  return (
    <nav>
      <NavItem link='/asdf'>testChildren</NavItem>
      <NavItem link='/asdf'>testChildren</NavItem>
      <NavItem link='/asdf'>testChildren</NavItem>
    </nav>
  );
}
