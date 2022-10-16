import React from "react";
import BellIcon from "../Icons/BellIcon";
import SearchIcon from "../Icons/SearchIcon";
import Profile from "../../assets/images/profile.jpg"

function Header(props) {
  return (
    <div className="m-4 mt-5">
      <div className="flex flex-row justify-between">
        <div className="w-1/3 text-2xl font-semibold">Hi, Samid</div>
        <div className="w-1/3 flex flex-row justify-center">
          <div className="relative">
            <SearchIcon className="absolute bottom-2 left-3" />
            <input
              type="text"
              name=""
              id=""
              className="bg-[#121317] p-2 pl-10 rounded-lg w-56"
              placeholder="Search"
            />
          </div>
          <div className="ml-10 relative">
            <BellIcon className="absolute top-2"/>
            <div className="absolute bg-purple-700 rounded-full p-1 left-5 top-0"></div>
          </div>
        </div>
        <div className="w-1/3 flex justify-end">
          <img src={Profile} alt="profile" className="w-10 rounded-full"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
