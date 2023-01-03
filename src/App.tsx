import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import FavCountries from "./pages/FavCountries";
import Footer from "./pages/Footer";


function App() {
  return(
    <div className="App">
    <NavBar/>
      <Routes>
        <Route path="" element ={<Home />}></Route>
        <Route path="/countries" element ={<Countries />}></Route>
        <Route path="/favCountries" element ={<FavCountries />}></Route>
      </Routes>
    <Footer/>
  </div>
  ) 
}

export default App;
