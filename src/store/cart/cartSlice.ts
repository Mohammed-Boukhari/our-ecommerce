import { createSlice } from "@reduxjs/toolkit";
import { getCartTotalQuantitySelector, itemQuantityAvailabilityCheckingSelector, } from "./selector";
import actGetProductsByItems from "./act/actGetProductsByItems";
import { TProduct } from "@customTypes/product";


interface ICartState {
  items: { [key: string]: number };
  productFullInfo: TProduct[];
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
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
  },
});

export { getCartTotalQuantitySelector, actGetProductsByItems, itemQuantityAvailabilityCheckingSelector, };
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
