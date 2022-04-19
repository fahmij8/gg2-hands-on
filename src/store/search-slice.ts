import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "searchQuery",
    initialState: {
        value: "",
    },
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
