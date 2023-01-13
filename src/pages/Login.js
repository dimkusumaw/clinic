import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginField from "../components/UI/LoginField";
import { login } from "../features/Auth/AuthSlices";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = () => {
    dispatch(login({ identifier: identifier, password: password }));
    navigate('dashboard')
  };

  return (
    <div className="flex bg-gray-100 items-center justify-center align-middle h-screen">
      <div className="bg-white rounded-xl shadow-xl md:p-6 p-2 md:w-1/3 w-3/4">
        <h1 className="text-2xl text-center">LOGIN</h1>
        <form className="mt-2">
          <LoginField
            className="md:m-5 md:mx-10 m-2"
            label="Username"
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setIdentifier(e.target.value)}
            value={identifier}
          />
          <LoginField
            className="md:m-5 md:mx-10 m-2"
            label="Password"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </form>
        <div className="flex justify-center mx-10 my-5">
          <button
            type="submit"
            className="p-2 bg-cyan-500 text-white rounded w-full active:bg-cyan-300"
            onClick={handleSubmit}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
