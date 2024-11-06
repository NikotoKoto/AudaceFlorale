import React from "react";
import styled from "styled-components";
import Navbar from "../../reusable-ui/navbar/Navbar";
import Footer from "../../reusable-ui/footer/Footer";
import Description from "./Description";

export default function AboutPage() {
  return (
    <AboutPageStyled>
      <Navbar />
      <div className="title">
      <h1>Notre Histoire</h1>
      </div>
    
        <Description />
    <Footer/>
    </AboutPageStyled>
  );
}

const AboutPageStyled = styled.div`
 .title{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0 50px 0;

  h1{
  color: #0a0d30;
  font-size: 50px;
  font-family: "Dancing Script";
  font-style: italic;
  font-size: 70px;
  
}
 }
`;
