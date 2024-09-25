import React from 'react'
import styled from 'styled-components'

export default function TextInput({onChange, type, Icon , placeholder, className, ...extraProps}) {
  return (
    <TextInputStyled className={className} >
        <div className='icon'>{Icon && Icon}</div>
        <input placeholder={placeholder} onChange={onChange} type={type} {...extraProps}></input>
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
 background-color: white;
 border: 1px solid black;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0 3px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #0a0d30;
    }

    input {
      border: none;
      font-size: 15px;
      color: black;
      width: 100%;
      outline: none; // enleve la bordure quand on clique dessus
      
      &::placeholder {
      background-color: white;
      color: grey;
    }
    }
`