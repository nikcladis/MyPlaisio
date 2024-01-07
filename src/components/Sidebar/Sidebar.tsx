import React from "react";

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return <div className="h-screen">Sidebar</div>;
};
export default Sidebar;
