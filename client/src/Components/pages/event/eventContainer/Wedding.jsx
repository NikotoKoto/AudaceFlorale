import React from "react";
import styled from "styled-components";
import Button from "../../../reusable-ui/Button";

export default function Wedding() {
  return (
    <WeddingStyled>
      <div className="image-stack">
        <img
          src="images/WeddingImage/carsFlower.jpg"
          alt=""
          className="image img1"
        />
        <img
          src="images/WeddingImage/ceremonyWedding.jpg"
          alt=""
          className="image img2"
        />
      </div>
      <div className="textWeddingContent">
        <h1 className="weddingTitle">Mariage</h1>
        <p className="weddingText">
          Les défis se relèvent, les projets se construisent et votre céremonies
          s’impregnent d’un esprit singulier et remarquable.
          </p>
          <p className="weddingText">
          Le personnel d'Audace Florale mettent a votre service tout leur savoir
          faire et leur expérience pour vous offrir une décoration florale
          unique et inoubliable.
          </p>
          <p className="weddingText">
          C’est en nous inspirant de votre style, du lieu et des couleurs que
          nous ferons de cet événement le plus beau jour de votre vie !
        </p>

        <Button label="Découvrir" className="Wedding-btn" onClick={() => {}} />
      </div>
    </WeddingStyled>
  );
}

const WeddingStyled = styled.div`
  display: flex;
  width: calc(100% - 100px);
  height: 500px;
  margin: 0 auto;
  padding: 20px 0;

  .image-stack,
  .textWeddingContent {
    width: 50%;
  }

  .image-stack {
    position: relative;
  }
  .image {
    width: 50%;
    height: 100%;
    max-width: 50%;
    position: absolute;
    opacity: 0;
    animation: fadeIn 1s ease forwards;
  }

  .img1 {
    top: 0;
    left: 0;
    object-fit: cover;
    animation-delay: 0.3s;
  }
  .img2 {
    top: 0px;
    left: 460px;
    object-fit: cover;
    animation-delay: 1s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .textWeddingContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 100px;

    .weddingTitle {
      font-size: 60px;
      font-weight: 400;
      color: #0a0d30;
      font-family: "Dancing Script";
      margin-bottom: 50px;
    }

    .weddingText {
        margin: 5px;
      font-size: 25px;
      font-weight: 400;
      color: #0a0d30;
      font-family: "Dancing Script";
      text-align: justify;
    }

    .Wedding-btn{
        width: 30%;
    }
  }
`;
