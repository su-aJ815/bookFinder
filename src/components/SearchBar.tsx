import classNames from "classnames";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface SearchboxProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
}

const SearchContainer = styled.div`
  height: 80px;

  @media (min-width: 768px) and (max-width: 992px) {
    height: 64px;
  }

  @media (max-width: 768px) {
    height: 54px;
  }
`;

const IconPadding = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;

  @media (min-width: 768px) and (max-width: 992px) {
    padding-top: 18px;
  }

  @media (max-width: 768px) {
    padding-top: 12px;
  }
`



function SearchBar({ className, ...props }: SearchboxProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  const defaultClasses =
    "w-full border border-zinc-900 rounded-full flex flex-row justify-start";
  const combinedClassName = classNames(defaultClasses, className);
  return (
    <SearchContainer className={combinedClassName}>
      <input
        className="w-10/12 h-full rounded-l-full pl-5 bg-white/60"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <IconPadding
        className="w-2/12 h-full rounded-r-full bg-zinc-900 text-white text-center"
        onClick={handleSearch}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      </IconPadding>
    </SearchContainer>
  );
}

export default SearchBar;
