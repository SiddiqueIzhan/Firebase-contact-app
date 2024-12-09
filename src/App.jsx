import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/search";
import ContactBar from "./components/contactBar";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoContactFound from "./components/NoContactFound";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const { showModal, handleShowModal, handleClose } = useDisclose();

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const resData = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });

      const filteredContents = resData.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContents);
      return filteredContents;
    });
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const resData = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setContacts(resData);
          return resData;
        });
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="max-w-[370px] mx-4 my-2  relative min-h-screen">
        <ToastContainer />
        <Navbar />
        <SearchBar
          handleShowModal={handleShowModal}
          filterContacts={filterContacts}
        />
        <div className="w-full mt-[18px] flex flex-col gap-[11px]">
          {contacts.length ? (
            contacts.map((contact) => (
              <>
                <ContactBar
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  email={contact.email}
                />
              </>
            ))
          ) : (
            <NoContactFound />
          )}
        </div>
      </div>
      <AddAndUpdate isUpdate={false} isOpen={showModal} onClose={handleClose} />
    </>
  );
}
