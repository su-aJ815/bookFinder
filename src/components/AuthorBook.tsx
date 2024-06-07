import React, { useEffect, useState } from "react";
import instance from "../API/axiosConfig";
import { theme } from "../styles/theme";
import styled from "styled-components";
import BookCard from "./BookCard";

const Heading2 = styled.h1`
  color: ${theme.typography.Heading2.color};
  font-size: ${theme.typography.Heading2.fontSize};
  font-weight: ${theme.typography.Heading2.fontWeight};
`;

function AuthorBook() {
  const [searchedAuthor, setSearchedAuthor] = useState<any[]>([]);

  useEffect(() => {
    const query = "김초엽";

    async function AuthorFilter() {
      try {
        const response = await instance.get("", {
          params: {
            query: query,
            sort: "accuracy",
          },
        });

        setSearchedAuthor(response.data.documents.slice(0, 4));
      } catch (error) {
        console.log("책 검색 오류:", error);
      }
    }

    AuthorFilter();
  }, []);

  const bookItems = searchedAuthor.map((searchedAuthor) => ({
    title: searchedAuthor.title,
    detail: `${searchedAuthor.authors.join(", ")}/${searchedAuthor.publisher}`,
    // 필요한 다른 속성들을 추가할 수 있습니다.
  }));

  return (
    <div>
      <Heading2>김초엽 작가님의 작품을 만나보세요</Heading2>
      <div className="w-auto h-auto mt-9 ml-64 mr-64 flex flex-row justify-between">
        {bookItems.map((item, index) => (
          <BookCard key={index} title={item.title} detail={item.detail} />
        ))}
      </div>
    </div>
  );
}

export default AuthorBook;
