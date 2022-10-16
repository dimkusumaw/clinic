import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";


function SidebarList(props) {
  const activeLink = "text-white bg-gradient-to-r from-[#F495FB] via-[#B8479F] to-[#7A9EEF] p-2 pl-3 pr-3 w-full rounded-lg";
  const normalLink = "p-2 pl-3 pr-3 w-full";

  return (
    <Fragment>
      <li className="mt-5 flex items-center">
        <NavLink
          to={props.link}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        > 
          <div className={`flex items-center ${({ isActive }) => (isActive ? activeLink : normalLink)}`}>
            {props.icon}
            <span className="ml-5">{props.menu}</span>
          </div>
        </NavLink>
      </li>
    </Fragment>
  );
}

export default SidebarList;
