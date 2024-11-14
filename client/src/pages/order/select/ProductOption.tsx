import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import Navbar from "../../../components/layout/navbar/Navbar";
import Footer from "../../../components/layout/footer/Footer";
import { IoChevronForward } from "react-icons/io5";
import { DataSelection } from "./Color&SizeSelection";
import Button from "../../../components/reusable/Button";
import CardItem from "./CardItem";

export default function ProductOption() {
  const navigate = useNavigate();
  const { productId } = useParams(); // Récupère l'id du produit depuis l'URL
  const { menu, setItemSelected, addItemToBasket } = useContext(OrderContext);

  // Trouve le produit dans le menu en fonction de l'ID
  const product = menu.find((item) => item.id.toString() === productId);

  // Vérifie si le produit existe
  if (!product) {
    return <div>Produit introuvable</div>;
  }

  const { imageSource, title, price } = product;

  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();

  const isDisabled = !selectedColor || !selectedSize;

  const handleBasketClick = () => {
    if (!isDisabled) {
      const item = {
        ...product, // Reprend toutes les propriétés du produit
        color: selectedColor,
        size: selectedSize,
        quantity: 1,
      };

      setItemSelected(item);
      addItemToBasket(item);
      navigate("/basket");
    } else {
      alert("Veuillez choisir une couleur et une taille");
    }
  };

  const handleColorClick = (colors: string) => setSelectedColor(colors);
  const handleSizeClick = (size: string) => setSelectedSize(size);

  return (
    <ProductOptionStyled>
      <Navbar />
      <div className="container">
        <div className="image">
          <img src={imageSource} alt={title} />
          <p>Photo non contractuelle - les fleurs peuvent +/- varier selon l’arrivage hebdomadaire.</p>
        </div>
        <div className="infos">
          <h3 className="title">{title}</h3>
          <h4 className="price">{price} € ou plus</h4>
          <div className="colors">Couleur(s)</div>
          <div className="CardItem">
            {DataSelection.COLORS.map(({ id, colors }) => (
              <CardItem
                key={id}
                value={colors}
                onClick={() => handleColorClick(colors)}
                isSelected={selectedColor === colors}
              >
                
              </CardItem>
            ))}
          </div>
          <div className="size">Taille</div>
          <div className="CardItem">
            {DataSelection.SIZE.map(({ id, size }) => (
              <CardItem
                key={id}
                value={size}
                onClick={() => handleSizeClick(size)}
                isSelected = {selectedSize === size}
              >
                
              </CardItem>
            ))}
          </div>
        </div>
      </div>
      <div className="delivery">
        <h1>UNE LIVRAISON 100% GARANTIE !</h1>
        <hr />
        <p>{DataSelection.paragrapheDelivery}</p>
        <Button
          className="product-btn"
          label="Ajouter au panier"
          Icon={<IoChevronForward />}
          onClick={handleBasketClick}
          disabled={isDisabled}
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
    padding: 20px 0 50px 0;
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
      max-width: 45%;
    }
  }
`;

