import React from 'react'
import styled from 'styled-components'
import Footer from "../../reusable-ui/footer/Footer"
import Navbar from "../../reusable-ui/navbar/Navbar"
import Cards from '../../reusable-ui/Cards'
import { useMenu } from '../../../hooks/useMenu'
import OrderContext from '../../../context/OrderContext'
export default function OrderPage() {
  const {menu,setMenu} = useMenu();
  const OrderContextValue = {
    menu, setMenu
  }
  return (
    <OrderContext.Provider value={OrderContextValue}>
      
    <OrderPageStyled>
      <Navbar/>
      <div className="cardContainer">
    {menu.map(({id, title, price, imageSource}) => {
      return (
        <Cards
        key={id}
        imgSrc={imageSource}
        price={price}
        title={title}
        />
      )
    })}
      
      
      </div>
     
      <Footer/>
      </OrderPageStyled>
      </OrderContext.Provider>
  )
}


const OrderPageStyled = styled.div`

  .cardContainer{
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;



  }

`