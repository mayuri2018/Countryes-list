import { AppDispatch } from "../strore";
import {countriesActions} from "../slice/countries";


const url = "https://restcountries.com/v3.1/all";
export function fetchCountriesData(){
    return async(dispatch:AppDispatch)=>{
    const response = await fetch(url)
    const countriesData = await response.json();
    dispatch(countriesActions.getCountryData(countriesData));
    };
}