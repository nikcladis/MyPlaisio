import React from "react";
import { BsRecycle } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { GrClose, GrMagic } from "react-icons/gr";
import { RiServiceLine } from "react-icons/ri";
import useCloseSidebar from "../../../hooks/useCloseSidebar";

const SidebarHeader: React.FC = () => {
  const closeSidebar = useCloseSidebar();

  return (
    <>
      <div className="flex py-3 sticky top-0 bg-white items-center gap-2 font-semibold">
        <GrClose onClick={closeSidebar} fontSize={20} />
        <span>Προϊόντα</span>
      </div>
      <div className="flex gap-2 mt-10 text-blue-800">
        <div className="flex flex-col gap-2 items-center bg-pink-200 p-3 rounded-md w-24">
          <CiDiscount1 fontSize={40} />
          <span className="text-xs font-semibold">Προσφορές</span>
        </div>
        <div className="flex flex-col gap-2 items-center bg-blue-100 p-3 rounded-md w-24">
          <RiServiceLine fontSize={40} />
          <span className="text-xs font-semibold">Υπηρεσίες</span>
        </div>
        <div className="flex flex-col gap-2 items-center bg-yellow-100 p-3 rounded-md w-24">
          <BsRecycle fontSize={40} />
          <span className="text-xs font-semibold">Ανακύκλωση</span>
        </div>
      </div>
      <div className="flex mt-5 items-center gap-2 rounded-lg bg-gray-100 py-3 px-2 justify-center">
        <GrMagic fontSize={20} />
        <span className="font-bold text-sm">Wizard Προϊόντων</span>
      </div>
    </>
  );
};

export default SidebarHeader;
