import React from "react";
import { GrMenu } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Logo from "../../../Logo/Logo";
import Search from "../../Search/Search";
import { useSetRecoilState } from "recoil";
import { sidebarState } from "../../../../atoms/sidebarState";
import { accountModalState } from "../../../../atoms/accountModalState";
import CartPreview from "../CartPreview/CartPreview";

const DesktopNav: React.FC = () => {
  const setSidebarState = useSetRecoilState(sidebarState);
  const setAccountModalState = useSetRecoilState(accountModalState);

  return (
    <>
      <nav className="bg-white flex p-4 justify-between items-center w-full">
        <div className="flex items-center gap-6">
          <div className="cursor-pointer">
            <Logo width={220} />
          </div>
          <div className="flex items-center gap-3 mt-2">
            <GrMenu
              onClick={() =>
                setSidebarState((prev) => ({ ...prev, isOpen: true }))
              }
              fontSize={30}
              className="cursor-pointer"
            />
            <span className="font-semibold">Προϊόντα</span>
          </div>
        </div>
        <Search />
        <div className="flex items-center gap-4">
          <FaRegHeart fontSize={30} className="cursor-pointer" />
          <FaRegCircleUser
            onClick={() =>
              setAccountModalState((prev) => ({ ...prev, isOpen: true }))
            }
            fontSize={30}
            className="cursor-pointer"
          />
          <CartPreview />
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
