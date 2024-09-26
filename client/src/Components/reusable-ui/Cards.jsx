import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export default function Cards({imgSrc, title, price, isHoverable}) {
  return (
    <CardStyled>
              <div className="imgCards">
        <img src={imgSrc}/>
        </div>
       <div className='title'>{title}</div>
       <div className="price">à partir de {price} € </div>
     <Link to={"/product"} className="hoverText">Selectionner les options</Link>
   
       
    </CardStyled>
  )
}

const CardStyled = styled.div`
    box-sizing: border-box;
    width: 400px;
    height: 500px;
    display: grid;
    grid-template-rows: 87% 1fr;

    box-shadow: -8px -8px 20px 0px rgb(0 0 0 / 10%);
    position: relative;


  &:hover{
    transition: 0.5s;
    transform: scale(1.1);
}
  .imgCards{
    width: 100%;
      height: auto;
      margin-bottom: 20px;

    }

  img{
    width: 100%;
        height: 100%;
        object-fit: cover;
  }



  .title{
    display: flex;
    align-items: center;
    font-size: 20px;
    text-transform: uppercase;
  font-weight: bold;
  font-family:"Dancing Script", serif;
  }

  .price{
    font-size: 15px;
    text-transform: uppercase;
  font-family:"Dancing Script", serif;
  font-weight: bold;
  }

  .hoverText{
    position: absolute;
    bottom: 13%;
    width: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    color: white;
    background-color: #0a0d30;
    padding: 10px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }

  &:hover .hoverText {
    opacity: 1; 
    
   
  }

  &:active .hoverText{
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%) scale(0.95);
    }

  
`