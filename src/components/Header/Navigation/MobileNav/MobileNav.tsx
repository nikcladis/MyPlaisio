import React from "react";
import { GrMenu, GrPhone, GrCart } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from "../../../Logo/Logo";

const MobileNav: React.FC = () => {
  return (
    <nav>
      <div>
        <GrMenu fontSize={30} />
        <GrPhone fontSize={25} />
      </div>
      <Logo width={130} />
      <div>
        <FaRegCircleUser fontSize={25} />
        <GrCart fontSize={25} />
      </div>
    </nav>
  );
};

export default MobileNav;
