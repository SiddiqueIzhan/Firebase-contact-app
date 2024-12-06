import { addDoc, collection, doc } from "firebase/firestore";
import { Field, Form, Formik } from "formik";
import React from "react";
import { db } from "../firebase";
import Modal from "./modal";
import useDisclose from "../hooks/useDisclose";

const AddAndUpdate = ({ name, email, isUpdate }) => {
  const { showModal, handleShowModal, handleClose } = useDisclose();
  const addContact = async (contact) => {
    try {
      const contactsRef = collection(db, "contacts");
      await addDoc(contactsRef, contact);
    } catch (error) {
      console.error(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactsRef = doc(db, "contacts", id);
      await updateDoc(contactsRef, contact);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal handleClose={handleClose} showModal={showModal}>
      <Formik
        initialValues={
          isUpdate
            ? {
                name: name,
                email: email,
              }
            : {
                name: "",
                email: "",
              }
        }
        onSubmit={(values) => {
          isUpdate ? updateContact(values, id) : addContact(values);
        }}
      >
        <Form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="border border-black px-[14px] py-[10px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="border border-black px-[14px] py-[10px]"
            />
          </div>
          <button
            type="submit"
            className="w-[145px] bg-[#FCCA3F] py-1.5 px-3 border border-black rounded-md self-end"
          >
            {isUpdate ? "Update" : "Add"} Contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdate;
