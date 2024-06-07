import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import ReactDOM from "react-dom";

interface PopupProps extends React.HTMLAttributes<HTMLInputElement> {
  title?: string;
  detail?: string;
  isOpen?: any;
  onClose?: any;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const PopupBox = styled.div`
  background: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

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

const PopupBtn = styled.button`
  margin-top: 20px;
`;

function Popup({ title, detail, isOpen, onClose }: PopupProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <PopupBox className="w-1/3 h-1/3" onClick={(e) => e.stopPropagation()}>
        <BookTitle>{title}</BookTitle>
        <BookDetail>{detail}</BookDetail>
        <PopupBtn onClick={onClose} />
      </PopupBox>
    </Overlay>,
    document.body,
  );
}

export default Popup;
