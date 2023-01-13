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
  "doctor/getAll",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get("/api/doctors");
      // console.log("lol");
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const createDoctor = createAsyncThunk(
  "doctor/create",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/api/doctors", payload);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const getDoctor = createAsyncThunk(
  "doctor/getDoctor",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/api/doctors/${id}?populate=*`);
      // console.log("lol");
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const deleteDoctor = createAsyncThunk(
  "doctor/delete",
  async (id, { rejectWithValue }) => {
    try {
      await instance.delete(`/api/doctors/${id}`);
      console.log("berhasil");
      return id;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const updateDoctor = createAsyncThunk(
  "doctor/update",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `/api/doctors/${payload.id}`,
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

export const doctorSlice = createSlice({
  name: "doctor",
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
        state.show = null;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(createDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(createDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isCreated = true;
        state.message = action.error;
      })
      .addCase(updateDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isUpdated = true;
      })
      .addCase(updateDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.show = action.payload.data;
      })
      .addCase(getDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(deleteDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.show = action.payload;
        state.isDeleted = true;
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default doctorSlice.reducer;
