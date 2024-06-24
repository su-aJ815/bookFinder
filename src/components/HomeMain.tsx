/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { theme } from "../styles/theme";
import { ThemeProvider } from 'styled-components';
import Heading1 from '../styles/Typography/Heading1';
import MainParagraph from "../styles/Typography/MainParagraph";
import SearchBar from "../components/SearchBar";
import '../styles/homemain.scss';

function HomeMain() {
    return (
        <ThemeProvider theme={theme}>
            <div className="w-full h-auto flex flex-row">
                <div className="textbox margin-left-box">
                    <div className="logo bg-no-repeat bg-cover bg-center" />
                    <Heading1 className="mb-4">원하는 책을 검색해보세요!</Heading1>
                    <div className="w-7/12 h-auto">
                        <MainParagraph>
                            Bibliophile's Choice는 다양한 기준으로 책을 쉽게 찾을 수 있도록
                            도와줍니다. 제목, 저자, 출판사, ISBN 등으로 검색할 수 있으며, 최신
                            베스트셀러부터 고전 명작까지 폭넓은 도서 정보를 제공합니다. 개인
                            맞춤형 추천 기능을 통해 사용자의 취향에 맞는 도서를 제안하며,
                            상세한 책 정보와 리뷰를 통해 신중한 선택을 도울 수 있습니다. 언제
                            어디서나 원하는 책을 손쉽게 찾아보세요!
                        </MainParagraph>
                        <SearchBar className="searchbox" />
                    </div>
                </div>
                <div className="background-img bg-no-repeat bg-cover bg-center ml-auto" />
            </div>
        </ThemeProvider>
    )
}

export default HomeMain;