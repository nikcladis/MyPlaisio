import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

type SearchProps = {};

const Search: React.FC<SearchProps> = () => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearching = () => {
    setIsSearching(true);
  };

  return (
    <div className="bg-white flex-1 py-2">
      <div
        onClick={handleSearching}
        onBlur={() => setIsSearching(false)}
        className={`mx-4 py-2 px-4 rounded-full border flex-1 mt-1 ${
          isSearching
            ? "bg-white border-green-500"
            : "bg-gray-100 border-transparent"
        }`}
      >
        <div className="flex items-center gap-5">
          {isSearching && <GrClose fontSize={22} className="text-gray-500" />}
          {!isSearching && <GrSearch fontSize={22} className="text-gray-500" />}
          <input
            type="text"
            placeholder={!isSearching ? "Ψάχνεις για..." : ""}
            className="w-full placeholder:text-gray-500 placeholder:font-semibold text-black bg-transparent focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
