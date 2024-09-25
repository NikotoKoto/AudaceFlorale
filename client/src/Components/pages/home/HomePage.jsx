import React from 'react'
import styled from 'styled-components'
import Navbar from "../../reusable-ui/navbar/Navbar"
import CarousselPage from './homeContainer/caroussel/CarousselPage'
import HomeContext from '../../../context/HomeContext'
import { useMenu } from '../../../hooks/useMenu'

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

    </HomePageStyled>
    </HomeContext.Provider>
  )
}

const HomePageStyled = styled.div`

`
