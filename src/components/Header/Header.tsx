import React from "react";
import Navigation from "./Navigation/Navigation";
import { useMediaQuery } from "react-responsive";
import Search from "./Search/Search";

const Header: React.FC = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 769 });

  return (
    <header>
      <Navigation isLargeScreen={isLargeScreen} />
      {!isLargeScreen && <Search />}
    </header>
  );
};
export default Header;
