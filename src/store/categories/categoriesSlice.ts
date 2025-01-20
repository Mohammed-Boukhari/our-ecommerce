import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    records: [],
    loading: "idle",
    error: null,
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
});

export default categoriesSlice.reducer;
