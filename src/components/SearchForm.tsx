import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/strore";
import { useState } from "react";
import countriesActions from "../redux/slice/countries";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const countriesList = useSelector(
    (state: RootState) => state.countries.countries
  );

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    searchHandler();
  };

  const searchHandler = () => {
    const result = countriesList.filter((country) =>
      country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(result, "result");
    dispatch(countriesActions.getCountriesData(result));
  };
  console.log(searchInput);
  return (
    <div className="form">
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={inputHandler}
      />
    </div>
  );
};

export default Search;