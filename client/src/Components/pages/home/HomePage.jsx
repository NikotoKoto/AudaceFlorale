import React from "react";
import styled from "styled-components";
import Navbar from "../../reusable-ui/navbar/Navbar";
import CarousselPage from "./homeContainer/caroussel/CarousselPage";
import HomeContext from "../../../context/HomeContext";
import Footer from "../../reusable-ui/footer/Footer";
import Description from "./homeContainer/Description";
import { useImageHome } from "../../../hooks/useImageHome";

export default function HomePage() {
  //state

  const { imageCaroussel, setImageCaroussel, imageDesc, setImageDesc } =
    useImageHome();
  const HomeContextValue = {
    imageCaroussel,
    setImageCaroussel,
    imageDesc,
    setImageDesc,
  };
  //Comportement

  //render
  return (
    <HomeContext.Provider value={HomeContextValue}>
      <HomePageStyled>
        <Navbar />

        <CarousselPage images={imageCaroussel} />
        <Description imageDesc={imageDesc} />
        <Footer />
      </HomePageStyled>
    </HomeContext.Provider>
  );
}

const HomePageStyled = styled.div``;
