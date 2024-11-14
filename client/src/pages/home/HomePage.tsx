import React, { createContext, ReactNode } from "react";
import styled from "styled-components";
import Navbar from "../../components/layout/navbar/Navbar";
import CarousselPage from "./homeContainer/caroussel/CarousselPage";
import Footer from "../../components/layout/footer/Footer";
import Description from "./homeContainer/Description";
import LastCreation from "./homeContainer/LastCreation";
import GoogleReviewsWidget from "./homeContainer/GoogleReviews";
import { useImageHome } from "../../hooks/useImageHome";
import { useMenuLastCreation } from "../../hooks/useMenu";

// Define the HomeContext type
interface HomeContextType {
  imageCaroussel: { src: string; title: string; buttonText: string; buttonLink: string }[];
  setImageCaroussel: React.Dispatch<React.SetStateAction<any[]>>;
  lastCreationMenu: any[];
  setLastCreationMenu: React.Dispatch<React.SetStateAction<any[]>>;
  imageDesc: { src: string; title: string; link?: string }[];
  setImageDesc: React.Dispatch<React.SetStateAction<any[]>>;
}

// Create HomeContext
export const HomeContext = createContext<HomeContextType | undefined>(undefined);

const HomePage: React.FC = () => {
  // State management hooks
  const { lastCreationMenu, setLastCreationMenu } = useMenuLastCreation();
  const { imageCaroussel, setImageCaroussel, imageDesc, setImageDesc } = useImageHome();

  const HomeContextValue: HomeContextType = {
    imageCaroussel,
    setImageCaroussel,
    lastCreationMenu,
    setLastCreationMenu,
    imageDesc,
    setImageDesc,
  };

  return (
    <HomeContext.Provider value={HomeContextValue}>
      <HomePageStyled>
        <Navbar />
        <CarousselPage images={imageCaroussel} />
        <hr className="hrHome" />
        <Description imageDesc={imageDesc} />
        <hr className="hrHome" />
        <LastCreation lastCreationMenu={lastCreationMenu} />
        <hr className="hrHome" />
        <GoogleReviewsWidget />
        <Footer />
      </HomePageStyled>
    </HomeContext.Provider>
  );
};

const HomePageStyled = styled.div`
  .hrHome {
    margin: 40px auto;
    width: 80px;
    color: #0a0d30;
    border-bottom: 5px solid black;
  }
`;

export default HomePage;
