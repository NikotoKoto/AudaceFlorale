import React from "react";
import styled from "styled-components";
import Navbar from "../../reusable-ui/navbar/Navbar";

export default function BasketPage() {
  return (
    <BasketPageStyled>
      <Navbar />
      <h1 className="title">Panier</h1>
      <hr />
      <div className="basketHeader">
        <div className="headerProduct">Produit</div>
        <div className="headerPrice">Prix</div>
        <div className="headerQuantity">Quantité</div>
        <div className="headerTotal">Total</div>
      </div>
      <div className="containerBasket">
        <div className="containerProduct">
          <img src="/images/testBasket.png" alt="Produit" className="product-image" />
          <div className="product-details">
            <h3 className="titleProduct">Abonnement Bouquet</h3>
            <p className="product-description">3 mois (6 bouquets) / Non merci</p>
          </div>
        </div>
        <div className="containerPrice">
          <div className="price">€270,00</div>
        </div>
        <div className="containerQuantity">
          <button className="quantity-btn">-</button>
          <input className="quantity"  value="1" />
          <button className="quantity-btn">+</button>
        </div>
        <div className="containerTotal">
          <div className="total">€270,00</div>
        </div>
        <button className="remove-item">×</button>
      </div>
    </BasketPageStyled>
  );
}

const BasketPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    padding: 50px 0 15px 0;
    text-align: center;
  }

  hr {
    border: 3.5px solid #0e0830;
    margin-bottom: 50px;
    width: 5%;
  }

  /* Ajout des styles pour les titres de chaque colonne */
  .basketHeader {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr auto;
    align-items: center;
    gap: 20px;
    width: 80%;
    padding: 10px 0;
    font-weight: bold;
    color: #7a7a7a;
    border-bottom: 1px solid #e6e6e6;


  }

  .basketHeader div {
    text-align: center;
  }

  /* Conteneur du produit, prix, quantité, total et suppression */
  .containerBasket {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr auto;
    align-items: center;
    gap: 20px;
    padding: 15px;
    border-bottom: 1px solid #e6e6e6;
    width: 80%;
  }

  .containerProduct {
    display: flex;
    align-items: center;
  }

  .product-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 15px;
  }

  .product-details {
    display: flex;
    flex-direction: column;
  }

  .titleProduct {
    font-weight: bold;
    font-size: 18px;
    margin: 0;
  }

  .product-description {
    font-size: 14px;
    color: #7a7a7a;
  }

  .containerPrice,
  .containerTotal {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }

  .containerQuantity {
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .quantity-btn {
    background: #f4f4f4;
    border: 1px solid #ccc;
    padding: 5px 10px;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }



  .quantity {
    width:30px;
    height: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
  }

  .remove-item {
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #e74c3c;
  }

  @media (max-width: 768px) {
    .basketHeader,
    .containerBasket {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .containerProduct,
    .containerPrice,
    .containerQuantity,
    .containerTotal {
      text-align: left;
    }

    .containerProduct {
      flex-direction: column;
      align-items: flex-start;
    }

    .remove-item {
      align-self: flex-start;
    }
  }
`;
