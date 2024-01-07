import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { sidebarState } from "../atoms/sidebarState";

function useCloseSidebar() {
  const setSidebarState = useSetRecoilState(sidebarState);

  const closeSidebar = () => {
    setSidebarState((prev) => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSidebar();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return closeSidebar;
}

export default useCloseSidebar;
