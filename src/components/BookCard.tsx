import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import Popup from "./Popup";
import "../styles/bookcard.scss";
import { ThemeProvider } from 'styled-components';
import BookTitle from "../styles/Typography/BookTitle";

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
const BookDetail = styled.h1`
  color: ${theme.typography.BookDetail.color};
  font-size: ${theme.typography.BookDetail.fontSize};
  font-weight: ${theme.typography.BookDetail.fontWeight};
  margin-bottom: 12px;
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
      <ThemeProvider theme={theme}>
        <div
          className="item-container"
          onClick={() =>
            openPopup(title, detail, isbn, price, bstatus, datetime, thumbnail)
          }
        >
          <img src={thumbnail} alt="" />
          <div className="w-4/5 mx-auto">
            <BookTitle className="title" style={{ margin: "4px auto 4px auto" }}>{title}</BookTitle>
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
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <div
          onClick={() =>
            openPopup(title, detail, isbn, price, bstatus, datetime, thumbnail)
          }
          className="item-container2 w-1/5 pl-4 pr-4"
        >
          <img src={thumbnail} alt="" />
          <div className="mx-auto">
            <BookTitle style={{ margin: "4px auto 4px auto" }} className="title">{title}</BookTitle>
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
      </ThemeProvider>
    );
  }
};

export default BookCard;
