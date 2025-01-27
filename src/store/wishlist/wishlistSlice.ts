import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";

interface IWishlist {
    itemsId: number[];
}

const initialState: IWishlist = {
    itemsId: [],
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {

    }
})
export { actLikeToggle }
export default wishlistSlice.reducer;