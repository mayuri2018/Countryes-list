import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import FavCountries from "./pages/FavCountries";
import CountriesInformation from "./pages/ContriesInformation";


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
