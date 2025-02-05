import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@types";

interface IAuthenticationSlice {
  loading: TLoading;
  error: string | null;
}

const initialState: IAuthenticationSlice = {
  loading: "idle",
  error: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default authenticationSlice.reducer;
