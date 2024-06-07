import React, { useState } from "react";
import styled from "styled-components";
import mainImg from "../assets/img/mainImg.jpg";
import { theme } from "../styles/theme";
import Popup from "./Popup";
import '../styles/bookcard.scss';

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
        <div className="item-container" onClick={() => openPopup(title, detail)}>
          <img src={mainImg} alt="" />
          <div className="w-4/5 mx-auto">
            <BookTitle>{title}</BookTitle>
            <BookDetail className="mb-9">{detail}</BookDetail>
          </div>
        </div>
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
        <div
          onClick={() => openPopup(title, detail)}
          className="item-container2 w-96"
        >
          <img className="w-4/5" src={mainImg} alt="" />
          <div className="w-4/5 mx-auto">
            <BookTitle>{title}</BookTitle>
            <BookDetail>{detail}</BookDetail>
          </div>
        </div>
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
