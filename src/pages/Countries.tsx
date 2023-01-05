import React from "react";
import CountriesList from "../components/CountriesList";
import SearchForm from "../components/SearchForm";


export default function Countries(){
    return(
        <div className="Countries">
            <SearchForm />
            <CountriesList />
        </div>
    )
}