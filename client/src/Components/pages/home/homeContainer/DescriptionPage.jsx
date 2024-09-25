import React from "react";
import styled from "styled-components";

export default function DescriptionPage() {
  return (
    <DescriptionPageStyled>
      <h1>AUDACE FLORALE, UN CONCEPT STORE UNIQUE</h1>
      <div className="description">
        Principalement fleuriste - décorateur, Yann est un réel passionné depuis
        1996. Dans son concept-store, il a souhaité nous transmettre sa passion
        floral, mais aussi son engouement pour les objets chinés avec soin. Vous
        pourrez découvrir ce lieu en prenant le temps de déguster un cookie
        végan au salon de thé !
      </div>
      <div className="tripleContainer">
        <div className="sideFlower">
          <img />
        </div>
        <div className="sideBroc">
          <img />
        </div>
        <div className="sideTea">
          <img />
        </div>
      </div>
    </DescriptionPageStyled>
  );
}

const DescriptionPageStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction:column;
  justify-content: center;

  h1 {
    font-size: 35px;
    font-family: "Dancing Script", serif;
  }

  .description{
    width: 50%;
    padding: 25px;
    font-style: italic;
    line-height: 1.6;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .tripleContainer{
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 50px 0 50px;
    width: 100%;
    height: 500px;
    gap:20px
    
  }

  .sideFlower{

    width: 100%;
    height: 400px;
    background: red;
  }
  .sideBroc{
    padding-left: 50px;
    width: 100%;
    height: 400px;
    background: blue;
  }
  .sideTea{
    width: 100%;
    height: 400px;
    background: green;
  }
`;
