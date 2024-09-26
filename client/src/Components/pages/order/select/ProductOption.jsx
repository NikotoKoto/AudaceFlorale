import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import Navbar from "../../../reusable-ui/navbar/Navbar";
import Footer from "../../../reusable-ui/footer/Footer";

export default function ProductOption() {
  return (
    <ProductOptionStyled>
      <Navbar/>
      <div className="container">
        <div className="image">
          <img />
        </div>
        <div className="infos">
          <div className="title">September Mood</div>
          <div className="price">35 € ou plus</div>
        
            <div className="colors">Couleurs</div>
            <div className="CardItem">
              <CardItem value="Rose"/>
              <CardItem />
              <CardItem />
            </div>
          
          <div className="size">Taille</div>
          <div className="CardItem">
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
        </div>
        <div className="delivery"></div>
      </div>

      <Footer/>
    </ProductOptionStyled>
  );
}

const ProductOptionStyled = styled.div`
  .container {
    padding-top: 50px;
    max-width: 740px;
    height: 450px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 20px;
    justify-content: start; 
    align-items: start; 
  }

  .image {
    width: 100%;
    height: 100%;
    background: red;
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
    margin-bottom: 25px;
    height: 25px;
    border: 1px solid black;
    text-align: left; 
  }

  .price {
    width: 100%;
    height: 25px;
    margin-bottom: 25px;
    border: 1px solid black;
    text-align: left; 
  }



.color{

}

 
  .CardItem {
    display: flex; 
    gap: 15px; 
    justify-content: flex-start;
    padding: 25px;
  }

  .size {
    width: 100%;
    height: 25px;
    margin-bottom: 25px;
    border: 1px solid black;
    text-align: left; 
  }
`;
