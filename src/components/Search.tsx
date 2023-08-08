import { ChangeEvent, useRef } from "react";
import { useKey } from "./CustomHook/useKey";

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

function Search({ query, setQuery }: SearchProps) {
  const inputElement = useRef<HTMLInputElement>(null);

  useKey("enter", function () {
    if (document.activeElement === inputElement.current) return;
    if (inputElement.current) inputElement.current.focus();

    setQuery("");
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={handleChange}
      ref={inputElement}
    />
  );
}
export default Search;
