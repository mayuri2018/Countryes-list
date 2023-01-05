import { useSelector } from "react-redux";
import { RootState } from "../redux/strore";
import FavCountriesItem from "./FavCountriesItem";

const FavoriteList = () => {
  const favList = useSelector((state: RootState) => state.countries.favorite);
  console.log(favList, "fav");

  return (
    <div style={{ textAlign: "center", margin:"50px auto"}}>
      <h2>Favorite List</h2>
      {favList.map((favCountry) => {
        return (
          <FavCountriesItem key={crypto.randomUUID()} favCountry={favCountry} />
        );
      })}
    </div>
  );
};

export default FavoriteList;

