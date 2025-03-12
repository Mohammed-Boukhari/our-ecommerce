import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TToast } from "@types";

interface IToastsSlice {
  records: TToast[];
}

const initialState: IToastsSlice = {
  records: [],
};

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<TToast>) => {
      state.records.push({
        id: nanoid(),
        title: action.payload.title || action.payload.type,
        type: action.payload.type,
        message: action.payload.message,
        delayAppearance: action.payload.delayAppearance || false,
        onCloseToast: action.payload.onCloseToast,
      });
    },
    removeToast: (state, action) => {
      state.records = state.records.filter(
        (record) => record.id !== action.payload
      );
    },
    stopDelayAppearance: (state, action) => {
      state.records.map((el) => {
        if (el.id === action.payload) {
          return (el.delayAppearance = false);
        }
        return el;
      });
    },
  },
});

export const { removeToast, addToast, stopDelayAppearance } =
  toastsSlice.actions;
export default toastsSlice.reducer;
