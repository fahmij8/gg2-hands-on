import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search-slice";

export default configureStore({
    reducer: {
        searchQuery: searchSlice,
    },
});
