import React, { useState } from "react";
import styled from "styled-components";
import mainImg from "../assets/img/mainImg.jpg";
import { theme } from "../styles/theme";
import Popup from "./Popup";

interface BookCardProps {
  title: string;
  detail: string;
  variant?: "variant1"; // variant 타입을 정의합니다.
  onClick?: () => void; // 클릭 핸들러를 추가합니다.
}

//Text
const BookTitle = styled.h1`
  color: ${theme.typography.BookTitle.color};
  font-size: ${theme.typography.BookTitle.fontSize};
  font-weight: ${theme.typography.BookTitle.fontWeight};
  margin: 4px auto 8px auto;
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
  height: 540px;
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

const BookCard: React.FC<BookCardProps> = ({
  title,
  detail,
  variant,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState({ title: "", detail: "" });

  const openPopup = (title: any, detail: any) => {
    setIsOpen(true);
    setSelectedBook({ title, detail });
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  if (variant === "variant1") {
    return (
      <>
        <ItemContainer onClick={() => openPopup(title, detail)}>
          <ItemImage src={mainImg} alt="" />
          <div className="w-4/5 mx-auto">
            <BookTitle>{title}</BookTitle>
            <BookDetail className="mb-9">{detail}</BookDetail>
          </div>
        </ItemContainer>
        <Popup
          isOpen={isOpen}
          onClose={closePopup}
          title={selectedBook.title}
          detail={selectedBook.detail}
        />
      </>
    );
  } else {
    return (
      <>
        <ItemContainer2
          onClick={() => openPopup(title, detail)}
          className="w-96"
        >
          <ItemImage2 className="w-4/5" src={mainImg} alt="" />
          <div className="w-4/5 mx-auto">
            <BookTitle>{title}</BookTitle>
            <BookDetail>{detail}</BookDetail>
          </div>
        </ItemContainer2>
        <Popup
          isOpen={isOpen}
          onClose={closePopup}
          title={selectedBook.title}
          detail={selectedBook.detail}
        />
      </>
    );
  }
};

export default BookCard;
