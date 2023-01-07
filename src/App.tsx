import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import FavCountries from "./pages/FavCountries";

import { Country } from "./types/type";

export type PropType = {
    country: Country;
  };
function App() {
  return(
    <div>
    <NavBar/>
    <div className="App">
    
      <Routes>
        <Route path="" element ={<Home />}></Route>
        <Route path="/countries" element ={<Countries/>}></Route>
        <Route path="/favCountries" element ={<FavCountries />}></Route>
      </Routes>
   
  </div>
  </div>
  ) 
}

export default App;
