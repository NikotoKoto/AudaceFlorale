import React from "react";
import styled from "styled-components";

// Define the prop types for the `CardHome` component
interface CardHomeProps {
  title: string;
  img: string;
}

const CardHome: React.FC<CardHomeProps> = ({ title, img }) => {
  return (
    <CardHomeStyled>
      <div className="titleCard">{title}</div>
      <div className="imageContainer">
        <img src={img} alt={title} />
      </div>
    </CardHomeStyled>
  );
};

export default CardHome;

const CardHomeStyled = styled.div`
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

  .imageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
