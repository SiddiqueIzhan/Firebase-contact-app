import React, { useState } from "react";

const useDisclose = () => {
  const [showModal, setshowModal] = useState(false);

  const handleShowModal = () => {
    setshowModal(true);
  };

  const handleClose = () => {
    setshowModal(false);
  };

  return { showModal, handleShowModal, handleClose };
};

export default useDisclose;
