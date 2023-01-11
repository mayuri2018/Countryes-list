import { useSelector } from "react-redux";
import { RootState } from "../redux/strore";

import FavCountriesItem from "./FavCountriesItem";

export default function FavCountriesList (){
  const FavCountriesList = useSelector((state: RootState) => state.countries.favorite);

  return (
    <div className="favorite-list">
      {FavCountriesList.length === 0 ? (
        <p>There is no country in your favorite list.</p>
      ) : (
        FavCountriesList.map((favCountry) => {
          return (
            <FavCountriesItem key={crypto.randomUUID()} favCountry={favCountry} />
          );
        })
      )}
    </div>
  );
};