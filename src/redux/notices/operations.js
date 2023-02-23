import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://pets-project-backend.onrender.com/api";

export const addNotice = createAsyncThunk(
    "notices/addNotice",
    async (values, thunkAPI) => {
        try {
            const response = await axios.post("/notices", values);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


