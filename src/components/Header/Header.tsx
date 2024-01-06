import React from "react";
import Search from "./Search/Search";
import Navigation from "./Navigation/Navigation";
import { useMediaQuery } from "react-responsive";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 769 });

  return (
    <header className={styles.header}>
      <Navigation isLargeScreen={isLargeScreen} />
      {!isLargeScreen && <Search />}
    </header>
  );
};
export default Header;
