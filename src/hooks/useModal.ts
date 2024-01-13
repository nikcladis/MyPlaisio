import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { accountModalState } from "../atoms/accountModalState";

function useModal() {
  const modalState = useRecoilValue(accountModalState);
  const setModalState = useSetRecoilState(accountModalState);

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return { modalState, closeModal };
}

export default useModal;
