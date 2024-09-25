import React from 'react'
import styled from 'styled-components'
import SocialMedia from './Contact'
import FooterNavbar from './FooterNavbar'
import LegalMention from './LegalMention'

export default function Footer() {
  return (
    <FooterStyled>
        <SocialMedia/>
        <FooterNavbar/>
        <LegalMention/>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
position: relative;
bottom: 0;
left: 0;
width: 100%;
height: 250px;
background: #0a0d30;
color: white;
display: grid;
grid-template-columns: repeat(3, 1fr);
font-family: "Dancing Script";
`