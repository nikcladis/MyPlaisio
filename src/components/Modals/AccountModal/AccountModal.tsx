import React from "react";
import { GrClose } from "react-icons/gr";
import useModal from "../../../hooks/useModal";

const AccountModal: React.FC = () => {
  const { modalState, closeModal } = useModal();

  if (!modalState.isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black opacity-50 z-10"
      />

      {/* Modal */}
      <dialog
        open
        className="z-10 fixed top-1/2 -translate-y-1/2 rounded-md max-w-[600px] w-[95%]"
      >
        <GrClose
          onClick={closeModal}
          className="absolute right-5 top-5 cursor-pointer"
        />
        <div className="flex flex-col max-h-[520px] overflow-y-auto mt-10 overflow-x-hidden">
          <h2 className="text-lg font-bold mb-4 mx-8">Δεν έχεις λογαριασμό;</h2>
          <p className="text-sm font-semibold mx-8">
            Προχώρησε με την παραγγελία σου και δημιούργησε λογαριασμό μετά την
            ολοκλήρωση αγοράς αν θέλεις
          </p>
          <button className="mt-8 text-center w-full text-green-500 font-semibold">
            Δημιούργησε τώρα λογαριασμό
          </button>
          <div className="flex w-full items-center justify-between my-8">
            <hr className="flex-1 border-gray-400" />
            <span className="mx-2 text-gray-400">ή</span>
            <hr className="flex-1 border-gray-400" />
          </div>
          <h2 className="text-lg font-bold mx-8 mb-4">Έχεις ήδη λογαριασμό;</h2>
          <p className="text-sm font-semibold mx-8 mb-8">
            Συνδέσου με τα στοιχεία σου για γρήγορη αγορά
          </p>
          <form className="flex flex-col gap-5">
            <input
              placeholder="Email"
              className="border border-gray-400 rounded-sm mx-8 p-4 outline-none"
            />
            <input
              placeholder="Password"
              className="border border-gray-400 rounded-sm mx-8 p-4 outline-none"
            />
            <div className="px-8 flex justify-between items-center mb-8">
              <div className="flex gap-2 items-center">
                <input
                  id="remindMe"
                  type="checkbox"
                  className="form-checkbox h-6 w-6 border-2 border-gray-400 bg-white text-white accent-green-400"
                />
                <label htmlFor="remindMe" className="font-semibold">
                  <span className="text-sm">Θυμήσου με</span>
                </label>
              </div>
              <button>
                <span className="text-sm font-semibold text-blue-400">
                  Ξέχασα το password
                </span>
              </button>
            </div>
            <button className="mx-8 border border-green-500 mb-12 rounded-sm p-2">
              <span className="text-green-500 font-semibold">Είσοδος</span>
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default AccountModal;
