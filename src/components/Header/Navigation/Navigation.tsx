import React from "react";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

type NavigationProps = {
  isLargeScreen: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ isLargeScreen }) => {
  return isLargeScreen ? <DesktopNav /> : <MobileNav />;
};

export default Navigation;
