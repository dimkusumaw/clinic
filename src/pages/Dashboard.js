import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reloaded } from "../features/Auth/AuthSlices";

function Dashboard(props) {
  const navigate = useNavigate()
  const reload = useSelector((state) => state.auth.isReload)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(reload) {
      navigate(0)
      dispatch(reloaded())
    }
  }, [dispatch, reload, navigate])

  return (
    <div className="flex flex-row m-6 mt-4">
      Dashboard
    </div>
  );
}

export default Dashboard;
