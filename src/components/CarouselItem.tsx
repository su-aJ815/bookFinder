import React from "react";
import styled from "styled-components";
import mainImg from "../assets/img/mainImg.jpg";
import { theme } from "../styles/theme";

interface CarouselItemProps {
  title: string;
  detail: string;
  variant?: "variant1"; // variant 타입을 정의합니다.
}

//Text
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

//publishing component
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

const ItemContainer2 = styled.div`
  height: 540px;
  padding-top: 24px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 0.3px solid #d9d9d9;
  background-color: #ffffff;
  text-align: center;
`;

const ItemImage2 = styled.img`
  height: 400px;
  margin: 0 auto 8px auto;
`;

const CarouselItem: React.FC<CarouselItemProps> = ({
  title,
  detail,
  variant,
}) => {
  const handleClick = () => {
    alert("Div clicked!");
  };

  if (variant === "variant1") {
    return (
      <ItemContainer>
        <ItemImage src={mainImg} alt="" />
        <BookTitle>{title}</BookTitle>
        <BookDetail className="mb-9">{detail}</BookDetail>
      </ItemContainer>
    );
  } else {
    return (
      <ItemContainer2 onClick={handleClick} className="w-96">
        <ItemImage2 className="w-4/5" src={mainImg} alt="" />
        <BookTitle>{title}</BookTitle>
        <BookDetail>{detail}</BookDetail>
      </ItemContainer2>
    );
  }
};

export default CarouselItem;
