import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import CarouselItem from "../components/CarouselItem";

const Heading2 = styled.h1`
  color: ${theme.colors.mainWhite};
  font-size: ${theme.typography.Heading2.fontSize};
  font-weight: ${theme.typography.Heading2.fontWeight};
`;

const items = [
  { title: "책제목", detail: "작가/출판사" },
  { title: "책제목", detail: "작가/출판사" },
  { title: "책제목", detail: "작가/출판사" },
  { title: "책제목", detail: "작가/출판사" },
  { title: "책제목", detail: "작가/출판사" },
  { title: "책제목", detail: "작가/출판사" },
  { title: "책제목", detail: "작가/출판사" },
  { title: "책제목", detail: "작가/출판사" },
  { title: "책제목", detail: "작가/출판사" },
  { title: "책제목", detail: "작가/출판사" },
  { title: "책제목", detail: "작가/출판사" },
  { title: "책제목", detail: "작가/출판사" },
];

function SearchPage() {
  return (
    <div className="pb-24">
      <div
        className="rounded-r-full w-2/5 pl-64 mt-20 mb-12"
        style={{
          height: "84px",
          backgroundColor: "#11100B",
          paddingTop: "12px",
        }}
      >
        <Heading2>총 N개의 검색 결과를 찾았어요</Heading2>
      </div>
      <div className="w-auto h-auto ml-64 mr-64 gap-y-16 flex flex-wrap justify-between">
        {items.map((item, index) => (
          <CarouselItem key={index} title={item.title} detail={item.detail} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
