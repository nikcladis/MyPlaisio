import React from "react";

type SearchProps = {
  className?: string;
};

const Search: React.FC<SearchProps> = ({ className }) => {
  return <div className={className}>Search</div>;
};

export default Search;
