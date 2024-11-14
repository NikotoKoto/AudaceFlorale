import React from "react";
import styled from "styled-components";
import Navbar from "../../components/layout/navbar/Navbar";
import Footer from "../../components/layout/footer/Footer";
import { useOrder } from "../../context/OrderContext";

// Typage des articles du panier
interface BasketItem {
  imageSource?: string; // Image source (optionnel)
  title: string; // Titre du produit
  size: string; // Taille sélectionnée
  color: string; // Couleur sélectionnée
  price: number; // Prix du produit
}

const BasketPage: React.FC = () => {
  const { basketItems } = useOrder(); // Récupère les articles du panier

  return (
    <BasketPageStyled>
      <Navbar />
      <h1 className="basketTitle">Votre Panier</h1>
      <div className="cardContent">
        {basketItems.length > 0 ? (
          basketItems.map((item: BasketItem, index: number) => (
            <div key={index} className="descBasketContent">
              <div className="imgProduct">
                <img
                  src={item.imageSource || "/images/default-product.png"}
                  alt={item.title || "Produit"}
                />
              </div>
              <div className="productDetails">
                <div className="titleProduct">{item.title}</div>
                <div className="sizeProduct">Taille : {item.size}</div>
                <div className="colorProduct">Couleur : {item.color}</div>
                <div className="priceProduct">Prix : {item.price} €</div>
              </div>
              <div className="countDelete">
                <div className="countProduct">
                  <button aria-label="Diminuer la quantité">-</button>
                  <span>1</span> {/* Vous pouvez ajouter une logique pour gérer les quantités */}
                  <button aria-label="Augmenter la quantité">+</button>
                </div>
                <div className="bin" aria-label="Supprimer l'article">
                  🗑️ {/* Icône de poubelle */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Votre panier est vide</p>
        )}
      </div>
      <Footer />
    </BasketPageStyled>
  );
};

const BasketPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  .basketTitle {
    margin: 25px 0 50px 0;
  }

  .cardContent {
    width: 800px;
    gap: 20px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);
    padding: 20px;

    .descBasketContent {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 25px;
      align-items: center;
    }

    .imgProduct {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 150px;

      img {
        width: 100%;
        height: auto;
        border-radius: 5px;
        object-fit: cover;
      }
    }

    .productDetails {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;

      .titleProduct {
        font-size: 18px;
        font-weight: bold;
      }

      .sizeProduct,
      .colorProduct,
      .priceProduct {
        font-size: 14px;
        color: #555;
      }
    }

    .countDelete {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .countProduct {
        display: flex;
        align-items: center;
        gap: 5px;

        button {
          padding: 5px;
          font-size: 14px;
          background: none;
          border: 1px solid #ddd;
          cursor: pointer;

          &:hover {
            background-color: #f0f0f0;
          }
        }
      }

      .bin {
        cursor: pointer;

        &:hover {
          color: red;
        }
      }
    }
  }
`;

export default BasketPage;
