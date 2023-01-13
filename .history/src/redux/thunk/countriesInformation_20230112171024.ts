import { AppDispatch } from "../strore";
import { countriesActions } from "../slice/countries"; 

// fetch country detail data from url by fetch
export default function fetchCountryDetailData(name: string | undefined) {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(countriesActions.getCountryData(data));
  };
}