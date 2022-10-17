import React from "react";
import Profile from "../../assets/images/profile.jpg"

function Header(props) {
  return (
    <div className="m-6 mt-5">
      <div className="flex flex-row justify-between">
        <div className="w-1/2 text-2xl font-semibold">Hi, Samid</div>
        <div className="w-1/2 flex justify-end">
          <img src={Profile} alt="profile" className="w-10 rounded-full"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
