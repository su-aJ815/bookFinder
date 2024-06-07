import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import ReactDOM from "react-dom";
import "../styles/popup.scss";
import mainImg from "../assets/img/mainImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface PopupProps extends React.HTMLAttributes<HTMLInputElement> {
  title?: string;
  detail?: string;
  isbn?: string;
  bstatus?: any;
  price?: string;
  datetime?: any;
  isOpen?: any;
  onClose?: any;
  thumbnail?: string;
}

const Heading2 = styled.h1`
  color: ${theme.typography.Heading2.color};
  font-size: ${theme.typography.Heading2.fontSize};
  font-weight: ${theme.typography.Heading2.fontWeight};
  margin-left: 24px;
  margin-bottom: 4px;
`;

const BookDetail = styled.p`
  color: ${theme.typography.BookDetail.color};
  font-size: ${theme.typography.BookDetail.fontSize};
  font-weight: ${theme.typography.BookDetail.fontWeight};
  margin-left: 24px;
`;

const Paragraph1 = styled.h1`
  color: ${theme.typography.Paragraph1.color};
  font-size: 16px;
  font-weight: ${theme.typography.Paragraph1.fontWeight};
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 24px;
`;

const Paragraph2 = styled.h1`
  color: ${theme.typography.Paragraph1.color};
  font-size: 16px;
  font-weight: 700;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 24px;
`;

const Paragraph4 = styled.h1`
  color: ${theme.typography.Paragraph4.color};
  font-size: ${theme.typography.Paragraph4.fontSize};
  font-weight: ${theme.typography.Paragraph4.fontWeight};
  margin-left: 24px;
`;

function Popup({
  title,
  detail,
  isOpen,
  onClose,
  isbn,
  datetime,
  bstatus,
  price,
  thumbnail,
}: PopupProps) {
  if (!isOpen) return null;

  const getPublicationYear = (dateTimeStr: string | number | Date) => {
    return new Date(dateTimeStr).getFullYear();
  };

  return ReactDOM.createPortal(
    <div className="overlay" onClick={onClose}>
      <div
        className="popup-box w-1/2 h-3/5 flex flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </button>
        <img src={thumbnail} alt="" className="w-1/2 h-full" />
        <div className="w-1/2 h-full flex flex-col pt-24">
          <Paragraph4>{isbn}</Paragraph4>
          <Heading2>{title}</Heading2>
          <BookDetail>{detail}</BookDetail>
          <div className="w-full h-20 flex flex-row border-y border-slate-400	mt-16">
            <Paragraph1>출판 연도</Paragraph1>
            <Paragraph2>{getPublicationYear(datetime)}</Paragraph2>
          </div>
          <div className="w-full h-20 flex flex-row border-b border-slate-400	">
            <Paragraph1>도서 판매가</Paragraph1>
            <Paragraph2>{price}</Paragraph2>
          </div>
          <div className="w-full h-20 flex flex-row border-b border-slate-400	">
            <Paragraph1>판매 상태</Paragraph1>
            <Paragraph2>{bstatus}</Paragraph2>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default Popup;
