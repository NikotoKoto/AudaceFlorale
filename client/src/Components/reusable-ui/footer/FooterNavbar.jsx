import React from 'react'
import styled from 'styled-components'

export default function FooterNavbar() {
  return (
    <FooterNavbarStyled>
      <h3>Audace Florale, pour vous servir</h3>
      <ul>
        <li><a href='/about'>A propos de nous</a></li>
        <li><a href="/order">Commander un bouquet</a></li>
        <li><a href="/wedding">Mariages</a></li>
        <li><a href="/mourning">Deuils</a></li>
        <li><a href="/company">Entreprises</a></li>
      </ul>
    </FooterNavbarStyled>
  )
}

const FooterNavbarStyled = styled.div`
  position: relative;
  top: 20px;
  align-items: baseline;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
margin-bottom: 15px;
h3{
  padding-bottom: 15px;
  text-transform: uppercase;
}
ul {
  list-style: none;

  li{
    padding-bottom: 10px;
    
    a{
      color: white;
      text-decoration: none;
     
         }

    &:hover{
      transform: scale(1.1);
    }
  }
}
 
`