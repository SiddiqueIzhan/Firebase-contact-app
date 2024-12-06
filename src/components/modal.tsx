import React from "react";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ handleClose, showModal, children }) => {
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    console.error("modal-root element not found!");
    return null; // or some fallback content
  }
  return createPortal(
    <>
      {showModal && (
        <>
          <div className="w-[348px] bg-[#FDFDFD] rounded-lg z-50 p-4 m-auto absolute left-4">
            <IoCloseSharp
              className="absolute right-4 top-4 text-xl"
              onClick={handleClose}
            />
            {children}
          </div>
          <div
            className="w-screen h-screen backdrop-blur absolute top-0 z-40 "
            onClick={handleClose}
          />
        </>
      )}
    </>,
    modalRoot
  );
};

export default Modal;
