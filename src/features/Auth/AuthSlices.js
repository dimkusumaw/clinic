import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  data: null,
  isSuccess: false,
  isLoading: false,
  message: "",
  isLogin: false,
  isError: false,
};

const loginURL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIgb1svPl8tgHq0kqnwqWsW9Mp_a57iTI";

export const login = createAsyncThunk("user/login", async (payload) => {
  try {
    const response = await axios.post(loginURL, payload);
    localStorage.setItem("token", response.data.idToken);
    localStorage.setItem("user", response.data);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLogin = true;
        state.data = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "error";
      });
  },
});

export default authSlice.reducer;
