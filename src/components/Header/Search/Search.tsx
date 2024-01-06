import React from "react";
import styles from "./Search.module.css";

type SearchProps = {};

const Search: React.FC<SearchProps> = () => {
  return <search className={styles.search}>Search</search>;
};
export default Search;
