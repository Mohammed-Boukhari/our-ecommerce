import { createSlice } from "@reduxjs/toolkit";
import {
  getCartTotalQuantitySelector,
  itemQuantityAvailabilityCheckingSelector,
} from "./selector";
import actGetProductsByItems from "./act/actGetProductsByItems";
import { TProduct } from "@customTypes/product";
import { TLoading } from "@customTypes/shared";

interface ICartState {
  items: { [key: string]: number };
  productFullInfo: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      console.log(action.payload);
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    cartItemChangeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;

    }
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productFullInfo = action.payload;
    });
    builder.addCase(actGetProductsByItems.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export {
  getCartTotalQuantitySelector,
  actGetProductsByItems,
  itemQuantityAvailabilityCheckingSelector,
};
export const { addToCart, cartItemChangeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
