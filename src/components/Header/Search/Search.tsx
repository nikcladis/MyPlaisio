import React from "react";
import styles from "./Search.module.css";

type SearchProps = {};

const Search: React.FC<SearchProps> = () => {
  return <div className={styles.search}>Search</div>;
};
export default Search;
