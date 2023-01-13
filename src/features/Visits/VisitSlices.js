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
  query: 0,
};

export const getAll = createAsyncThunk(
  "visit/getAll",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get("/api/visits");
      // console.log("lol");
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const createVisit = createAsyncThunk(
  "visit/create",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/api/visits", payload);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const getVisit = createAsyncThunk(
  "visit/getVisit",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/api/visits/${id}?populate=*`);
      // console.log("lol");
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const deleteVisit = createAsyncThunk(
  "visit/delete",
  async (id, { rejectWithValue }) => {
    try {
      await instance.delete(`/api/visits/${id}`);
      console.log("berhasil");
      return id;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const updateVisit = createAsyncThunk(
  "user/update",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.put(`/api/visits/${payload.id}`, payload);
      // console.log(response);
      return response.data;
    } catch (error) {
      console.log("error coy");
      return rejectWithValue(error);
    }
  }
);

export const visitSlice = createSlice({
  name: "visit",
  initialState: initialState,
  reducer: {
    resetQuery: (state) => {
      state.query = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payloa.data;
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
      .addCase(createVisit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createVisit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.query = state.query + 1;
        state.data = action.payload;
        state.isCreated = true;
      })
      .addCase(createVisit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(updateVisit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateVisit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isUpdated = true;
      })
      .addCase(updateVisit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getVisit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVisit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.show = action.payload.data;
      })
      .addCase(getVisit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(deleteVisit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteVisit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.show = action.payload;
        state.isDeleted = true;
      })
      .addCase(deleteVisit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default visitSlice.reducer;
