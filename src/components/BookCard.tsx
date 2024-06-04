import React from "react";
import styled from "styled-components";
import Carousel, { CarouselProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";

interface BookCardProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
}

const responsive: CarouselProps["responsive"] = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const items = [
  { title: "ITEM1", detail: "작가/출판사" },
  { title: "ITEM2", detail: "작가/출판사" },
  { title: "ITEM3", detail: "작가/출판사" },
  { title: "ITEM4", detail: "작가/출판사" },
  { title: "ITEM5", detail: "작가/출판사" },
];

const CarouselContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 12px;
  margin-bottom: 100px;
`;

function BookCard({ className, ...props }: BookCardProps) {
  return (
    <CarouselContainer>
      <Carousel
        swipeable={true} // true로 변경하여 문제 해결
        draggable={true} // true로 변경하여 문제 해결
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={false} // autoPlay 설정 추가
        autoPlaySpeed={500}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        {items.map((item, index) => (
          <CarouselItem key={index} title={item.title} detail={item.detail} />
        ))}
      </Carousel>
    </CarouselContainer>
  );
}

export default BookCard;
