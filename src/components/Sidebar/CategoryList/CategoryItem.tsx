import React, { ReactNode } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface CategoryItemProps {
  icon: ReactNode;
  title: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, title }) => (
  <li className="flex w-full gap-3 items-center">
    {icon}
    <span className="font-semibold text-md">{title}</span>
    <MdKeyboardArrowRight className="ml-auto" />
  </li>
);

export default CategoryItem;
