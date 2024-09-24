import React from "react";
import styled from "styled-components";
import Navbar from "../../reusable-ui/navbar/Navbar";

export default function AboutPage() {
  return (
    <AboutPageStyled>
      <Navbar />
      <div className="container">
        <div className="image et texte">
            <img></img>
            <div>texte</div>
        </div>
        <div className="Nous contacter"></div>
        <div className="horaire"></div>
      </div>
    </AboutPageStyled>
  );
}

const AboutPageStyled = styled.div``;
