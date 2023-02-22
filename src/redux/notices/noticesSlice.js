import { createSlice } from "@reduxjs/toolkit";
import { addNotice } from "./operations";

const noticesInitialState = {
    items: [],
    isLoading: false,
    error: null,
}

const noticesSlice = createSlice({
    name: "notices",
    initialState: noticesInitialState,
    extraReducers: {
        [addNotice.pending](state) {
            state.isLoading = true;
        },
        [addNotice.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addNotice.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const noticesReducer = noticesSlice.reducer;