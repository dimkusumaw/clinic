import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard'


function Router(props) {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Navigate to="dashboard" replace/>}/>
        <Route exact path="dashboard" element={<Dashboard />}/>
      </Routes>
    </Fragment>
  );
}

export default Router;
