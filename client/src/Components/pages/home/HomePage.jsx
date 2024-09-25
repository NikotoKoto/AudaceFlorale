import React from 'react'
import styled from 'styled-components'
import Navbar from "../../reusable-ui/navbar/Navbar"
import CarousselPage from './homeContainer/caroussel/CarousselPage'
import HomeContext from '../../../context/HomeContext'
import { useMenu } from '../../../hooks/useMenu'
import Footer from "../../reusable-ui/footer/Footer"
import DescriptionPage from './homeContainer/DescriptionPage'

export default function HomePage() {
//state

const {menu, setMenu} =useMenu()
  const HomeContextValue = {
    menu, setMenu
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
