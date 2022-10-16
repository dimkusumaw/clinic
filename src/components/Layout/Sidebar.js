import React from "react";
import logo from "../../assets/images/logo.png";
import HomeIcon from "../Icons/HomeIcon";
import ClientIcon from "../Icons/ClientIcon";
import MessageIcon from "../Icons/MessageIcon";
import ProductIcon from "../Icons/ProductIcon";
import SettingIcon from "../Icons/SettingIcon";
import SidebarList from "../UI/SidebarList";
import LogoutIcon from "../Icons/LogoutIcon";

function Sidebar(props) {
  return (
    <div className="basis-1/6 flex flex-col justify-between text-gray-500 h-screen sticky top-0">
      <div className="w-full">
        <div className="m-4">
          <img src={logo} alt="Logo" />
        </div>
        <div className="m-4 mt-20">
          <ul>
            <SidebarList
              menu="Dashboard"
              link="dashboard"
              icon={<HomeIcon width="15" height="15" />}
            />
            <SidebarList
              menu="Clients"
              link="client"
              icon={<ClientIcon width="15" height="15"/>}
            />
            <SidebarList
              menu="Products"
              link="products"
              icon={<ProductIcon width="15" height="15" />}
            />
            <SidebarList
              menu="Message"
              link="message"
              icon={<MessageIcon width="15" height="15" />}
            />
            <SidebarList
              menu="Settings"
              link="setting"
              icon={<SettingIcon width="15" height="15" />}
            />
          </ul>
        </div>
      </div>
      <div className="w-full m-4 p-2">
        <div className="flex items-center p-2">
          <LogoutIcon width="30" height="30"/>
          <h1 className="ml-5 text-2xl">Logout</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
