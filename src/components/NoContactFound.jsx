import React from "react";

const NoContactFound = () => {
  return (
    <div className="w-full flex items-center gap-4 m-auto justify-center absolute top-1/2">
      <img src="/Hands Contact.svg" alt="contact" />
      <h3 className="text-white text-2xl font-bold">No Contact Found</h3>
    </div>
  );
};

export default NoContactFound;
