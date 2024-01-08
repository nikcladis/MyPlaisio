import React from "react";
import Overlay from "./Overlay/Overlay";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import CategoryList from "./CategoryList/CategoryList";
import { useRecoilValue } from "recoil";
import { sidebarState } from "../../atoms/sidebarState";
import SidebarFooter from "./SidebarFooter/SidebarFooter";

const Sidebar: React.FC = () => {
  const { isOpen } = useRecoilValue(sidebarState);

  if (!isOpen) return null;

  return (
    <>
      <Overlay />
      <aside className="fixed z-20 top-0 h-screen flex flex-col bg-white px-4 overflow-y-auto">
        <SidebarHeader />
        <CategoryList />
        <SidebarFooter />
      </aside>
    </>
  );
};
export default Sidebar;
