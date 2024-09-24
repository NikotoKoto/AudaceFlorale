import React from 'react'
import styled from 'styled-components'
import Navbar from "../../reusable-ui/navbar/Navbar"
import CarousselPage from './homeContainer/caroussel/CarousselPage'
import HomeContext from '../../../context/HomeContext'
import Footer from "../../reusable-ui/footer/Footer"
import { useHome } from '../../../hooks/useHome'
export default function HomePage() {
//state

const {image, setImage} =useHome()
  const HomeContextValue = {
    image, setImage
  }
  //Comportement

  //render
    return (
    <HomeContext.Provider value={HomeContextValue}>
    <HomePageStyled>
      <Navbar/>
      
<div className="caroussel"><CarousselPage/></div>
      <div className='description'>
      <h1 className='title'>Audace Florale, un concept Store Unique </h1>
      <div className='description-subtitle'>Principalement fleuriste - décorateur, Yann est un réel passionné depuis 1996. Dans son concept-store, 
il a souhaité nous transmettre sa passion floral, mais aussi son engouement pour les objets chinés avec soin. 
Vous pourrez découvrir ce lieu en prenant le temps de déguster un cookie végan au salon de thé !</div>
<div className='img-Concept'>
  <div></div>
  <div></div>
  <div></div>

</div>
</div>
<Footer/>
    </HomePageStyled>
    </HomeContext.Provider>
  )
}

const HomePageStyled = styled.div`

  .caroussel{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: grey;
    border: 1px solid black;
    width: 80%;
    height: 500px;
  }
  .description {
    /* Supprime la propriété position relative qui n'est pas nécessaire ici */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    padding: 25px 50px;
    text-align: center; /* Pour centrer le texte */
  }
  
  .title {
    margin-top: 25px;
    text-transform: uppercase;
    font-size: 35px;
  }

  .description-subtitle {
    margin-top: 15px;
  }

  .img-Concept {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    width: 100%;
    padding: 0 50px;
  }

`
