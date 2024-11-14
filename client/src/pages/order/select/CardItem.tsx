import React from "react";
import styled, { css } from "styled-components";

export interface CardItemProps {
  value: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function CardItem({ value, isSelected, onClick }: CardItemProps) {
  return (
    <CardColorStyled isSelected={isSelected} onClick={onClick}>
      <a className="item">{value}</a>
    </CardColorStyled>
  );
}

const CardColorStyled = styled.div<{ isSelected: boolean }>`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  color: #000000;
  cursor: pointer;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
    background: #000000;
    color: white;
  }

  &:active {
    transform: scale(0.95);
    background: black;
    color: white;
  }

  ${({ isSelected }) => isSelected && selectedStyle}
`;

const selectedStyle = css`
  background: black;
  color: white;
`;
