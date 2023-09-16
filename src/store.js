import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";
export const store=configureStore({
    reducer:{
        myReducer:customReducer,
    }
})