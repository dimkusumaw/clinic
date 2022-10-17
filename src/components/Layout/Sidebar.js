import React from "react";
import SidebarList from "../UI/SidebarList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyCrack, faHouseMedical } from '@fortawesome/free-solid-svg-icons'


function Sidebar(props) {
  return (
    <div className="flex flex-col justify-between h-screen sticky top-0 bg-gradient-to-t from-cyan-500 to-blue-500 text-white rounded-r-xl shadow-xl">
      <div className="">
        <div className="m-4 flex flex-col justify-center">
          <ul>
            <SidebarList
              menu="Dashboard"
              link="dashboard"
              icon={<FontAwesomeIcon icon={faHouseMedical} />}
            />
            <SidebarList
              menu="LOL"
              link="LOL"
              icon={<FontAwesomeIcon icon={faHouseChimneyCrack}/>}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
