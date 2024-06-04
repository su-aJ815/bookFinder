import React from "react";
import { theme } from "../styles/theme";
import styled from "styled-components";
import mainImg from "../assets/img/mainImg.jpg";
import LogoImg from "../assets/img/logoBlack.png";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

//Text
const Heading1 = styled.h1`
  color: ${theme.typography.Heading1.color};
  font-size: ${theme.typography.Heading1.fontSize};
  font-weight: ${theme.typography.Heading1.fontWeight};
`;

const Heading2 = styled.h1`
  color: ${theme.typography.Heading2.color};
  font-size: ${theme.typography.Heading2.fontSize};
  font-weight: ${theme.typography.Heading2.fontWeight};
`;

const Heading3 = styled.h1`
  color: ${theme.typography.Heading3.color};
  font-size: ${theme.typography.Heading3.fontSize};
  font-weight: ${theme.typography.Heading3.fontWeight};
  margin-bottom: 8px;
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
  font-size: ${theme.typography.Paragraph2.fontSize};
  font-weight: ${theme.typography.Paragraph2.fontWeight};
`;

const Paragraph5 = styled.h1`
  color: ${theme.typography.Paragraph5.color};
  font-size: ${theme.typography.Paragraph5.fontSize};
  font-weight: ${theme.typography.Paragraph5.fontWeight};
`;

//publishing component
const Textbox1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding-top: 150px;
`;

const BackgroundImg1 = styled.div`
  width: 50vw;
  height: 70vh;
  background-image: url(${mainImg});
`;

const Logo = styled.div`
  width: 190px;
  height: 40px;
  background-image: url(${LogoImg});
`;

const FeatureBox = styled.div`
  width: 320px;
  height: auto;
  display: flex;
  flex-direction: column;
  // background-color: green;
`;

const BestSeller = styled.div`
  width: 100vw;
  height: auto;
`;

const BookStackBox = styled.div`
  background-color: #f3eee1;
`;

function Home() {
  return (
    <div>
      <div className="w-100vw h-auto flex flex-row">
        <Textbox1 className="ml-64">
          <Logo className="mb-3 bg-no-repeat bg-cover	bg-center" />
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
            <SearchBar className="mt-32" />
          </div>
        </Textbox1>
        <BackgroundImg1 className="bg-no-repeat bg-cover bg-center ml-auto" />
      </div>
      <div className="w-full px-64 h-48 flex flex-row justify-between border-y border-zinc-900">
        <FeatureBox>
          <FontAwesomeIcon
            className="mr-auto mb-3 mt-8"
            icon={faGlobe}
            size="xl"
          />
          <Heading3>다양한 검색 옵션을 활용해보세요</Heading3>
          <Paragraph2>
            책을 찾을 때 다양한 기준으로 검색할 수 있습니다. 제목, 저자, 출판사,
            출간 연도 등 다양한 옵션을 만나보세요.
          </Paragraph2>
        </FeatureBox>
        <FeatureBox>
          <FontAwesomeIcon
            className="mr-auto mb-3 mt-8"
            icon={faChartSimple}
            size="xl"
          />
          <Heading3>상세한 책 정보를 만나보세요</Heading3>
          <Paragraph2>
            각 책에는 상세한 정보와 독자들의 리뷰가 제공됩니다. 책의 내용과
            품질을 더욱 신중하게 평가해보세요.
          </Paragraph2>
        </FeatureBox>
        <FeatureBox>
          <FontAwesomeIcon
            className="mr-auto mb-3 mt-8"
            icon={faBookmark}
            size="xl"
          />
          <Heading3>마음에 드는 책을 저장하세요</Heading3>
          <Paragraph2>
            "읽고 싶은 책" 목록에 책을 추가해보세요. 나만의 책 리스트를 만들어
            효율적이고 쉽게 접근해보세요.
          </Paragraph2>
        </FeatureBox>
        <FeatureBox>
          <FontAwesomeIcon
            className="mr-auto mb-3 mt-8"
            icon={faPenFancy}
            size="xl"
          />
          <Heading3>인기 작가의 저서를 한 번에 만나보세요</Heading3>
          <Paragraph2>
            좋아하는 작가의 책을 모아서 열람해볼 수 있습니다. 선별된 작가의
            작품을 메인 페이지에서 만나보세요.
          </Paragraph2>
        </FeatureBox>
      </div>
      <BestSeller className="flex flex-row mt-24 mb-9">
        <div className="w-10 h-20 bg-zinc-900 ml-64 mr-5 rounded-l-full" />
        <div>
          <Heading4>금주의 베스트셀러</Heading4>
          <Heading2>다른 애서가들이 자주 찾은 책들이에요</Heading2>
        </div>
      </BestSeller>
      <div className="w-auto h-auto flex flex-row ml-64 mr-64">
        <BookCard />
      </div>
      <BookStackBox className="w-full h-96 bg-red-400 relative z-0"></BookStackBox>
    </div>
  );
}

export default Home;
