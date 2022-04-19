import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";

export const store = configureStore({
    reducer: {
        searchQuery: searchSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
