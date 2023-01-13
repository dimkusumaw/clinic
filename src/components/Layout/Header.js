import React from "react";
import { useLocation } from "react-router-dom";
import Profile from "../../assets/images/profile.jpg"

function Header() {
  const location = useLocation()

  const pathName = () => {
    return location.pathname;
  }
  
  return (
    <div className="mx-6 mt-5">
      <div className="flex flex-row justify-between">
        <div className="w-1/2 text-2xl font-semibold capitalize">{pathName().replace("/","")}</div>
        <div className="w-1/2 flex justify-end">
          <img src={Profile} alt="profile" className="w-10 rounded-full"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
