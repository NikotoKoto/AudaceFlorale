import React from 'react';
import styled from 'styled-components';

export default function Description() {
  return (
    <DescriptionStyled>
      <img src='/images/aboutAsset/fleur.jpg' alt="Fleur" />
      <div className="description">
        Audace Florale est une entreprise née de la passion et de l’amour.
        Yann à souhaité ouvrir sa première boutique en 1996, à Gouvieux (60).
        Souhaitant agrandir son entreprise et la transformer en réel concept-store,
        Yann s’est installé à Chantilly (60) en 2019. Son envie d’allier fleuriste 
        et décorateur, brocante et salon de thé fût un grand succès pour les consommateurs.
        Yann et Pascal, gérants de l’entreprise, xsdfkldosb fdjskzs
      </div>
    </DescriptionStyled>
  );
}

const DescriptionStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start; 
  gap: 20px; 
  padding-bottom: 50px;

  img {
    width: 40%; 
    height: auto;
  }

  .description {
    width: 60%; 
    text-align: left;
    font-size: 16px;
    line-height: 1.5;
  }
`;
