import React from "react";
import Cards from "../../../components/reusable/Cards";
import styled from "styled-components";

// Define the props for LastCreation
interface LastCreationProps {
  lastCreationMenu: {
    id: string | number;
    title: string;
    price: number;
    imageSource: string;
  }[];
}

const LastCreation: React.FC<LastCreationProps> = ({ lastCreationMenu }) => {
  return (
    <LastCreationStyled>
      <div className="titleContainer">
        <h1>Nos dernières créations</h1>
      </div>
      <div className="lastCreationCardContainer">
        {lastCreationMenu.map(({ id, title, price, imageSource }) => (
          <Cards
            className="backgroundCards"
            key={id}
            imageSource={imageSource}
            price={price}
            title={title}
            productId={id}
          />
        ))}
      </div>
    </LastCreationStyled>
  );
};

const LastCreationStyled = styled.div`
  background: linear-gradient(135deg, #adaebe, #fff4f4);
  padding-top: 50px;

  .titleContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: #0a0d30;
      font-size: 40px;
      font-family: "Dancing Script";
      text-transform: uppercase;
    }
  }

  .lastCreationCardContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 50px;
    justify-items: center;
  }

  .backgroundCards {
    background-color: white;
  }
`;

export default LastCreation;
