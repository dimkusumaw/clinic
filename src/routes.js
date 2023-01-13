import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/Users";
import AddUser from "./pages/Users/AddUser";
import DetailUser from "./pages/Users/DetailUser";
import Doctors from "./pages/Doctors";
import AddDoctor from "./pages/Doctors/AddDoctor";
import DetailDoctor from "./pages/Doctors/DetailDoctor";
import Patients from "./pages/Patients";
import AddPatient from "./pages/Patients/AddPatient";
import DetailPatient from "./pages/Patients/DetailPatient";
import Visits from "./pages/Visits";
import AddVisit from "./pages/Visits/AddVisit";
import DetailVisit from "./pages/Visits/DetailVisit";
function Router() {
  const Auth = useSelector((state) => state.auth.isLogin);

  return (
    <Fragment>
      <Routes>
        {!Auth && <Route exact path="login" element={<Login />} />}
        {Auth && (
          <Route exact path="/" element={<Navigate to="dashboard" replace />} />
        )}
        {Auth && <Route exact path="dashboard" element={<Dashboard />} />}
        {Auth && <Route exact path="users" element={<Users />} />}
        {Auth && <Route exact path="users/adduser" element={<AddUser />} />}
        {Auth && (
          <Route exact path="users/detailuser" element={<DetailUser />} />
        )}
        {Auth && <Route exact path="doctors" element={<Doctors />} />}
        {Auth && (
          <Route exact path="doctors/adddoctor" element={<AddDoctor />} />
        )}
        {Auth && (
          <Route exact path="doctors/detaildoctor" element={<DetailDoctor />} />
        )}
        {Auth && <Route exact path="patients" element={<Patients />} />}
        {Auth && (
          <Route exact path="patients/addpatient" element={<AddPatient />} />
        )}
        {Auth && (
          <Route
            exact
            path="patients/detailpatient"
            element={<DetailPatient />}
          />
        )}
        {Auth && <Route exact path="visits" element={<Visits />} />}
        {Auth && <Route exact path="visits/addvisit" element={<AddVisit />} />}
        {Auth && (
          <Route exact path="visits/detailvisit" element={<DetailVisit />} />
        )}
      </Routes>
    </Fragment>
  );
}

export default Router;
