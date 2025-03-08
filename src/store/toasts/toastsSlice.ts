import { createSlice } from "@reduxjs/toolkit";

type TToast = {
  id: string;
  type: "primary" | "success" | "warning" | "danger";
  title?: string | null;
  message: string;
};

interface IToastsSlice {
  records: TToast[];
}

const initialState: IToastsSlice = {
  records: [],
};

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {},
});

export default toastsSlice.reducer;
