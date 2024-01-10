import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

type SearchProps = {};

const Search: React.FC<SearchProps> = () => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearching = () => {
    setIsSearching(true);
  };

  const handleBlur = () => {
    setIsSearching(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-white flex-1 py-2"
    >
      <fieldset
        className={`relative flex items-center mx-4 rounded-full border flex-1 mt-1 ${
          isSearching
            ? "bg-white border-green-500"
            : "bg-gray-100 border-transparent"
        }`}
      >
        {isSearching && (
          <GrClose fontSize={22} className="absolute left-4 text-gray-500" />
        )}
        {!isSearching && (
          <GrSearch fontSize={22} className="absolute left-4 text-gray-500" />
        )}
        <input
          onClick={handleSearching}
          onBlur={handleBlur}
          type="text"
          placeholder={!isSearching ? "Ψάχνεις για..." : ""}
          className="w-full z-10 py-3 pl-12 placeholder:text-gray-500 placeholder:font-semibold text-black bg-transparent focus:outline-none"
        />
      </fieldset>
    </form>
  );
};

export default Search;
