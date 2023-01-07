import { useSelector } from "react-redux";
import { RootState } from "../redux/strore";

import FavCountriesItem from "./FavCountriesItem";

const FavoriteList = () => {
  const favList = useSelector((state: RootState) => state.countries.favorite);

  return (
    <div className="favorite-list">
      {favList.length === 0 ? (
        <p>There is no country in your favorite list.</p>
      ) : (
        favList.map((favCountry) => {
          return (
            <FavCountriesItem key={crypto.randomUUID()} favCountry={favCountry} />
          );
        })
      )}
    </div>
  );
};

export default FavoriteList;