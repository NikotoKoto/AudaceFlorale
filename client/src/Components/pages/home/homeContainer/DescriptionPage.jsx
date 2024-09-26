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
          <div className="titleCard">Coté Fleurs</div>
          <img />
        </div>
        <div className="sideBroc">
          <div className="titleCard">Coté Broc'</div>
          <img />
        </div>
        <div className="sideTea">
          <div className="titleCard">Coté salon de thé</div>
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
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;

  h1 {
    font-size: 35px;
    font-family: "Dancing Script", serif;
  }

  .description {
    width: 50%;
    padding: 25px;
    font-style: italic;
    line-height: 1.6;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .tripleContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 50px 0 50px;
    width: 100%;
    height: 400px;
    gap: 20px;
    overflow: hidden;
  }
  .titleCard {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    text-transform: uppercase;
    font-family: "Dancing Script", serif;
  }

  img {
    border: 1px solid black;
    width: 100%;
    height: 100%;
  }

  .sideFlower {
    width: 100%;
    height: 100%;
    background: red;
  }
  .sideBroc {
    width: 100%;
    height: 100%;
    background: blue;
  }
  .sideTea {
    width: 100%;
    height: 100%;
    background: green;
  }
`;
