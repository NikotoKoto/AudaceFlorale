import React from "react";
import styled from "styled-components";
import SocialMedia from "./Contact";
import FooterNavbar from "./FooterNavbar";
import LegalMention from "./LegalMention";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <div className="content-footer">
        <SocialMedia />
        <FooterNavbar />
        <LegalMention />
      </div>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.div`
  width: 100%;
  height: 250px;
  background: #0a0d30;
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: auto;

  .content-footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-family: "Dancing Script";
  }
`;
