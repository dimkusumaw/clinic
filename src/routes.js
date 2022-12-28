import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function Router() {
  const Auth = localStorage.getItem("isLogin");

  return (
    <Fragment>
      <Routes>
        {!Auth && <Route exact path="login" element={<Login />} />}
        {Auth && (
          <Route exact path="/" element={<Navigate to="dashboard" replace />} />
        )}
        {Auth && <Route exact path="dashboard" element={<Dashboard />} />}
      </Routes>
    </Fragment>
  );
}

export default Router;
