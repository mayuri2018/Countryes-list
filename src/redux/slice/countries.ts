import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../../types/type";

type InitialType = {
  countries: Country[];
  favorite: Country[];
};

const initialState: InitialType = {
  countries: [],
  favorite: [],
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    getCountryData: (state, acion) => {
      state.countries = acion.payload;
    },
    addToFav: (state, action: PayloadAction<Country>) => {
      const favIndex = state.favorite.findIndex(
        (item) => item.name.common === action.payload.name.common
      );
      if (favIndex === -1) {
        state.favorite.push(action.payload);
      } else {
        countriesActions.removeFromFav(action.payload.name.common);
      }
    },
    removeFromFav: (state, action) => {
      const updatedFav = state.favorite.filter(
        (item) => item.name.common !== action.payload
      );
      state.favorite = updatedFav;
    },
    
  },
});

export const countriesActions = countrySlice.actions;
export default countrySlice.reducer;




/*import {Country} from "../../types/type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    countries : Country[];
    favorite: Country[];
};

const initialState : InitialState ={
    countries : [],
    favorite: [],

}

const countriesSlice = createSlice({
    name:"countri",
    initialState,
    reducers:{
        //get data
        getCountriesData : (state, action)=>{
           state.countries = action.payload;
       }, 
           
        getCountryData : (state, action)=>{
         state.countries = action.payload; 
        },

        addToFav: (state, action: PayloadAction<Country>) => {
          const favIndex = state.favorite.findIndex(
            (item) => item.name.common === action.payload.name.common
          );
          if (favIndex === -1) {
            state.favorite.push(action.payload);
          } else {
            countriesActions.removeFromFav(action.payload.name.common);
          }
        },
        removeFromFav: (state, action) => {
          const updatedFav = state.favorite.filter(
            (item) => item.name.common !== action.payload
          );
          state.favorite = updatedFav;
        },
    },
});

export const countriesReducer = countriesSlice.reducer;
const countriesActions = countriesSlice.actions;
export default countriesActions;*/