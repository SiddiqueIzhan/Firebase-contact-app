import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { db } from "../firebase";
import Modal from "./modal";
import { toast } from "react-toastify";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().required("Email is Required"),
});

const AddAndUpdate = ({ id, name, email, isUpdate, isOpen, onClose }) => {
  const addContact = async (contact) => {
    try {
      const contactsRef = collection(db, "contacts");
      await addDoc(contactsRef, contact);
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.error(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactsRef = doc(db, "contacts", id);
      await updateDoc(contactsRef, contact);
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal handleClose={onClose} showModal={isOpen}>
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
        validationSchema={validationSchema}
        onSubmit={(values) => {
          isUpdate ? updateContact(values, id) : addContact(values);
          onClose();
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
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
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
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
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
