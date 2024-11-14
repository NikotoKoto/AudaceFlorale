import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Panier from "../../../pages/Basket/BasketPage";


const NavbarRightSide: React.FC = () => {
  const { FirstName } = useParams();

  return (
    <NavbarRightSideStyled>
      <a className="navbar-a">
        {FirstName ? (
          `Bonjour ${FirstName}`
        ) : (
          <Link to={"/login"}>Se connecter</Link>
        )}
      </a>
      <a className="navbar-a"><Link to={"/basket"}>Panier</Link></a>
      <a className="navbar-a">
        <CiSearch />
      </a>
    </NavbarRightSideStyled>
  );
}

export default NavbarRightSide

const NavbarRightSideStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .navbar-a, a{
    margin-left: 30px;
    color: #0a0d30;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
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
