import styled from 'styled-components'

export default function NavbarLeftSide() {
  return (
    <NavbarMiddleSideStyled>
      <h1>Audace Florale</h1>
      <div className='navbar-menu'>

        <ul>
            <li ><a href='/about'>A propos de nous</a></li>
            <li><a href="/order">Commander un bouquet</a></li>
            <li><a href="/wedding">Mariages</a></li>
            <li><a href="/mourning">Deuils</a></li>
            <li><a href="/company">Entreprises</a></li>
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

  li,a {
    margin: 0 15px; /* Espacement entre les items */
    color: #0a0d30;
    font-size: 20px;
    cursor: pointer;
    text-transform: none;
    text-decoration: none;

    &:hover {
      color: #ff6347; /* Changement de couleur au survol */
    }
  }
`