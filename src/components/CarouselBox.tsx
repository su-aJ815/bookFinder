import React, { useState, useEffect } from "react";
import Carousel, { CarouselProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookCard from "./BookCard";
import instance from "../API/axiosConfig";

interface CarouselBoxProps extends React.HTMLAttributes<HTMLInputElement> {
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

function CarouselBox({ className, variant = "variant1" }: CarouselBoxProps) {
  const [searchedBooks, setSearchedBooks] = useState<any[]>([]);

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
    isbn: searchedBooks.isbn,
    bstatus: searchedBooks.status,
    price: searchedBooks.price,
    datetime: searchedBooks.datetime,
    thumbnail: searchedBooks.thumbnail,
    // 필요한 다른 속성들을 추가할 수 있습니다.
  }));

  return (
    <div className="w-full h-auto mb-24">
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
          <BookCard
            key={index}
            title={item.title}
            detail={item.detail}
            isbn={item.isbn}
            bstatus={item.bstatus}
            price={item.price}
            datetime={item.datetime}
            thumbnail={item.thumbnail}
            variant={"variant1"}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselBox;
