import React from "react";
import styled from "styled-components";
import mainImg from "../assets/img/mainImg.jpg";
import { theme } from "../styles/theme";

interface CarouselItemProps {
  title: string;
  detail: string;
}

const ItemContainer = styled.div`
  width: 500px;
  //   height: 480px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 0.3px solid #d9d9d9;
  padding-top: 12px;
`;

const ItemImage = styled.img`
  width: 256px;
  height: 372px;
  margin: 36px auto 12px;
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
