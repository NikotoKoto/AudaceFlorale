import React from 'react'
import styled from 'styled-components'

export default function RightContentCaroussel({currentSlide}) {
  return (
    <RightContentCarousselStyled >
            <img src={currentSlide} alt="Slide" />
          </RightContentCarousselStyled>
  )
}

const RightContentCarousselStyled = styled.div`
  
`
