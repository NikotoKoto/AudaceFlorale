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
  position: sticky;
  background: white;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;
