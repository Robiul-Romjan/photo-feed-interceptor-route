"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter()
 
  useEffect(() => {
    if (!modalRef.current?.open) {
        modalRef.current?.showModal();
      }
  }, []);

  const onHide = () => {
    router.back();
  }

  return createPortal(
    <dialog 
    ref={modalRef}
    onClose={onHide}
     className="w-4/5 shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100" 
     >
         <span onClick={onHide}
          className="flex justify-end cursor-pointer">
          X
          </span>
        {children}
        </dialog>,
    document.getElementById("show-modal-box")
  );
};

export default Modal;
