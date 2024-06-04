import React from "react";
import styled from "styled-components";
import mainImg from "../assets/img/mainImg.jpg";
import { theme } from "../styles/theme";

interface CarouselItemProps {
  title: string;
  detail: string;
}

const ItemContainer = styled.div`
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 0.3px solid #d9d9d9;
  margin-left: 40px;
`;

const ItemImage = styled.img`
  width: 256px;
  height: 352px;
  margin: 36px auto 8px auto;
`;

const BookTitle = styled.h1`
  color: ${theme.typography.BookTitle.color};
  font-size: ${theme.typography.BookTitle.fontSize};
  font-weight: ${theme.typography.BookTitle.fontWeight};
`;

const BookDetail = styled.h1`
  color: ${theme.typography.BookDetail.color};
  font-size: ${theme.typography.BookDetail.fontSize};
  font-weight: ${theme.typography.BookDetail.fontWeight};
  margin-bottom: 36px;
`;

const CarouselItem: React.FC<CarouselItemProps> = ({ title, detail }) => {
  return (
    <ItemContainer>
      <ItemImage src={mainImg} alt="" />
      <BookTitle>{title}</BookTitle>
      <BookDetail>{detail}</BookDetail>
    </ItemContainer>
  );
};

export default CarouselItem;
