import React from "react";
import { FaComputer } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import CategoryItem from "./CategoryItem";

const CategoryList: React.FC = () => (
  <>
    <ul className="flex flex-col gap-3 w-full mt-5">
      <CategoryItem icon={<FaComputer fontSize={20} />} title="Υπολογιστές" />
      <CategoryItem
        icon={<IoIosPhonePortrait fontSize={20} />}
        title="Κινητά"
      />
      <CategoryItem
        icon={<PiTelevisionSimpleBold fontSize={20} />}
        title="Τηλεοράσεις"
      />
    </ul>
    <div className="flex mt-5 items-center gap-2 rounded-lg bg-gray-100 py-3 px-2 justify-center">
      <span className="font-bold text-sm">Όλες οι κατηγορίες +</span>
    </div>
  </>
);

export default CategoryList;
