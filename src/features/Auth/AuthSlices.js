import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  data: null,
  isLoading: false,
  message: "",
  isLogin: false,
  isError: false,
  isReload: false,
};

const loginURL = `${process.env.REACT_APP_BACKEND_URL}api/auth/local`;
export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(loginURL, payload);
      localStorage.setItem("token", response.data.jwt);
      // console.log(response.data);
      return response.data;
    } catch (err) {
      // console.log("error by")
      return rejectWithValue(err.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.isLogin = false;
      state.data = null;
      state.isLoading = false;
      localStorage.clear();
    },
    reloaded: (state) => {
      state.isReload = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogin = true;
        state.data = action.payload;
        state.isReload = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "error";
      });
  },
});

export const { logout, reloaded } = authSlice.actions;
export default authSlice.reducer;
