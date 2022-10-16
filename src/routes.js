import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Clients from "./pages/Clients";
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Message from './pages/Message'
import Setting from './pages/Setting'


function Router(props) {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Navigate to="dashboard" replace/>}/>
        <Route exact path="dashboard" element={<Dashboard />}/>
        <Route exact path="client" element={<Clients />}/>
        <Route exact path="products" element={<Products />}/>
        <Route exact path="message" element={<Message/>}/>
        <Route exact path="setting" element={<Setting/>}/>
      </Routes>
    </Fragment>
  );
}

export default Router;
