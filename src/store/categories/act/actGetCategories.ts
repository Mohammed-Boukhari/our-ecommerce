import { TCategory } from "@customTypes/category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
    "categories/actGetCategories",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get<TResponse>("/categories");
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message);
            } else {
                return rejectWithValue("An error occurred while fetching categories.");
            }
        }
    }
);

export default actGetCategories;
