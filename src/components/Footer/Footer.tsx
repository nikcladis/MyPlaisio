import React from "react";
import DesktopFooter from "./DesktopFooter/DesktopFooter";
import MobileFooter from "./MobileFooter/MobileFooter";
import { useMediaQuery } from "react-responsive";

const Footer: React.FC = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <footer>
      {isLargeScreen && <DesktopFooter />}
      {!isLargeScreen && <MobileFooter />}
    </footer>
  );
};
export default Footer;
