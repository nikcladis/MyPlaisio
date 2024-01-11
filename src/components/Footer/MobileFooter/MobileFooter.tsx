import React from "react";
import { MdSmartphone } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import blog from "../../../assets/footer_images/blog.svg";
import youtube from "../../../assets/footer_images/youtube.svg";
import plaisiopro from "../../../assets/footer_images/plaisiopro.svg";
import greatplacetowork from "../../../assets/footer_images/greatplacetowork.svg";

type MobileFooterProps = {};

const MobileFooter: React.FC<MobileFooterProps> = () => {
  return (
    <div className="bg-blue-950 flex justify-evenly py-8 px-4">
      <div className="flex flex-col border border-white text-white p-4 w-4/5 max-w-[500px] items-center">
        MobileFooter
      </div>
    </div>
  );
};
export default MobileFooter;
