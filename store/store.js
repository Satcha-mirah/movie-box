import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../store/slice";

export const store = configureStore({
    reducer: {
        app: appReducer,
    },
});

