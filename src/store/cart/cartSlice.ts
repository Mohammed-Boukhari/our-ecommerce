import { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";

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
      console.log(action.payload)
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

const getCartTotalQuantity = (state) => {
  console.log("function")
  const totalQuantity = Object.values(state.cart.items).reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );
  return totalQuantity;
};



export { getCartTotalQuantity }
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
