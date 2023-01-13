import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Visits(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const visits = useSelector((state) => state.visit.data);
  const isUpdated = useSelector((state) => state.visit.isUpdated);
  const isDeleted = useSelector((state) => state.visit.isDeleted);

  return (
    <div className="flex flex-row m-6 mt-4">
      Visit
    </div>
  );
}

export default Visits;