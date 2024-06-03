import classNames from "classnames";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface SearchboxProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
}

function SearchBar({ className, ...props }: SearchboxProps) {
  const defaultClasses =
    "w-full h-20 border border-zinc-900 rounded-full flex flex-row justify-start";
  const combinedClassName = classNames(defaultClasses, className);
  return (
    <div className={combinedClassName}>
      <input className="w-10/12 h-full rounded-l-full" />
      <div className="w-2/12 h-full rounded-r-full bg-zinc-900 text-white text-center py-6">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      </div>
    </div>
  );
}

export default SearchBar;
