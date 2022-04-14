import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "searchQuery",
    initialState: {
        value: "",
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
