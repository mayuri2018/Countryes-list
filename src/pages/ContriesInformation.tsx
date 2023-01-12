import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/strore";
import { useDispatch, useSelector } from "react-redux";
import fetchCountryDetailData from "../redux/thunk/countriesInformation";
import CountriesDetails from "../components/countriesDetails/CountriesDetails";

export default function ContriesInformation () {
  const { name } = useParams();
  const countryDetail = useSelector(
    (state: RootState) => state.countries.countries
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCountryDetailData(name));
  }, [dispatch, name]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CountriesDetails countryDetail={countryDetail[0]} />
    </div>
  );
};