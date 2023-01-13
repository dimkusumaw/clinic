import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Card from "../../components/UI/Card";
import { deleteUser, getAll, getUser } from "../../features/Users/UserSlices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "../../components/UI/DeleteModal";

function Users(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.data);
  const isUpdated = useSelector((state) => state.user.isUpdated)
  const isDeleted = useSelector((state) => state.user.isDeleted)
  const isCreated = useSelector((state) => state.user.isCreated);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [uid, setUid] = useState(null);

  const AddUser = () => {
    navigate("adduser");
  };

  const thead = ["username", "email", "confirmation", "action"];

  const deleteModal = (id) => {
    if (deleteOpen) {
      setDeleteOpen(false);
      setUid(null);
    } else {
      setDeleteOpen(true);
      setUid(id);
    }
  };

  const deleteHandle = (id) => {
    dispatch(deleteUser(id));
    setDeleteOpen(false);
    setUid(null);
  };

  const detailHandle = (id) => {
    dispatch(getUser(id))
  }

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  useEffect(() => {
    if (isDeleted || isUpdated || isCreated) {
      dispatch(getAll());
    }
  }, [dispatch, isDeleted, isUpdated, isCreated]);

  return (
    <div className="flex flex-row m-6 mt-4">
      <DeleteModal
        show={deleteOpen}
        onClose={deleteModal}
        onConfirm={() => deleteHandle(uid)}
      />
      <Card className="w-full">
        <div className="text-xl font-bold uppercase border-b border-sky-500 flex justify-between">
          <div className="m-6 text-gray-700">Users List</div>
          <div className="m-6 flex flex-row">
            <button
              type="submit"
              className="p-2 w-36 bg-cyan-500 text-white rounded active:bg-cyan-300 text-sm uppercase"
              onClick={AddUser}
            >
              Add User
            </button>
          </div>
        </div>
        <div className="m-6 overflow-x-auto rounded">
          <table className="w-full text-sm text-left text-gray-500 table-auto">
            <thead className="text-gray-700 uppercase border-b font-bold text-md">
              <tr>
                {thead.map((th, index) => {
                  const className = `px-1 py-3 ${
                    th === "action" ? "text-center" : "text-left"
                  }`;
                  return (
                    <th className={className} key={index}>
                      {th}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {users &&
                Array.from(users).map((data, key) => {
                  return (
                    <tr className="border-b" key={key}>
                      <td className="p-1 capitalize">{data.username}</td>
                      <td className="p-1">{data.email}</td>
                      <td className="p-1">
                        {data.confirmed ? (
                          <span className="bg-cyan-500 text-white p-1 rounded font-bold uppercase text-xs">
                            Confirmed
                          </span>
                        ) : (
                          <span className="bg-pink-500 text-white p-1 rounded font-bold uppercase text-xs">
                            Unconfirmed
                          </span>
                        )}
                      </td>
                      <td className="p-1">
                        <div className="flex flex-row justify-center">
                          <NavLink to={`detailuser`}>
                            <button
                              type="button"
                              className="p-2 text-yellow-500 hover:bg-yellow-500/20 rounded text-sm uppercase"
                              onClick={() => detailHandle(data.id)}
                            >
                              <FontAwesomeIcon icon={faPen} size="lg" />
                            </button>
                          </NavLink>

                          <button
                            type="button"
                            className="p-2 text-pink-500 hover:bg-pink-500/20 rounded text-sm uppercase"
                            onClick={() => deleteModal(data.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} size="lg" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export default Users;
