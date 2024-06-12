import React from "react";
import { theme } from "../styles/theme";
import { ThemeProvider } from 'styled-components';
import styled from "styled-components";
import backgroundBox from "../assets/img/backgroundBox.png";
import bookStack from "../assets/img/bookStack.png";
import LogoWhite from "../assets/img/logoWhite.png";
import SearchBar from "../components/SearchBar";
import CarouselBox from "../components/CarouselBox";
import AuthorBook from "../components/AuthorBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import '../styles/home.scss';
import Heading1 from '../styles/Typography/Heading1';
import Heading3 from "../styles/Typography/Heading3";
import Paragraph5 from "../styles/Typography/Paragraph5";

interface HoomProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: "variant1"; // BookCard 컴포넌트에서 사용할 variant를 정의합니다.
}

//Text

const Heading2 = styled.h1`
  color: ${theme.typography.Heading2.color};
  font-size: ${theme.typography.Heading2.fontSize};
  font-weight: ${theme.typography.Heading2.fontWeight};
`;

const Heading4 = styled.h1`
  color: ${theme.typography.Heading4.color};
  font-size: ${theme.typography.Heading4.fontSize};
  font-weight: ${theme.typography.Heading4.fontWeight};
`;

const Paragraph1 = styled.p`
  color: ${theme.typography.Paragraph1.color};
  font-size: ${theme.typography.Paragraph1.fontSize};
  font-weight: ${theme.typography.Paragraph1.fontWeight};
`;

const Paragraph2 = styled.h1`
  color: ${theme.typography.Paragraph2.color};
  font-size: 12px;
  font-weight: ${theme.typography.Paragraph2.fontWeight};
`;

function Home({ className, variant = "variant1", ...props }: HoomProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-full h-auto flex flex-row">
        <div className="textbox1 ml-52">
          <div className="logo mb-3 bg-no-repeat bg-cover	bg-center" />
          <Heading1 className="mb-4">원하는 책을 검색해보세요!</Heading1>
          <div className="w-7/12 h-auto">
            <Paragraph1>
              Bibliophile's Choice는 다양한 기준으로 책을 쉽게 찾을 수 있도록
              도와줍니다. 제목, 저자, 출판사, ISBN 등으로 검색할 수 있으며, 최신
              베스트셀러부터 고전 명작까지 폭넓은 도서 정보를 제공합니다. 개인
              맞춤형 추천 기능을 통해 사용자의 취향에 맞는 도서를 제안하며,
              상세한 책 정보와 리뷰를 통해 신중한 선택을 도울 수 있습니다. 언제
              어디서나 원하는 책을 손쉽게 찾아보세요!
            </Paragraph1>
            <SearchBar className="searchbox" />
          </div>
        </div>
        <div className="background-img bg-no-repeat bg-cover bg-center ml-auto" />
      </div>
      <div className="w-full px-52 flex flex-row justify-between border-y border-zinc-900">
        <div className="feature-box">
          <FontAwesomeIcon
            className="mr-auto mb-3 mt-8"
            icon={faGlobe}
            size="xl"
          />
          <Heading3 className="mb-1">다양한 옵션을 활용해보세요</Heading3>
          <Paragraph2 className="hide-sth">
            제목, 저자, 출판사,
            출간 연도 등 다양한 옵션을 만나보세요.
          </Paragraph2>
        </div>
        <div className="feature-box">
          <FontAwesomeIcon
            className="mr-auto mb-3 mt-8"
            icon={faChartSimple}
            size="xl"
          />
          <Heading3 className="mb-1">상세한 책 정보를 만나보세요</Heading3>
          <Paragraph2 className="hide-sth">
            상세한 정보로 책의 내용과
            품질을 더욱 신중하게 평가해보세요.
          </Paragraph2>
        </div>
        <div className="feature-box">
          <FontAwesomeIcon
            className="mr-auto mb-3 mt-8"
            icon={faBookmark}
            size="xl"
          />
          <Heading3 className="mb-1">마음에 드는 책을 저장하세요</Heading3>
          <Paragraph2 className="hide-sth">
            나만의 책 리스트를 만들어
            효율적이고 쉽게 접근해보세요.
          </Paragraph2>
        </div>
        <div className="feature-box">
          <FontAwesomeIcon
            className="mr-auto mb-3 mt-8"
            icon={faPenFancy}
            size="xl"
          />
          <Heading3 className="mb-1">인기 작가의 책을 만나보세요</Heading3>
          <Paragraph2 className="hide-sth">
            선별된 작가의
            작품을 메인 페이지에서 만나보세요.
          </Paragraph2>
        </div>
      </div>
      <div className="w-full h-auto flex flex-row mt-24 mb-9">
        <div className="w-10 h-20 bg-zinc-900 ml-52 mr-5 rounded-l-full" />
        <div>
          <Heading4>키워드별 인기 저서</Heading4>
          <Heading2>'자바스크립트' 관련 책을 찾고계신가요?</Heading2>
        </div>
      </div>
      <div className="w-auto h-auto flex flex-row ml-52 mr-52">
        <CarouselBox />
      </div>
      <div style={{ backgroundColor: "#f3eee1" }} className="w-full h-auto pt-24 pb-24 flex flex-row">
        <img
          className="stack-img ml-52"
          src={bookStack}
          alt=""
        />
        <div
          className="w-1/2 ml-auto flex flex-col pl-12"
          style={{ height: "400px" }}
        >
          <div
            className="rounded-l-full mt-12"
            style={{
              width: "100%",
              height: "84px",
              backgroundColor: "#11100B",
              paddingTop: "18px",
              paddingLeft: "80px",
            }}
          >
            <img
              style={{
                width: "230px",
                height: "50px",
              }}
              src={LogoWhite}
              alt=""
            />
          </div>
          <div className="w-3/5 h-auto mt-8 ml-20">
            <Paragraph5>
              “책은 우리가 탐험하지 않은 세계로 우리를 안내하는 지침서이다.
              그것은 우리의 말을 초월하여 우리의 마음을 확장하며, 우리의 경험을
              더 풍부하게 만들어 준다. 책은 우리를 과거와 미래, 심지어 다른
              세계로도 안내해준다. 따라서 책을 통해 여행하는 것은 언제나 우리의
              영혼을 풍요롭게 만든다.”
            </Paragraph5>
            <Paragraph5>- 에드워드 더스터튼</Paragraph5>
          </div>
        </div>
      </div>
      <div className="w-full h-auto pt-24 pb-24 text-center relative">
        <AuthorBook />
        <img
          src={backgroundBox}
          alt=""
          className="rounded-l-lg w-2/5"
          style={{
            height: "350px",
            zIndex: "-1",
            position: "absolute",
            bottom: "0",
            right: "0",
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default Home;
