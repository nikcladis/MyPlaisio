import React from "react";
import { GrMenu, GrPhone, GrCart } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from "../../../Logo/Logo";
import { useSetRecoilState } from "recoil";
import { sidebarState } from "../../../../atoms/sidebarState";
import CartPreview from "../CartPreview/CartPreview";

const MobileNav: React.FC = () => {
  const setSidebarState = useSetRecoilState(sidebarState);

  return (
    <nav className="flex p-4 bg-white justify-between items-center gap-6">
      <div className="flex self-start items-center gap-4">
        <GrMenu
          onClick={() => setSidebarState((prev) => ({ ...prev, isOpen: true }))}
          fontSize={30}
          className="cursor-pointer"
        />
        <GrPhone fontSize={25} className="cursor-pointer" />
      </div>
      <div className="self-center">
        <Logo width={130} />
      </div>
      <div className="flex self-end items-center gap-4">
        <FaRegCircleUser fontSize={25} className="cursor-pointer" />
        <CartPreview />
      </div>
    </nav>
  );
};

export default MobileNav;
