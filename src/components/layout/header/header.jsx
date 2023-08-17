import React from "react";
import Nav from "../nav/nav";
import Logo from "/src/components/ui/logo/logo";
import { StyledSection } from "./styles";

function Header() {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav />
    </StyledSection>
  );
}

export default Header;
