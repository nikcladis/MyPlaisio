import React from "react";

const SidebarFooter: React.FC = () => {
  return (
    <>
      <hr className="my-6 border-t-2 border-gray-400" />
      <ul className="flex flex-col gap-3 text-lg mb-5">
        <li>Παρακολούθηση παραγγελίας</li>
        <li>Πορεία επισκευής</li>
        <li>Καταστήματα</li>
        <li>Αγαπημένα</li>
        <li>Βοήθεια και συμβουλή</li>
      </ul>
    </>
  );
};
export default SidebarFooter;
