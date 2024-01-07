import React from "react";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";

type TopbarProps = {};

const Topbar: React.FC<TopbarProps> = () => {
  return (
    <nav className="z-1 flex bg-blue-800 p-2 justify-end">
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
  );
};
export default Topbar;
