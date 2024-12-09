import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

const SearchBar = ({ handleShowModal, filterContacts }) => {
  return (
    <div className="flex items-center justify-center gap-3 mt-[14px]">
      <IoSearchSharp className="text-white absolute left-3" />
      <input
        type="text"
        className="w-[295px] border-white border rounded-[10px] py-2 px-[10px] pl-10 bg-transparent outline-none text-white"
        onChange={filterContacts}
      />
      <IoIosAddCircle
        className="w-[52px] h-[52px] text-white hover:text-black cursor-pointer"
        onClick={handleShowModal}
      />
    </div>
  );
};

export default SearchBar;
