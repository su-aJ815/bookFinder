import classNames from "classnames";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface SearchboxProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
}

function SearchBar({ className, ...props }: SearchboxProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  const defaultClasses =
    "w-full h-20 border border-zinc-900 rounded-full flex flex-row justify-start";
  const combinedClassName = classNames(defaultClasses, className);
  return (
    <div className={combinedClassName}>
      <input
        className="w-10/12 h-full rounded-l-full pl-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <div
        className="w-2/12 h-full rounded-r-full bg-zinc-900 text-white text-center py-6"
        onClick={handleSearch}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      </div>
    </div>
  );
}

export default SearchBar;
