import { createSlice } from "@reduxjs/toolkit";

export type TToast = {
  id?: string;
  type: "primary" | "success" | "warning" | "danger";
  title?: string | null;
  message: string;
};

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
      message: "item added to your cart",
    },
    {
      id: "3",
      type: "warning",
      message: "your session will expiry soon",
    },
    {
      id: "4",
      type: "primary",
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
