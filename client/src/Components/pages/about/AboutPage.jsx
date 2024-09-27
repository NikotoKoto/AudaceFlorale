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
    max-width: 740px; 
    margin: 0 auto;   
    display: flex;
    justify-content: center;
    flex-direction: column; 
    text-align: center; 
  }
`;
