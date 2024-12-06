import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { TbEditCircle } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import AddAndUpdate from "./AddAndUpdate";

const ContactBar = ({ id, email, name }) => {
  const { showModal, handleShowModal, handleClose } = useDisclose();
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="w-full h-[64px] bg-[#FFEAAE] rounded-[10px] px-[10px] flex justify-between items-center">
        <div className="flex items-center gap-[11px]">
          <FaRegUserCircle className="text-[#F6820C] text-[37.5px]" />
          <div>
            <h3 className="text-base">{name}</h3>
            <p className="text-sm">{email}</p>
          </div>
        </div>
        <div className="flex gap-2 text-3xl">
          <TbEditCircle
            className="hover:text-green-500"
            onClick={() => updateContact()}
          />
          <MdDelete
            className="text-[#5F00D9] hover:text-red-500"
            onClick={() => handleDelete(id)}
          />
        </div>
      </div>
      <AddAndUpdate
        isUpdate={true}
        id={contact.id}
        name={contact.name}
        email={contact.email}
      />
    </>
  );
};

export default ContactBar;
