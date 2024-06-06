import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel, { CarouselProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";
import instance from "../API/axiosConfig";
import BookDetail from "./BookDetail";

interface BookCardProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: "variant1"; // BookCard 컴포넌트에서 사용할 variant를 정의합니다.
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

const CarouselContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 100px;
`;

function BookCard({ className, variant = "variant1" }: BookCardProps) {
  const [searchedBooks, setSearchedBooks] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState({ title: "", detail: "" });

  useEffect(() => {
    // 검색할 책 제목
    const query = "자바스크립트";

    // 책 검색 함수 호출
    async function searchBooks() {
      try {
        const response = await instance.get("", {
          params: {
            query: query,
            sort: "accuracy",
            // page: 1,
            // size: 10
          },
        });

        //검색 결과 출력
        setSearchedBooks(response.data.documents.slice(0, 4));
      } catch (error) {
        console.error("책 검색 오류:", error);
      }
    }

    // 책 검색 함수 호출
    searchBooks();
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행

  // 상태를 기반으로 배열 생성
  const bookItems = searchedBooks.map((searchedBooks) => ({
    title: searchedBooks.title,
    detail: `${searchedBooks.authors.join(", ")}/${searchedBooks.publisher}`,
    // 필요한 다른 속성들을 추가할 수 있습니다.
  }));

  const openPopup = (title: any, detail: any) => {
    setSelectedBook({ title, detail });
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

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
      >
        {bookItems.map((item, index) => (
          <CarouselItem
            key={index}
            title={item.title}
            detail={item.detail}
            variant={"variant1"}
            onClick={() => openPopup(item.title, item.detail)}
          />
        ))}
      </Carousel>
      <BookDetail
        isOpen={isOpen}
        onClose={closePopup}
        title={selectedBook.title}
        detail={selectedBook.detail}
      />
    </CarouselContainer>
  );
}

export default BookCard;
