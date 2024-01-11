import React from "react";
import { MdSmartphone } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import blog from "../../../assets/footer_images/blog.svg";
import youtube from "../../../assets/footer_images/youtube.svg";
import plaisiopro from "../../../assets/footer_images/plaisiopro.svg";
import greatplacetowork from "../../../assets/footer_images/greatplacetowork.svg";

type DesktopFooterProps = {};

const DesktopFooter: React.FC<DesktopFooterProps> = () => {
  return (
    <div className="bg-blue-950 flex justify-evenly py-8 px-4">
      <div className="flex flex-col gap-3">
        <p className="text-lg font-semibold uppercase text-white">Η Εταιρεια</p>
        <ul className="flex flex-col gap-2 text-gray-400 font-semibold">
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Σχετικά με μάς
          </li>
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Ευκαιρίες καριέρας
          </li>
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Η Εταιρεία
          </li>
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Εταιρική υπευθυνότητα
          </li>
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            RBA Membership Status
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-lg font-semibold uppercase text-white">
          Online Αγορες
        </p>
        <ul className="flex flex-col gap-2 text-gray-400 font-semibold">
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Ο λογαριασμός μου
          </li>
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Τρόποι πληρωμής
          </li>
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Πληρωμή Μήνα Μήνα
          </li>
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Έξοδα αποστολής
          </li>
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Επιστροφές
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-lg font-semibold uppercase text-white">
          Εξυπηρετηση πελατων
        </p>
        <ul className="flex flex-col gap-2 text-gray-400 font-semibold">
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Επικοινωνία
          </li>
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Τεχνική Υποστήριξη
          </li>
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Πορεία παραγγελίας
          </li>
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Πορεία επισκευής
          </li>
          <li className="hover:text-white transition-colors 300ms ease cursor-pointer">
            Καταστήματα
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center text-white font-bold cursor-pointer">
          <MdSmartphone color="white" size={25} />
          <span>210 2895000</span>
        </div>
        <div className="flex gap-2 items-center text-white font-bold cursor-pointer ml-1">
          <FaPhoneAlt color="white" size={20} />
          <span>800 11 12345</span>
        </div>
        <div className="flex gap-3 mt-4">
          <div className="flex items-center justify-center bg-white bg-opacity-15 aspect-video rounded-md px-6">
            <img src={blog} alt="blog" className="w-20 h-20 cursor-pointer" />
          </div>
          <div className="flex items-center justify-center bg-white bg-opacity-15 aspect-video rounded-md px-6">
            <img
              src={youtube}
              alt="youtube"
              className="w-20 h-20 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesktopFooter;
