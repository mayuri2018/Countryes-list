import {Country} from "../../types/type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    countries : Country[]
};

const initialState : InitialState ={
    countries : [],
}

const countriesSlice = createSlice({
    name:"countri",
    initialState,
    reducers:{
        //get data
        getCountriesData : (state, action)=>{
            console.log(action.payload, "actions");
           state.countries = action.payload; 
           
        },
    },
});

export const countriesReducer = countriesSlice.reducer;
const countriesActions = countriesSlice.actions;
export default countriesActions;