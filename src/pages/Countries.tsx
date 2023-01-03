import React from "react";
import CountriesList from "../components/CountriesList";
import SearchForm from "../components/SearchForm";


export default function Countries(){
    return(
        <div>
            <SearchForm />
            <CountriesList/>
        </div>
    )
}