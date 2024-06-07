import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import Popup from "./Popup";
import "../styles/bookcard.scss";

interface BookCardProps {
  title: string;
  detail: string;
  isbn: string;
  bstatus?: any;
  price?: string;
  datetime?: any;
  thumbnail?: string;
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
  isbn,
  price,
  bstatus,
  datetime,
  thumbnail,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState({
    title: "",
    detail: "",
    isbn: "",
    price: "",
    bstatus: "",
    datetime: "",
    thumbnail: "",
  });

  const openPopup = (
    title: any,
    detail: any,
    isbn: any,
    price: any,
    bstatus: any,
    datetime: any,
    thumbnail: any,
  ) => {
    setIsOpen(true);
    setSelectedBook({
      title,
      detail,
      isbn,
      price,
      bstatus,
      datetime,
      thumbnail,
    });
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  if (variant === "variant1") {
    return (
      <>
        <div
          className="item-container"
          onClick={() =>
            openPopup(title, detail, isbn, price, bstatus, datetime, thumbnail)
          }
        >
          <img src={thumbnail} alt="" />
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
          isbn={selectedBook.isbn}
          price={selectedBook.price}
          bstatus={selectedBook.bstatus}
          datetime={selectedBook.datetime}
          thumbnail={selectedBook.thumbnail}
        />
      </>
    );
  } else {
    return (
      <>
        <div
          onClick={() =>
            openPopup(title, detail, isbn, price, bstatus, datetime, thumbnail)
          }
          className="item-container2 w-96"
        >
          <img className="w-4/5" src={thumbnail} alt="" />
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
          isbn={selectedBook.isbn}
          price={selectedBook.price}
          bstatus={selectedBook.bstatus}
          datetime={selectedBook.datetime}
          thumbnail={selectedBook.thumbnail}
        />
      </>
    );
  }
};

export default BookCard;
