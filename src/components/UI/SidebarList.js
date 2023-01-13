import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/tootip.css"

function SidebarList(props) {
  const activeLink = "bg-white/30 text-white p-3 rounded-lg w-10";
  const normalLink = "p-3 w-10";

  return (
    <Fragment>
      <li className="mt-1 flex items-center rounded-xl">
        <NavLink
          to={props.link}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div
            className={`flex justify-center relative group ${({ isActive }) =>
              isActive ? activeLink : normalLink}`}
          >
            {props.icon}
            <div className="inline-block">
              <span className="invisible group-hover:visible absolute tooltip-arrow"></span>
              <span className="invisible group-hover:visible absolute tooltip-sidebar">{props.menu}</span>
            </div>
          </div>
        </NavLink>
      </li>
    </Fragment>
  );
}

export default SidebarList;
