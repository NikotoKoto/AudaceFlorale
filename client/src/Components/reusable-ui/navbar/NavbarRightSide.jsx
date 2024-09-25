import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

export default function NavbarRightSide() {
  return (
    <NavbarRightSideStyled>
      <span className="navbar-span"> Se connecter</span>
      <span className="navbar-span">Panier</span>
      <span className="navbar-span"><CiSearch />
      </span>
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .navbar-span {
    margin-left: 30px;
    color: #0a0d30;
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      color: grey;
      transform: scale(1.5);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  
`;
