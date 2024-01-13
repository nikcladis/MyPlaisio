import { atom } from "recoil";

type AccountState = {
  isOpen: boolean;
};

const initialAccountModalState: AccountState = {
  isOpen: false,
};

export const accountModalState = atom<AccountState>({
  key: "accountModalState",
  default: initialAccountModalState,
});
