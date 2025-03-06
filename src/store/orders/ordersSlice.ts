import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TOrdersItem } from "@types";

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
});

export default ordersSlice.reducer;
