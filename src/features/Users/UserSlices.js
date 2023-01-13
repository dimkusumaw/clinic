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
  "user/getAll",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get("/api/users");
      // console.log("lol");
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const createUser = createAsyncThunk(
  "user/create",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/api/users", payload);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/api/users/${id}?populate=*`);
      // console.log("lol");
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/delete",
  async (id, { rejectWithValue }) => {
    try {
      await instance.delete(`/api/users/${id}`);
      console.log("berhsil");
      return id;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.put(`/api/users/${payload.id}`, payload);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
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
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isUpdated = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.show = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.show = action.payload;
        state.isDeleted = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default userSlice.reducer;
