import React from "react";
import useCloseSidebar from "../../../hooks/useCloseSidebar";

const Overlay: React.FC = () => {
  const closeSidebar = useCloseSidebar();

  return (
    <div
      onClick={closeSidebar}
      className="z-20 fixed top-0 overflow-hidden h-screen bg-black opacity-50 w-full"
    />
  );
};

export default Overlay;
