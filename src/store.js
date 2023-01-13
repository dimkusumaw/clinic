import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/Auth/AuthSlices";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "./features/Users/UserSlices";
import doctorReducer from "./features/Doctors/DoctorSlices";
import patientReducer from "./features/Patients/PatientSlices";
import visitReducer from "./features/Visits/VisitSlices";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    user: userReducer,
    doctor: doctorReducer,
    patient: patientReducer,
    visit: visitReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
