import React from "react";
import Navigation from "./Navigation/Navigation";
import { useMediaQuery } from "react-responsive";
import Search from "./Search/Search";
import Topbar from "./Topbar/Topbar";

const Header: React.FC = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 769 });

  return (
    <>
      {isLargeScreen && <Topbar />}
      <header className="sticky top-0 z-10">
        <Navigation isLargeScreen={isLargeScreen} />
        {!isLargeScreen && <Search />}
      </header>
    </>
  );
};
export default Header;
