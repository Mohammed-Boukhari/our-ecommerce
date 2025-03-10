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
  reducers: {},
});

export default toastsSlice.reducer;
