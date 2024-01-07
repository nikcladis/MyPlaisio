import React from "react";
import Overlay from "./Overlay/Overlay";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import CategoryList from "./CategoryList/CategoryList";
import { useRecoilValue } from "recoil";
import { sidebarState } from "../../atoms/sidebarState";

const Sidebar: React.FC = () => {
  const { isOpen } = useRecoilValue(sidebarState);

  if (!isOpen) return null;

  return (
    <>
      <Overlay />
      <aside className="fixed top-0 h-screen flex flex-col bg-white px-4 overflow-y-auto">
        <SidebarHeader />
        <CategoryList />
        <hr className="mt-6 border-t-2 border-gray-400" />
        <ul className="mt-10 flex flex-col gap-3 text-lg">
          <li>Παρακολούθηση παραγγελίας</li>
          <li>Πορεία επισκευής</li>
          <li>Καταστήματα</li>
          <li>Αγαπημένα</li>
          <li>Βοήθεια και συμβουλή</li>
        </ul>
      </aside>
    </>
  );
};
export default Sidebar;
