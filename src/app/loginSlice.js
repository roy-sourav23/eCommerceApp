import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SIGNIN_URL } from "../api/api";

export const userLoggedIn = createAsyncThunk(
  "auth/userLoggedIn",
  async (data, thunkAPi) => {
    try {
      const response = await axios.post(SIGNIN_URL, data);
      console.log("response", response);
      if (response?.data.status == 200) {
        return response.data.data;
      }
      return thunkAPi.rejectWithValue(response?.data.message);

      // if(response?.data)
    } catch (error) {
      return thunkAPi.rejectWithValue(response?.data?.message);
    }
  }
);

const initialState = {
  isLoading: true,
  isError: false,
  error: null,
  user: null,
};

const LoginSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLoggedIn.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userLoggedIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.user = action.payload;
    });
    builder.addCase(userLoggedIn.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.user = null;
    });
  },
});

export default LoginSlice.reducer;
