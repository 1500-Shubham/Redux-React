import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Reducer2";
import rootReducer from "./Reducer2";
import { createStore } from 'redux';

export const store2=createStore(rootReducer);