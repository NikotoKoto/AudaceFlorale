import React from "react";
import styled from "styled-components";
import Navbar from "../../reusable-ui/navbar/Navbar";
import CarousselPage from "./homeContainer/caroussel/CarousselPage";
import HomeContext from "../../../context/HomeContext";
import Footer from "../../reusable-ui/footer/Footer";
import Description from "./homeContainer/Description";
import { useImageHome } from "../../../hooks/useImageHome";
import LastCreation from "./homeContainer/LastCreation";
import { useMenuLastCreation } from "../../../hooks/useMenu";

import GoogleReviewsWidget from "./homeContainer/GoogleReviews";
export default function HomePage() {
  //state
  const { lastCreationMenu, setLastCreationMenu } = useMenuLastCreation();
  const { imageCaroussel, setImageCaroussel, imageDesc, setImageDesc } =
    useImageHome();
  const HomeContextValue = {
    imageCaroussel,
    setImageCaroussel,
    lastCreationMenu,
    setLastCreationMenu,
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
        <hr className="hrHome"/>
        <Description imageDesc={imageDesc} />
        <hr className="hrHome"/>
        <LastCreation lastCreationMenu={lastCreationMenu} />
        <hr className="hrHome"/>
        <GoogleReviewsWidget/>
        <Footer />
      </HomePageStyled>
    </HomeContext.Provider>
  );
}

const HomePageStyled = styled.div`
  .hrHome {
    margin: 40px auto;
    width: 80px;
    color: #0a0d30;
    border-bottom: 5px solid black ;
  }
`;
