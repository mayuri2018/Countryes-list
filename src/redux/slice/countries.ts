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
