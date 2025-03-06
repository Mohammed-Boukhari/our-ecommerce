import { createSlice } from "@reduxjs/toolkit";
import actPlaceOrder from "./act/actPlaceOrder";

import { isString, TLoading, TOrdersItem } from "@types";

interface IOrderSlice {
  orderList: TOrdersItem[];
  loading: TLoading;
  error: null | string;
}

const initialState: IOrderSlice = {
  orderList: [],
  loading: "idle",
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // TODO: Place order
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});
export { actPlaceOrder };
export default ordersSlice.reducer;
