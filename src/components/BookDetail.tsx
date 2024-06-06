import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Popup = styled.div`
  background: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const PopupBtn = styled.button`
  margin-top: 20px;
`;

function BookDetail({ isOpen, onClose, title, detail }: any) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Popup onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{detail}</p>
        <PopupBtn onClick={onClose}>닫기</PopupBtn>
      </Popup>
    </Overlay>
  );
}

export default BookDetail;
