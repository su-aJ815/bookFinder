import React, { useEffect, useState } from "react";
import { theme } from "../styles/theme";
import BookCard from "../components/BookCard";
import { useLocation } from "react-router-dom";
import instance from "../API/axiosConfig"; // 카카오 API 설정 파일을 임포트합니다.
import SearchHeading from "../styles/Typography/SearchHeading";
import { ThemeProvider } from "styled-components";
import '../styles/searchpage.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function SearchPage() {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const [totalResults, setTotalResults] = useState(0);
  const [results, setResults] = useState<any[]>([]);
  const query = new URLSearchParams(location.search).get("q");

  const pageSize = 12; // 페이지당 결과 수

  const searchBooks = async (query: string, page: number) => {
    try {
      const response = await instance.get("", {
        params: {
          query: query,
          sort: "accuracy",
          size: pageSize, // 한 번에 가져올 결과의 수를 설정합니다.
          page: page, // 원하는 페이지를 설정합니다.
        },
      });

      setResults(response.data.documents);
      setTotalResults(response.data.meta.total_count); // 총 검색 결과 수 설정
    } catch (error) {
      console.error("책 검색 오류:", error);
    }
  };

  useEffect(() => {
    if (query) {
      searchBooks(query, page);
    }
  }, [query, page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const totalPages = Math.ceil(totalResults / pageSize); // 총 페이지 수 계산

  const bookItems = results.map((results) => ({
    title: results.title,
    detail: `${results.authors.join(", ")}/${results.publisher}`,
    isbn: results.isbn,
    bstatus: results.status,
    price: results.price,
    datetime: results.datetime,
    thumbnail: results.thumbnail,
    // 필요한 다른 속성들을 추가할 수 있습니다.
  }));

  return (
    <ThemeProvider theme={theme}>
      <div className="pb-24">
        <div
          className="rounded-r-full title-box"
        >
          <SearchHeading>총 {totalResults}개의 검색 결과를 찾았어요</SearchHeading>
        </div>
        <div className="card-con w-auto h-auto flex flex-wrap justify-center mb-16">
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
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="px-4 pb-2 mr-4 text-white rounded disabled:opacity-50"
            style={{ backgroundColor: '#11100B' }}
          >
            <FontAwesomeIcon
              className="icon"
              icon={faArrowLeft}
            />
          </button>
          <p className="mr-4 mt-5 text-base">{page}/{totalPages}</p>
          <button
            onClick={handleNextPage}
            disabled={page >= totalPages}
            className="px-4 pb-2 text-white rounded"
            style={{ backgroundColor: '#11100B' }}
          >
            <FontAwesomeIcon
              className="icon"
              icon={faArrowRight}
            />
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default SearchPage;
