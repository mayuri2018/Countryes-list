import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Countries from "./pages/countries/Countries";
import FavCountries from "./pages/favorites/FavCountries";
import CountriesInformation from "./pages/countriesInfo/ContriesInformation";


function App() {
  return(
    <div>
    <NavBar/>
    <div className="App">
      <Routes>
        <Route path="" element ={<Home />}></Route>
        <Route path="/countries" element ={<Countries/>}></Route>
        <Route path="/countries/:name" element={<CountriesInformation />}> </Route>
        <Route path="/favCountries" element ={<FavCountries />}></Route>
      </Routes>
    </div>
    <Footer/>
  </div>
  ) 
}

export default App;
