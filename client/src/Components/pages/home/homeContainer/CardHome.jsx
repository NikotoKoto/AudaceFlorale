import React from "react";
import styled from "styled-components";

export default function CardHome({ title, img, link }) {
  return (
    
      <CardHomeStyled >
        
          <div className="titleCard">{title}</div>
          <a href={link}>
          <div className="imageContainer">
            <img src={img} alt={title} />
          </div>
        </a>
      </CardHomeStyled>
  );
}

const CardHomeStyled = styled.a`
  width: 100%;
  height: 600px;

  
 


  .titleCard {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    text-transform: uppercase;
    font-family: "Dancing Script", serif;
  }

  a{
  text-decoration: none;
  color: black;
}

  .imageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    &:hover{
    transform: scale(1.01);
    transition: 0.5s;

  }
  }

  img {
    width: 100%; 
    height: 100%;
    object-fit: cover;
  }
`;
