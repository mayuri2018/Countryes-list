import { configureStore } from "@reduxjs/toolkit";
import {countriesReducer} from "./slice/countries"


const store = configureStore({
    reducer: {
        countries: countriesReducer,
    },
    middleware : (getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;