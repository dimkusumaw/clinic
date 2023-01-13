import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/UI/Card";
import ComboField from "../../components/UI/ComboField";
import InputField from "../../components/UI/InputField";
import TextArea from "../../components/UI/TextArea";
import { updatePatient } from "../../features/Patients/PatientSlices";

const genders = [{ name: "Male" }, { name: "Female" }];

function DetailPatient(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState(genders[0].name);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const patient = useSelector((state) => state.patient.show);

  useEffect(() => {
    if (patient) {
      setUid(patient.id);
      setName(patient.attributes.name);
      setGender({ name: patient.attributes.gender });
      setAddress(patient.attributes.address);
      setPhone(patient.attributes.phone);
      setAge(patient.attributes.age);
    }
  }, [patient]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updatePatient({
        id: uid,
        data: {
          name: name,
          gender: gender.name,
          address: address,
          phone: phone,
          age: age,
        },
      })
    ).then(navigate("/patients"));
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/patients");
  };

  return (
    <div className="flex flex-row m-6 mt-4">
      <Card className="w-full">
        <div className="text-xl font-bold uppercase border-b border-sky-500 flex justify-between">
          <div className="m-6 text-gray-700">Add Patient</div>
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
              onClick={handleUpdate}
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
                label="Name"
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                value={name || ""}
              />
              <ComboField
                field="Gender"
                className="w-1/2 mx-2"
                labelClass="font-semibold text-sm uppercase text-gray-500"
                value={gender || ""}
                onChange={setGender}
                dataList={genders}
              />
            </div>
            <div className="flex flex-row mt-3">
              <InputField
                className="w-1/2 mx-2"
                labelClass="font-semibold text-sm uppercase text-gray-500"
                label="Age"
                type="number"
                placeholder="Enter Age"
                onChange={(e) => setAge(e.target.value)}
                value={age || ""}
              />
              <InputField
                className="w-1/2 mx-2"
                labelClass="font-semibold text-sm uppercase text-gray-500"
                label="Phone"
                type="tel"
                placeholder="Enter Phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone || ""}
              />
            </div>
            <div className="flex flex-row mt-3">
              <TextArea
                className="w-full mx-2"
                labelClass="font-semibold text-sm uppercase text-gray-500"
                label="Address"
                type="text"
                placeholder="Enter Specialist"
                onChange={(e) => setAddress(e.target.value)}
                value={address || ""}
              />
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default DetailPatient;
