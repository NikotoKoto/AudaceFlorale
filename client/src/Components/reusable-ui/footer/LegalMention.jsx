import React from 'react'
import styled from 'styled-components'

export default function LegalMention() {
  return (
    <LegalMentionStyled>
      <h3>Les mentions légales</h3>
      <span>CGV</span>
      <span>CGU</span>
      <span>Mentions légales fleuriste</span>
      <span>Politique de confidentialité</span>
      <span>Politique de retour et de remboursement</span>
      <span>Politique d'expédition</span>
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
span{
  padding-bottom: 10px;
}
`