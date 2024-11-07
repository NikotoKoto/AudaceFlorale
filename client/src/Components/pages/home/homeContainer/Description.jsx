import React from "react";
import styled from "styled-components";
import CardHome from "./CardHome";

export default function Description({imageDesc}) {
  return (
    <DescriptionPageStyled>
      <h1>AUDACE FLORALE, UN CONCEPT STORE UNIQUE</h1>
      <p className="description">
        Principalement fleuriste - décorateur, Yann est un réel passionné depuis
        1996. Dans son concept-store, il a souhaité nous transmettre sa passion
        floral, mais aussi son engouement pour les objets chinés avec soin. Vous
        pourrez découvrir ce lieu en prenant le temps de déguster un cookie
        végan au salon de thé !
      </p>
      <div className="tripleContainer">
        
         {imageDesc.map(({id,title, src, link}) => {
          return(
            <CardHome
            key={id}
            title={title}
            img={src} 
            />
          )
         })} 
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
    margin-bottom:50px
  }

  .tripleContainer {
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 50px 0 50px;
    width: 100%;
    height: 600px;
    gap: 20px;
    overflow: hidden;
  }
 
`;
