import React from "react";

const Modal = ({ children,isOpen,onClose }) => {
    if(!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
      <div className="bg-white rounded-2xl p-4 w-96 relative">
        {children}
      </div>
      <div className="relative">
        <button className="absolute -top-18 right-2 background-none border-none text-lg" onClick={onClose}>❌</button>
      </div>
    </div>
  );
};

function ModalHeader({children}){
    return <div className='font-bold mb-4'>{children}</div>

}
function ModalBody({children}){
    return <div className='modal-body'>{children}</div>

}
function ModalFooter({children}){
    return <div className='flex justify-end gap-2 mt-4'>{children}</div>

}


Modal.Header=ModalHeader;
Modal.Body=ModalBody;
Modal.Footer=ModalFooter;
export default Modal;
