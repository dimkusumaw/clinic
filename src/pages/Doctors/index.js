import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Card from "../../components/UI/Card";
import DeleteModal from "../../components/UI/DeleteModal";
import {
  deleteDoctor,
  getAll,
  getDoctor,
} from "../../features/Doctors/DoctorSlices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function Doctors(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doctors = useSelector((state) => state.doctor.data);
  const isUpdated = useSelector((state) => state.doctor.isUpdated);
  const isDeleted = useSelector((state) => state.doctor.isDeleted);
  const isCreated = useSelector((state) => state.doctor.isCreated);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [uid, setUid] = useState(null);

  const AddDoctor = () => {
    navigate("adddoctor");
  };
  const thead = ["name", "specialist", "gender", "action"];

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
    dispatch(deleteDoctor(id));
    setDeleteOpen(false);
    setUid(null);
  };

  const detailHandle = (id) => {
    dispatch(getDoctor(id));
  };

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
          <div className="m-6 text-gray-700">Doctor List</div>
          <div className="m-6 flex flex-row">
            <button
              type="submit"
              className="p-2 w-36 bg-cyan-500 text-white rounded active:bg-cyan-300 text-sm uppercase"
              onClick={AddDoctor}
            >
              Add Doctor
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
              {doctors &&
                Array.from(doctors).map((data, key) => {
                  return (
                    <tr className="border-b" key={key}>
                      <td className="p-1 capitalize">{data.attributes.name}</td>
                      <td className="p-1 capitalize">
                        {data.attributes.specialist}
                      </td>
                      <td className="p-1 capitalize">
                        {data.attributes.gender}
                      </td>
                      <td className="p-1">
                        <div className="flex flex-row justify-center">
                          <NavLink to={`detaildoctor`}>
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

export default Doctors;
