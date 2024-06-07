import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import BookCard from "../components/BookCard";
import { useLocation } from "react-router-dom";
import instance from "../API/axiosConfig"; // 카카오 API 설정 파일을 임포트합니다.

const Heading2 = styled.h1`
  color: ${theme.colors.mainWhite};
  font-size: ${theme.typography.Heading2.fontSize};
  font-weight: ${theme.typography.Heading2.fontWeight};
`;

function SearchPage() {
  const location = useLocation();
  const [results, setResults] = useState<any[]>([]);
  const query = new URLSearchParams(location.search).get("q");

  const searchBooks = async (query: string) => {
    try {
      const response = await instance.get("", {
        params: {
          query: query,
          sort: "accuracy",
        },
      });

      setResults(response.data.documents);
    } catch (error) {
      console.error("책 검색 오류:", error);
    }
  };

  useEffect(() => {
    if (query) {
      searchBooks(query);
    }
  }, [query]);

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
        <Heading2>총 {results.length}개의 검색 결과를 찾았어요</Heading2>
      </div>
      <div className="w-auto h-auto ml-64 mr-64 gap-y-16 flex flex-wrap justify-between">
        {results.map((item, index) => (
          <BookCard
            key={index}
            title={item.title}
            detail={`${item.authors.join(", ")}/${item.publisher}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
