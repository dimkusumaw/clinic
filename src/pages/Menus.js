import React from 'react';
import SideBar from '../components/Layout/Sidebar'
// import Header from "../components/Layout/Header";
import Router from "../routes";


function Menus() {
  return (
    <div className="w-full flex flex-row">
      <SideBar />
      <div className="w-full flex flex-col bg-gray-100">
        {/* <Header /> */}
        <Router />
      </div>
    </div>
  );
}

export default Menus;