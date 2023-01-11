import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import { Country } from "../types/type";
import CountriesDetails from "../components/CountriesDetails";

const ContriesInformation = () => {
  const [countryDetail, setCountryDetail] = useState<Country>({
    name: {
      common: "",
    },
    region: "",
    subregion : "",
    population: 0,
    languages: {},
    flags: {
      svg: "",
    },
    capital: [],
    timezones: [],
    capitalInfo:{
      latlng:[]
    },
    maps: {
      googleMaps: "",
    },
    favorite: false,
  });
  const { name } = useParams();
  const url = `https://restcountries.com/v3.1/name/${name}`
  const getCountryData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountryDetail(data[0]));
  };
  const cachedFetch = useCallback(getCountryData, [url]);
  useEffect(() => {
    cachedFetch();
  }, [cachedFetch]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CountriesDetails countryDetail={countryDetail} />
    </div>
  );
};

export default ContriesInformation;