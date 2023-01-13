import React from "react";
import SidebarList from "../UI/SidebarList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagnoses,
  faHouseMedical,
  faPeopleGroup,
  faPowerOff,
  faUserInjured,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/Auth/AuthSlices";

function Sidebar(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('login')
  }

  return (
    <div className="flex flex-col justify-between h-screen sticky top-0 bg-gradient-to-t from-cyan-500 to-blue-500 text-white rounded--r shadow-xl">
      <div className="m-4 mt-2 flex flex-col justify-center">
        <ul>
          <SidebarList
            menu="Dashboard"
            link="dashboard"
            icon={<FontAwesomeIcon icon={faHouseMedical} />}
          />
          <SidebarList
            menu="User Management"
            link="users"
            icon={<FontAwesomeIcon icon={faPeopleGroup} />}
          />
          <SidebarList
            menu="Doctors"
            link="doctors"
            icon={<FontAwesomeIcon icon={faUserMd} />}
          />
          <SidebarList
            menu="Patients"
            link="patients"
            icon={<FontAwesomeIcon icon={faUserInjured} />}
          />
          <SidebarList
            menu="Visits"
            link="visits"
            icon={<FontAwesomeIcon icon={faDiagnoses} />}
          />
        </ul>
      </div>
      <div className="m-4 flex flex-col justify-center">
        <button
          type="button"
          className="hover:bg-white/30 text-white p-2 rounded-lg"
          onClick={handleLogout}
        >
          <FontAwesomeIcon icon={faPowerOff} />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
