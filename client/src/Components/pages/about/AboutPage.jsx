import React from "react";
import styled from "styled-components";
import Navbar from "../../reusable-ui/navbar/Navbar";
import content from "./Description";
import Description from "./Description";
export default function AboutPage() {
  return (
    <AboutPageStyled>
      <Navbar />
      <div className="containerAbout">
        <Description />
      </div>
    </AboutPageStyled>
  );
}

const AboutPageStyled = styled.div`
  .containerAbout {
    padding-top: 50px;
    max-width: 740px; /* Limite la largeur du conteneur */
    margin: 0 auto;   /* Centre horizontalement le conteneur */
    display: flex;
    justify-content: center;
    flex-direction: column; /* Aligne les éléments de haut en bas */
    text-align: center; /* Centre le texte à l'intérieur du conteneur */
  }
`;
