import React, { FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | string;
  label: string;
  className?: string;
  Icon?: React.ReactNode;
  disabled?: boolean;
  [key: string]: any; // Pour supporter d'autres props comme `data-*` ou `aria-*`
}

const Button: FC<ButtonProps> = ({
  onClick,
  label,
  className,
  Icon,
  disabled,
  ...extraProps
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...extraProps}
    >
      <span>{label}</span>
      {Icon && <div className="icon">{Icon}</div>}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap; 
  text-decoration: none;
  line-height: 1;
  cursor: pointer;
  margin: 20px 0;
  padding: 18px 24px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: #0a0d30;
  border: 1px solid #0a0d30;

  .icon {
    padding-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: white;
    color: #0a0d30;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: grey;
    color: white;
    cursor: not-allowed;
    opacity: 0.5;

    &:active {
      transform: scale(1);
    }
  }
`;
