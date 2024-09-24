import React from 'react'
import styled from 'styled-components';
import Button from '../../../../reusable-ui/Button';

export default function LeftContentCaroussel({currentSlideButtonLabel,currentSlideTitle}) {
  return (
    <LeftContent> <h3>{currentSlideTitle}</h3>
            <Button label={currentSlideButtonLabel}></Button></LeftContent>
  )
}

const LeftContent = styled.div`
      flex: 1;
      background-color: #f6a700; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px;
      color: white;
      width: 540px;

      .containLeftSide{
        width: 200px;
        height: 250px;
        background: red;
    }
    
      h3 {
        font-size: 36px;
        margin-bottom: 20px;
        color: #333;
      }
    
    `;