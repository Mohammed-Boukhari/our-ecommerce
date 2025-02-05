import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import { isString, TLoading } from "@types";

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
  extraReducers: (builder) => {
    //register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // login
    // builder.addCase(actAuthLogin.pending, (state) => {
    //   state.loading = "pending";
    //   state.error = null;
    // });
    // builder.addCase(actAuthLogin.fulfilled, (state, action) => {
    //   state.loading = "succeeded";
    //   state.accessToken = action.payload.accessToken;
    //   state.user = action.payload.user;
    // });
    // builder.addCase(actAuthLogin.rejected, (state, action) => {
    //   state.loading = "failed";
    //   if (isString(action.payload)) {
    //     state.error = action.payload;
    //   }
    // });
  },
});
export { actAuthRegister };
export default authenticationSlice.reducer;
