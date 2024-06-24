import React from "react";
import { theme } from "../styles/theme";
import ReactDOM from "react-dom";
import "../styles/popup.scss";
import mainImg from "../assets/img/mainImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Heading2 from "../styles/Typography/Heading2";
import BookDetail from "../styles/Typography/BookDetail";
import Paragraph1 from "../styles/Typography/Paragraph1";
import Paragraph2 from "../styles/Typography/Paragraph2";
import Paragraph4 from "../styles/Typography/Paragraph4";
import { ThemeProvider } from "styled-components";

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
    <ThemeProvider theme={theme}>
      <div className="overlay" onClick={onClose}>
        <div
          className="popup-box w-1/2 h-3/5 flex flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
          <img src={thumbnail ? thumbnail : mainImg} alt="" className="w-1/2 h-full" />
          <div className="w-1/2 h-full flex flex-col pt-24">
            <Paragraph4 className="ml-4">{isbn}</Paragraph4>
            <Heading2 className="ml-4 mr-4">{title}</Heading2>
            <BookDetail className="ml-4 mt-2">{detail}</BookDetail>
            <div className="w-full h-20 flex flex-row border-y border-slate-400	mt-16">
              <Paragraph1 className="ml-4 mr-8 mt-auto mb-auto">출판 연도</Paragraph1>
              <Paragraph2 className="mt-auto mb-auto">{getPublicationYear(datetime)}</Paragraph2>
            </div>
            <div className="w-full h-20 flex flex-row border-b border-slate-400	">
              <Paragraph1 className="ml-4 mr-8 mt-auto mb-auto">도서 판매가</Paragraph1>
              <Paragraph2 className="mt-auto mb-auto">{price}</Paragraph2>
            </div>
            <div className="w-full h-20 flex flex-row border-b border-slate-400	">
              <Paragraph1 className="ml-4 mr-8 mt-auto mb-auto">판매 상태</Paragraph1>
              <Paragraph2 className="mt-auto mb-auto">{bstatus}</Paragraph2>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>,
    document.body,
  );
}

export default Popup;
