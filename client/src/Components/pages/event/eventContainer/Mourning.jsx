import React from "react";
import styled from "styled-components";
import { textMourning } from "./textEvent/textMourning";
import Button from "../../../reusable-ui/Button";
export default function Mourning() {

  
  return (
    <MourningStyled>
      <div className="mourningTextContain">
        <h1 className="mourningTitle">{textMourning.title}</h1>
        <p className="mourningText">{textMourning.text1}</p>
        <p className="mourningText">{textMourning.text2}</p>
        <p className="mourningText">{textMourning.text3}</p>
        <Button
        label="Découvrir"
        className="mourning-btn"
        onClick={()=>{}}
        />
      </div>
      <div className="mourningImage-stack">
        <img
          src="images/WeddingImage/flowerMourning.jpg"
          alt=""
          className="mourningImage img1"
          loading="lazy"
        />
        <img
          src="images/WeddingImage/candleMourning.jpg"
          alt=""
          className="mourningImage img2"
          loading="lazy"
        />
      </div>
    </MourningStyled>
  );
}

const MourningStyled = styled.div`
  display: flex;
  width: calc(100% - 100px);
  margin: 50px auto;
  padding: 20px 0;
  height: 500px;

  .mourningTextContain,
  .mourningImage-stack {
    width: 50%;
  }

  .mourningTextContain {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 100px;
  }
  .mourningTitle {
    font-size: 60px;
    font-weight: 400;
    color: #0a0d30;
    font-family: "Dancing Script";
    margin-bottom: 50px;
  }

  .mourningText {
    margin: 5px;
    font-size: 25px;
    font-weight: 400;
    color: #0a0d30;
    font-family: "Dancing Script";
    text-align: justify;
  }

  .mourning-btn{
    width: 30%;
  }

  .mourningImage-stack {
    position: relative;
  }

  .mourningImage {
    width: 50%;
    height: 100%;
    max-width: 50%;
    position: absolute;
    opacity: 0;
    animation: shiftRight 1s ease forwards;
  }

  .img1 {
    top: 0;
    right: 0;
    object-fit: cover;
    animation-delay: 2s;

  }

  .img2 {
    top: 0px;
    right: 460px;
    object-fit: cover;
    animation-delay: 2.5s;

  }

  @keyframes shiftRight {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
