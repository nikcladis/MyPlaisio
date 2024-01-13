import React, { useState } from "react";
import { MdSmartphone } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import plaisiopro from "../../../assets/footer_images/plaisiopro.svg";
import blog from "../../../assets/footer_images/blog.svg";
import youtube from "../../../assets/footer_images/youtube.svg";

type MobileFooterProps = {};

const MobileFooter: React.FC<MobileFooterProps> = () => {
  const [isExpanded, setIsExpanded] = useState([false, false, false]);

  const handleClick = (index: number) => {
    setIsExpanded((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  return (
    <div className="bg-blue-950 flex justify-evenly py-8 px-4">
      <div className="flex flex-col text-white w-4/5 max-w-[300px] items-center">
        <div className="flex border border-white w-full items-center justify-center p-3 gap-3">
          <MdSmartphone size={30} />
          <span className="font-bold text-lg">210 2895000</span>
        </div>
        <div className="w-full relative">
          <div
            onClick={() => handleClick(0)}
            className={`z-10 bg-blue-950 py-6 flex justify-between items-center w-full transition-margin duration-500 ease ${
              isExpanded[0] ? "mb-[120px]" : ""
            }`}
          >
            <span className="font-bold uppercase">Η Εταιρεια</span>
            {isExpanded[0] ? <FaMinus size={12} /> : <FaPlus size={12} />}
          </div>
          <ul className="w-full bg-blue-950 absolute top-[70px] z-0 text-gray-400 font-semibold">
            <li>Σχετικά με μας</li>
            <li>Ευκαιρίες καριέρας</li>
            <li>Η Εταιρεία</li>
            <li>Εταιρική υπευθυνότητα</li>
            <li>RBA Membership Status</li>
          </ul>
        </div>
        <div className="w-full relative">
          <div
            onClick={() => handleClick(1)}
            className={`z-10 bg-blue-950 py-6 flex justify-between items-center w-full transition-margin duration-500 ease ${
              isExpanded[1] ? "mb-[100px]" : ""
            }`}
          >
            <span className="font-bold uppercase">Online Αγορες</span>
            {isExpanded[1] ? <FaMinus size={12} /> : <FaPlus size={12} />}
          </div>
          <ul className="w-full bg-blue-950 absolute top-[70px] z-0 text-gray-400 font-semibold">
            <li>Ο λογαριασμός μου</li>
            <li>Τρόποι πληρωμής</li>
            <li>Πληρωμή Μήνα Μήνα</li>
            <li>Εξοδα αποστολής</li>
            <li>Επιστροφές</li>
          </ul>
        </div>
        <div className="w-full relative">
          <div
            onClick={() => handleClick(2)}
            className={`z-10 bg-blue-950 py-6 flex justify-between items-center w-full transition-margin duration-500 ease ${
              isExpanded[2] ? "mb-[100px]" : ""
            }`}
          >
            <span className="font-bold uppercase">Εξυπηρετηση Πελατων</span>
            {isExpanded[2] ? <FaMinus size={12} /> : <FaPlus size={12} />}
          </div>
          <ul className="w-full bg-blue-950 absolute top-[70px] z-0 text-gray-400 font-semibold">
            <li>Επικοινωνία</li>
            <li>Τεχνική Υποστήριξη</li>
            <li>Πορεία παραγγελίας</li>
            <li>Πορεία επισκευής</li>
            <li>Καταστήματα</li>
          </ul>
        </div>
        <div className="z-10 bg-blue-950 w-full py-2 flex ">
          <img
            src={plaisiopro}
            width={300}
            className="flex-1 bg-white bg-opacity-10 rounded-md p-4"
          />
        </div>
        <div className="z-10 bg-blue-950 w-full flex justify-between items-center gap-2">
          <img
            src={blog}
            alt="blog"
            className="aspect-video flex-1 bg-white bg-opacity-10 rounded-md p-4"
          />
          <img
            src={youtube}
            alt="youtube"
            className="aspect-video flex-1 bg-white bg-opacity-10 rounded-md p-4"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
