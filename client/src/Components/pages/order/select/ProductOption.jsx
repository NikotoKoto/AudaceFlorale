import styled from "styled-components";
import CardItem from "./CardItem";
import Navbar from "../../../reusable-ui/navbar/Navbar";
import Footer from "../../../reusable-ui/footer/Footer";
import Button from "../../../reusable-ui/Button";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { fakeDataSelection } from "./Color&SizeSelection";
import { useState } from "react";

export default function ProductOption() {
  //state
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();

  //comportement
  const handleBasketClick = () => {
    navigate("/basket");
  };

  const handleColorClick = (colors) => {
    setSelectedColor(colors);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  console.log(selectedColor);
  //render
  return (
    <ProductOptionStyled>
      <Navbar />
      <div className="container">
        <div className="image">
          <img src="/images/testBasket.png" />
          <p>
            photo non contractuelle - les fleurs peuvent +/- varier selon
            l’arrivage de fleurs hebdomadaire.
          </p>
        </div>
        <div className="infos">
          <h3 className="title">September Mood !</h3>
          <h4 className="price">35 € ou plus</h4>

          <div className="colors">Couleur(s)</div>
          <div className="CardItem">
            {fakeDataSelection.COLORS.map(({ id, colors }) => {
              return (
                <CardItem
                  key={id}
                  value={colors}
                  onClick={() => handleColorClick(colors)}
                  isSelected={selectedColor === colors}
                />
              );
            })}
          </div>

          <div className="size">Taille</div>
          <div className="CardItem">
            {fakeDataSelection.SIZE.map(({ id, size }) => {
              return (
                <CardItem
                  key={id}
                  value={size}
                  onClick={() => handleSizeClick(size)}
                  isSelected={selectedSize === size}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="delivery">
        <h1>UNE LIVRAISON 100% GARANTIE !</h1>
        <hr />
        <p>
          Vous avez choisis un bouquet de saison, confectionné par nos
          passionnés fleuristes. Audace Florale livre des bouquets de fleurs
          dans le secteur proche de son enseigne, mais afin de vous garantir une
          livraison parfaite, nous avons besoin d’un maximum d’informations. Nos
          livrés sont toujours contactés avant la livraison, afin que nous
          soyons sûr de leurs présence et de trouver une solution si ces
          derniers ne peuvent pas.
        </p>
        <Button
          className="product-btn"
          label="Acceder au panier"
          Icon={<IoChevronForward />}
          onClick={handleBasketClick}
        />
      </div>

      <Footer />
    </ProductOptionStyled>
  );
}

const ProductOptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    padding-top: 50px;
    max-width: 500px;
    height: 350px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 20px;
    justify-content: start;
    align-items: start;
  }

  .image {
    width: 100%;
    height: 70%;
    background: red;

    img {
      width: 100%;
      height: 100%;
      object-fit: center;
    }
    p {
      font-size: 13px;
      font-style: italic;
      color: #91aac0;
      font-family: "Dancing Script", serif;
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }

  .title {
    width: 100%;
    margin-bottom: 15px;
    height: 25px;
    text-align: left;
  }

  .price {
    width: 100%;
    height: 25px;
    margin-bottom: 15px;
    text-align: left;
  }

  .colors {
    border-top: 2px solid #dfd9d9;
    padding-top: 5px;
    text-transform: uppercase;
    width: 100%;
    font-weight: bold;
  }

  .CardItem {
    display: flex;
    gap: 15px;
    justify-content: flex-start;
    padding: 10px 0 10px 0;
  }

  .size {
    border-top: 2px solid #dfd9d9;
    padding-top: 5px;
    text-transform: uppercase;
    width: 100%;
    text-align: left;
    font-weight: bold;
  }

  .delivery {
    max-width: 36%;
    padding: 50px 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
      padding: 25px 0 25px 0;
    }
    hr {
      width: 5%;
      border: 3.5px solid black;
      margin: 25px 0 25px 0;
    }
    p {
      font-family: "Dancing Script", serif;
      font-size: 15px;
    }

    .product-btn {
      max-width: 40%;
    }
  }
`;
