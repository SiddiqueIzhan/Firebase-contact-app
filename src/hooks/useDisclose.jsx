import React, { useState } from "react";

const useDisclose = () => {
  const [showModal, setshowModal] = useState(true);

  const handleShowModal = () => {
    setshowModal(true);
    console.log(showModal);
  };

  const handleClose = () => {
    setshowModal(false);
  };

  return { showModal, handleShowModal, handleClose };
};

export default useDisclose;
