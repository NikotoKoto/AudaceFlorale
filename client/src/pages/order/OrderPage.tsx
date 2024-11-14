import React from "react";
import styled from "styled-components";
import Footer from "../../components/layout/footer/Footer";
import Navbar from "../../components/layout/navbar/Navbar";
import Cards from "../../components/reusable/Cards";
import { useOrder } from "../../context/OrderContext";

const OrderPage: React.FC = () => {
  const { menu } = useOrder();

  return (
    <OrderPageStyled>
      <Navbar />
      <div className="cardContainer">
        {menu.map(({ id, title, price, imageSource }) => (
          <Cards key={id}  productId={id} imageSource={imageSource} price={price} title={title} />
        ))}
      </div>
      <Footer />
    </OrderPageStyled>
  );
};

export default OrderPage;

const OrderPageStyled = styled.div`
  .cardContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
  }
`;
