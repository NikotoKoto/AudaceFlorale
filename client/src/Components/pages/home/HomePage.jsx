import React from 'react'
import styled from 'styled-components'
import Navbar from "../../reusable-ui/navbar/Navbar"
import CarousselPage from './homeContainer/caroussel/CarousselPage'
import HomeContext from '../../../context/HomeContext'
import Footer from "../../reusable-ui/footer/Footer"
import DescriptionPage from './homeContainer/DescriptionPage'
import { useImageCaroussel } from '../../../hooks/useimageCaroussel'

export default function HomePage() {
//state
const {imageCaroussel, setImageCaroussel} = useImageCaroussel()
  const HomeContextValue = {
    imageCaroussel, setImageCaroussel
  }
  //Comportement

  //render
    return (
    <HomeContext.Provider value={HomeContextValue}>
    <HomePageStyled>
      <Navbar/>
      
      <CarousselPage/>
      <DescriptionPage/>
      <Footer/>
    </HomePageStyled>
    </HomeContext.Provider>
  )
}

const HomePageStyled = styled.div`

`
