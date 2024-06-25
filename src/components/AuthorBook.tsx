import React, { useEffect, useState } from "react";
import instance from "../API/axiosConfig";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import BookCard from "./BookCard";
import Heading2 from "../styles/Typography/Heading2";
import '../styles/home.scss';

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
    isbn: searchedAuthor.isbn,
    bstatus: searchedAuthor.status,
    price: searchedAuthor.price,
    datetime: searchedAuthor.datetime,
    thumbnail: searchedAuthor.thumbnail,
    // 필요한 다른 속성들을 추가할 수 있습니다.
  }));

  return (
    <ThemeProvider theme={theme}>
      <Heading2 className="author-box">김초엽 작가님의 작품을 만나보세요</Heading2>
      <div className="w-auto h-auto mt-9 flex flex-wrap flex-row justify-center gap-8">
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
    </ThemeProvider>
  );
}

export default AuthorBook;
