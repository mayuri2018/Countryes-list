import { useState } from "react";

import SearchForm from "../components/SearchForm";
import CountriesList from "../components/CountriesList";

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