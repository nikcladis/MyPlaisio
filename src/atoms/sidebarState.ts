import { atom } from "recoil";

type SidebarState = {
    isOpen: boolean;
}

const initialSidebarState: SidebarState = {
    isOpen: false,
}

export const sidebarState = atom<SidebarState>({
    key: "sidebarState",
    default: initialSidebarState,
})
