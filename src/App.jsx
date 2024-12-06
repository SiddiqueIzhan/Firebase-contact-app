import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/search";
import ContactBar from "./components/contactBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Modal from "./components/modal";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclose from "./hooks/useDisclose";

export default function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const data = await getDocs(contactsRef);

        if (data.empty) {
          console.log("No contacts found!");
        } else {
          const resData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          console.log("Fetched Contacts: ", resData);
          setContacts(resData);
          const q = query(
            contactsRef,
            where("email", "==", "example@example.com")
          );
          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
          });
        }
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    };
    getContacts();
  }, []);

  return (
    <div className="max-w-[370px] my-2 mx-auto relative">
      <Navbar />
      <SearchBar
      // handleShowModal={handleShowModal}
      />
      <div className="w-full mt-[18px] flex flex-col gap-[11px]">
        {contacts.map((contact) => (
          <>
            <ContactBar
              id={contact.id}
              name={contact.name}
              email={contact.email}
            />
          </>
        ))}
      </div>
    </div>
  );
}
