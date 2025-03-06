import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";

/* type */ import { RootState } from "@store/index";
/* type */ import { TOrdersItem } from "@types";

type TResponse = TOrdersItem[];

const actGetOrders = createAsyncThunk(
  "orders/actGetOrders",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, signal } = thunkAPI;
    const { auth } = getState() as RootState;

    try {
      const res = await axios.get<TResponse>(
        `/orders?userId=${auth.user?.id}`,
        { signal }
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetOrders;
