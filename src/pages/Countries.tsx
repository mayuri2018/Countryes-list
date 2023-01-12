import { useState } from "react";

import SearchForm from "../components/search/SearchForm";
import CountriesList from "../components/countries/CountriesList";

const Countries = () => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <div className="countries-page">
      <SearchForm userInput={userInput} setUserInput={setUserInput} />
      <CountriesList userInput={userInput} />
    </div>
  );
};

export default Countries;