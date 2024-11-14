import React, { FC, ChangeEvent } from "react";
import styled from "styled-components";

interface TextProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; // Typage pour la fonction onChange
  type?: string; // Type de l'input, par défaut "text"
  Icon?: React.ReactNode; // Icône facultative
  placeholder?: string; // Texte du placeholder
  className?: string; // Classe CSS optionnelle
  [key: string]: any; // Permet d'ajouter des props supplémentaires comme `data-*` ou `aria-*`
}

const TextInput: FC<TextProps> = ({
  onChange,
  type = "text",
  Icon,
  placeholder,
  className,
  ...extraProps
}) => {
  return (
    <TextInputStyled className={className}>
      {Icon && <div className="icon">{Icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...extraProps}
      />
    </TextInputStyled>
  );
};

export default TextInput;

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
    outline: none;

    &::placeholder {
      background-color: white;
      color: grey;
    }
  }
`;
