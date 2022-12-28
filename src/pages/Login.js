import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginField from "../components/UI/LoginField";
import { login } from "../features/Auth/AuthSlices";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = () => {
    dispatch(login({ email: email, password: password }));
    navigate('/dashboard')
  };

  return (
    <div className="flex bg-gray-100 items-center justify-center align-middle h-screen">
      <div className="bg-white rounded-xl shadow-xl p-6 w-1/4">
        <h1 className="text-2xl text-center">LOGIN</h1>
        <form className="mt-2">
          <LoginField
            className="m-5 mx-10"
            label="Email"
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginField
            className="m-5 mx-10"
            label="Password"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
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
