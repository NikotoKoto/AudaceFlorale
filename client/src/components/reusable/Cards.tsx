import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OrderContext from "../../context/OrderContext"; // Importez votre contexte global

interface CardProps {
  productId: string | number,
  imageSource: string;
  title: string;
  price: number;
  isHoverable?: boolean;
  color?: string;
  isSelectedCardOrder?: boolean;
  className?: string;
}

const Cards: FC<CardProps> = ({
  productId,
  imageSource,
  title,
  price,
  isHoverable,
  color,
  isSelectedCardOrder,
  className,
}) => {
  const { setItemSelected } = useContext(OrderContext); // Utilisation du contexte global

  const handleSelect = () => {
    // Mettez à jour le contexte avec les informations du produit sélectionné
    setItemSelected({
      id: new Date().getTime().toString(), // Génère un ID unique (ou utilisez un ID existant)
      imageSource,
      title,
      price,
      quantity: 1,
      isAvailable: true,
      isAdvertised: false,
    });
  };

  return (
    <CardStyled
      className={className}
      isSelectedCardOrder={isSelectedCardOrder}
    >
      <div className="imgCards">
        <img src={imageSource} alt={title} />
      </div>
      <div className="title">{title}</div>
      <div className="price">à partir de {price} € </div>
      <Link
        to={`/product/${productId}`} // Redirige vers la page du produit
        onClick={handleSelect} // Met à jour le contexte au clic
        className="hoverText"
      >
        Selectionner les options
      </Link>
    </CardStyled>
  );
};

export default Cards;

const CardStyled = styled.div<{ isSelectedCardOrder?: boolean }>`
  box-sizing: border-box;
  width: 400px;
  height: 500px;
  display: grid;
  grid-template-rows: 87% 1fr;
  box-shadow: -8px -8px 20px 0px rgb(0 0 0 / 10%);
  position: relative;

  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }

  .imgCards {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    display: flex;
    align-items: center;
    font-size: 20px;
    padding-left: 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Dancing Script", serif;
  }

  .price {
    font-size: 15px;
    text-transform: uppercase;
    padding-left: 5px;
    padding-bottom: 5px;
    font-family: "Dancing Script", serif;
    font-weight: bold;
  }

  .hoverText {
    position: absolute;
    bottom: 13%;
    width: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    color: white;
    background-color: #0a0d30;
    padding: 10px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }

  &:hover .hoverText {
    opacity: 1;
  }

  &:active .hoverText {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%) scale(0.95);
  }
`;
