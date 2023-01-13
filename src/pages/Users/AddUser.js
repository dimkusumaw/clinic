import { Switch } from "@headlessui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/UI/Card";
import ComboField from "../../components/UI/ComboField";
import InputField from "../../components/UI/InputField";
import { createUser } from "../../features/Users/UserSlices";

const roles = [
  { id: 1, name: "Authenticated" },
  { id: 2, name: "Public" },
];

function AddUser(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [blocked, setBlocked] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        username: username,
        password: password,
        email: email,
        role: selectedRole.id,
        confirmed: confirmed,
        blocked: blocked,
      })
    ).then(navigate("/users"));
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/users");
  };
  return (
    <div className="flex flex-row m-6 mt-4">
      <Card className="w-full">
        <div className="text-xl font-bold uppercase border-b border-sky-500 flex justify-between">
          <div className="m-6 text-gray-700">Add User</div>
          <div className="m-6 flex flex-row">
            <button
              type="submit"
              className="p-2 w-36 bg-pink-500 text-white rounded active:bg-pink-300 text-sm uppercase mr-2"
              onClick={handleBack}
            >
              Back
            </button>

            <button
              type="submit"
              className="p-2 w-36 bg-cyan-500 text-white rounded active:bg-cyan-300 text-sm uppercase"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="m-6">
          <form>
            <div className="flex flex-row">
              <InputField
                className="w-1/2 mx-2"
                labelClass="font-semibold text-sm uppercase text-gray-500"
                label="Username"
                type="text"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <InputField
                className="w-1/2 mx-2"
                labelClass="font-semibold text-sm uppercase text-gray-500"
                label="Email"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-row mt-3">
              <InputField
                className="w-1/2 mx-2"
                labelClass="font-semibold text-sm uppercase text-gray-500"
                label="Password"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <ComboField
                field="Role"
                className="w-1/2 mx-2"
                labelClass="font-semibold text-sm uppercase text-gray-500"
                value={selectedRole}
                onChange={setSelectedRole}
                dataList={roles}
              />
            </div>
            <div className="flex flex-row mt-3 mb-3">
              <div className="mx-2 flex flex-col mt-2">
                <label className="font-semibold text-sm uppercase text-gray-500">
                  Confirmed
                </label>
                <Switch
                  checked={confirmed}
                  onChange={setConfirmed}
                  className={`${
                    confirmed ? "bg-sky-500" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Confirmed</span>
                  <span
                    className={`${
                      confirmed ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
              <div className="mx-2 flex flex-col mt-2">
                <label className="font-semibold text-sm uppercase text-gray-500">
                  Blocked
                </label>
                <Switch
                  checked={blocked}
                  onChange={setBlocked}
                  className={`${
                    blocked ? "bg-sky-500" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Blocked</span>
                  <span
                    className={`${
                      blocked ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default AddUser;
