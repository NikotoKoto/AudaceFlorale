import React from "react";
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import NavbarMiddleSide from "./NavbarMiddleSide";

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavbarRightSide/>
      <NavbarMiddleSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
`;
