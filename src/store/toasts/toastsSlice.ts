import { createSlice } from "@reduxjs/toolkit";
import { TToast } from "@types";

interface IToastsSlice {
  records: TToast[];
}

const initialState: IToastsSlice = {
  records: [
    {
      id: "1",
      type: "success",
      message: "item added to your cart",
      title: "add to cart",
    },
    {
      id: "2",
      type: "danger",
      message: "Error From The Server!",
    },
    {
      id: "3",
      type: "warning",
      message: "your session will expiry soon",
    },
    {
      id: "4",
      type: "info",
      message: "lorem ipsum dollar",
    },
  ],
};

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    removeToast: (state, action) => {
      console.log("id " + action.payload);
      state.records = state.records.filter(
        (record) => record.id !== action.payload
      );
    },
  },
});

export const { removeToast } = toastsSlice.actions;
export default toastsSlice.reducer;
