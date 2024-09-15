import React from 'react'
import styled from 'styled-components'

export default function TextInput({onChange, type, Icon , placeholder, ...restProps}) {
  return (
    <TextInputStyled >
        <div className='icon'>{Icon && Icon}</div>
        <input placeholder={placeholder} onChange={onChange} type={type}></input>
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
 background-color: white;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon-login {
      font-size: 15px;
      margin-right: 8px;
      color: grey;
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