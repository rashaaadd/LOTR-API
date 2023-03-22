import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { characterSlice } from "./characterSlice";
import { alertSlice } from "./alertSlice";


const rootReducer = combineReducers({
    alerts: alertSlice.reducer,
    characters: characterSlice.reducer
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;