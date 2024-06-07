import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import ReactDOM from "react-dom";
import '../styles/popup.scss';

interface PopupProps extends React.HTMLAttributes<HTMLInputElement> {
  title?: string;
  detail?: string;
  isOpen?: any;
  onClose?: any;
}

const BookTitle = styled.h1`
  color: ${theme.typography.BookTitle.color};
  font-size: ${theme.typography.BookTitle.fontSize};
  font-weight: ${theme.typography.BookTitle.fontWeight};
`;

const BookDetail = styled.p`
  color: ${theme.typography.BookDetail.color};
  font-size: ${theme.typography.BookDetail.fontSize};
  font-weight: ${theme.typography.BookDetail.fontWeight};
`;

function Popup({ title, detail, isOpen, onClose }: PopupProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="popup-box w-1/3 h-1/3" onClick={(e) => e.stopPropagation()}>
        <BookTitle>{title}</BookTitle>
        <BookDetail>{detail}</BookDetail>
        <button className="close-btn" onClick={onClose}>닫기</button>
      </div>
    </div>,
    document.body,
  );
}

export default Popup;
