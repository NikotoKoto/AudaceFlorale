import React from "react";
import styled from "styled-components";
import Navbar from "../../components/layout/navbar/Navbar";
import Footer from "../../components/layout/footer/Footer";
import Description from "./Description";

const AboutPage: React.FC = () => {
  return (
    <AboutPageStyled>
      <Navbar />
      <div className="title">
        <h1>Notre Histoire</h1>
      </div>
      <Description />
      <Footer />
    </AboutPageStyled>
  );
};

const AboutPageStyled = styled.div`
  background: linear-gradient(135deg, #b2b5e0, #ffffff);

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0 50px 0;

    h1 {
      color: #0a0d30;
      font-family: "Dancing Script";
      font-style: italic;
      font-size: 70px;
    }
  }
`;

export default AboutPage;
