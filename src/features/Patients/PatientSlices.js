import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/AxiosInstance";

const initialState = {
  data: [],
  isLoading: false,
  message: "",
  isError: false,
  isUpdated: false,
  isDeleted: false,
  isCreated: false,
  show: null,
};

export const getAll = createAsyncThunk(
  "patient/getAll",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get("/api/patients");
      // console.log("lol");
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const createPatient = createAsyncThunk(
  "patient/create",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/api/patients", payload);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const getPatient = createAsyncThunk(
  "patient/getPatient",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/api/patients/${id}?populate=*`);
      // console.log("lol");
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const deletePatient = createAsyncThunk(
  "patient/delete",
  async (id, { rejectWithValue }) => {
    try {
      await instance.delete(`/api/patients/${id}`);
      console.log("berhasil");
      return id;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const updatePatient = createAsyncThunk(
  "patient/update",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `/api/patients/${payload.id}`,
        payload
      );
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const patientSlice = createSlice({
  name: "patient",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.isUpdated = false;
        state.isDeleted = false;
        state.isCreated = false;
        state.show = null
      })
      .addCase(getAll.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(createPatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isCreated = true;
      })
      .addCase(createPatient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(updatePatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isUpdated = true;
      })
      .addCase(updatePatient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getPatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.show = action.payload.data;
      })
      .addCase(getPatient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(deletePatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.show = action.payload;
        state.isDeleted = true;
      })
      .addCase(deletePatient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default patientSlice.reducer;
