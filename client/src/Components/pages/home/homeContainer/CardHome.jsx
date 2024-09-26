import React from "react";
import styled from "styled-components";

export default function CardHome({ title, img }) {
  return (
    <CardHomeStyled>
      <div className="titleCard">{title}</div>
      <img src={img} />
    </CardHomeStyled>
  );
}

const CardHomeStyled = styled.div`
  width: 100%;
  height: 100%;


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
`;
