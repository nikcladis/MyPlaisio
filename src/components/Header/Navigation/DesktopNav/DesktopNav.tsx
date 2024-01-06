import React from "react";
import { GrMenu, GrCart } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import Logo from "../../../Logo/Logo";
import Search from "../../Search/Search";

const DesktopNav: React.FC = () => {
  return (
    <>
      <nav className="flex bg-blue-800 p-2 justify-end">
        <ul className="flex font-semibold gap-2 text-sm text-white">
          <li className="flex items-center gap-1">
            <RiMapPinLine />
            <span>Καταστήματα</span>
          </li>
          <li className="flex items-center gap-1">
            <MdOutlineLocalPhone />
            <span>210 2895000</span>
          </li>
          <li className="flex items-center gap-1 text-yellow-400">
            <IoMdHelpCircleOutline />
            <span className="mb-0.5">Βοήθεια & συμβουλή</span>
          </li>
        </ul>
      </nav>
      <nav className="flex p-4 justify-between items-center w-full">
        <div className="flex items-center gap-6">
          <div>
            <Logo width={220} />
          </div>
          <div className="flex items-center gap-3 mt-2">
            <GrMenu fontSize={30} />
            <span className="font-semibold">Προϊόντα</span>
          </div>
        </div>
        <Search />
        <div className="flex items-center gap-4">
          <FaRegHeart fontSize={30} />
          <FaRegCircleUser fontSize={30} />
          <GrCart fontSize={30} />
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
