import React from "react";
import { MdPostAdd } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl">React App</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select className="h-10 rounded-lg" name="" id="">
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>
        <input
          className="h-10 rounded-md lg px-4"
          type="text"
          placeholder="Search Here"
        />

        <div>
          <MdPostAdd />
        </div>
      </div>
    </div>
  );
};

export default Header;
