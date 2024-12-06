import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] bg-white flex items-center justify-center rounded-[10px] gap-2">
      <img src="./logos_firebase.svg" alt="logo" />
      <h3 className="font-bold">Firebase Contact App</h3>
    </div>
  );
};

export default Navbar;
