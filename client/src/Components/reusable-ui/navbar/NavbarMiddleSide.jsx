import styled from 'styled-components'
import {Link} from "react-router-dom"
export default function NavbarLeftSide() {
  return (
    <NavbarMiddleSideStyled>
      <Link to={"/"}><h1 >Audace Florale</h1></Link>
      
      <div className='navbar-menu'>

        <ul>
            <li><Link to={"/about"} >A propos de nous</Link></li>
            <li><Link to={"/order"}>Commander un bouquet</Link></li>
            <li><Link to={"/wedding"}>Mariages</Link></li>
            <li><Link to={"/mourning"}>Deuils</Link></li>
            <li><Link to={"/company"}>Entreprises</Link></li>
        </ul>
        </div>
    </NavbarMiddleSideStyled>
  )
}

const NavbarMiddleSideStyled = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
    font-family: "Dancing Script", serif;
    color: #0a0d30;
    font-size: 60px;
    text-transform: uppercase;
  
  }

   .navbar-menu {
    position: absolute; /* Pour fixer le menu en bas */
    bottom: 0; /* Aligne le menu en bas */
    left: 0;
    right: 0;
    display: flex;
    justify-content: center; /* Centrer le menu horizontalement */
    align-items: flex-end; /* Aligner les items en bas */
  }

  ul {
    display: flex; /* Pour mettre les éléments en ligne */
    list-style: none; /* Supprimer les puces des li */
    padding: 0;
    margin: 0;
  }


    a{
      margin: 0 15px; /* Espacement entre les items */
    color: #0a0d30;
    font-size: 20px;
    font-family: "Dancing Script", serif;
    cursor: pointer;
      text-decoration: none;

      &:hover{
        color: grey;
      }
      
    }
  
`