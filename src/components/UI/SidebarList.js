import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function SidebarList(props) {
  const activeLink = " bg-white/30 text-white p-2 rounded-lg";
  const normalLink = "p-2";

  return (
    <Fragment>
      <li className="mt-5 flex items-center rounded-xl">
        <NavLink
          to={props.link}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div
            className={`flex items-center relative group ${({ isActive }) =>
              isActive ? activeLink : normalLink}`}
          >
            {props.icon}
            <div className="inline-block">
              <span className="invisible group-hover:visible absolute h-0 w-0 border-y-8 -bottom-0 left-11 border-y-transparent border-r-8 backdrop-blur-md border-r-black/50 whitespace-nowrap"></span>
              <span className="invisible group-hover:visible absolute -bottom-2 left-12 backdrop-blur-md bg-black/50 p-1 pr-2 pl-2 font-semibold whitespace-nowrap rounded">{props.menu}</span>
            </div>
          </div>
        </NavLink>
      </li>
    </Fragment>
  );
}

export default SidebarList;
