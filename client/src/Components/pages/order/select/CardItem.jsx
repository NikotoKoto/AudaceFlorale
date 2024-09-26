import React from 'react'
import styled from 'styled-components'

export default function CardItem({value}) {
  return (
    <CardColorStyled>
        <div className="item">{value}</div>
    </CardColorStyled>
  )
}
const CardColorStyled = styled.div`

    width: 80px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    color: #000000;
    cursor: pointer;

    .item{
        display: flex;
        align-items: center;
        justify-content: center;

    }

    &:hover{
        transition: 0.5s;
        transform: scale(1.05);
        background: #000000;
        color: white;
    }

    &:active{
        transform: scale(0.95);
    }

`