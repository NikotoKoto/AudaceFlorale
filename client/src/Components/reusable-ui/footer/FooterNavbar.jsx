import React from 'react'
import styled from 'styled-components'

export default function FooterNavbar() {
  return (
    <FooterNavbarStyled>
      <h3>Audace Florale, pour vous servir</h3>
      <ul>
        <li>A propos de nous</li>
        <li>Commander un bouqet</li>
        <li>Mariages</li>
        <li>Deuils</li>
        <li>Entreprises</li>
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
  }
}
 
`