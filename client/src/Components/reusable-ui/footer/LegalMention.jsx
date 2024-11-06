import React from 'react'
import styled from 'styled-components'

export default function LegalMention() {
  return (
    <LegalMentionStyled>
      <h3>Les mentions légales</h3>
      <a href=''>CGV</a>
      <a href=''>CGU</a>
      <a href=''>Mentions légales fleuriste</a>
      <a href=''>Politique de confidentialité</a>
      <a href=''>Politique de retour et de remboursement</a>
      <a href=''>Politique d'expédition</a>
    </LegalMentionStyled>
  )
}

const LegalMentionStyled = styled.div`
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
a{
  padding-bottom: 10px;
  color: white;
  text-decoration: none;
  &:hover{
    transform: scale(1.1);
  }
}
`