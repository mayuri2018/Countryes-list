import { useParams } from "react-router-dom";
import CountriInfo from "../components/CountriInfo";
import { useCallback, useEffect, useState } from "react";
import { Country } from "../types/type";

const CountryDetail = () => {
  const [countryDetail, setCountryDetail] = useState<Country>({
    name: {
        common: "",
        official: "",
    },
    region: "",
    subregion: "",
    
    area: 0,
    
    maps: {
        googleMaps: "",
        openStreetMaps: "",
    },
    population: 0,
    languages: {},
    flags: {
        png: "",
        svg: "",
        
    },
    flag: "",
    borders: "",
  capital: "",
  currencies: {},
    
})

  const { name } = useParams();

  console.log(name, "use param");
  const url = `https://restcountries.com/v3.1/name/${name}`.replace(
    / /g,
    "%20"
  );
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
    <div style={{display:"flex",justifyContent:"center"}}>
      <CountriInfo countryDetail={countryDetail} />
    </div>
  );
};

export default CountryDetail;