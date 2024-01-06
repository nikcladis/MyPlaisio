import React from "react";
import { GrMenu, GrPhone, GrCart } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Search from "../../Search/Search";
import Logo from "../../../Logo/Logo";

const DesktopNav: React.FC = () => {
  return (
    <nav>
      <div>
        <div>
          <Logo width={180} />
        </div>
        <div>
          <GrMenu fontSize={28} />
          <span>Προϊόντα</span>
        </div>
      </div>
      <Search />
      <div>
        <FaRegHeart fontSize={25} />
        <FaRegCircleUser fontSize={25} />
        <GrCart fontSize={25} />
      </div>
    </nav>
  );
};

export default DesktopNav;
