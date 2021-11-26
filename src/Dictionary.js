import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  const [query, setQuery] = useState("weather");
  const [results, setResults]=useState("");
  const [loaded, setLoaded]=useState(false);

  function handleResponse(response){
    console.log(response.data[0]);
    setResults(response.data[0]);

  }

  function search (){
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
axios.get(apiUrl).then(handleResponse);
  }
  function handleSearch(event) {
    event.preventDefault();
    search();
  }
  

  function updateQuery(event) {
    setQuery(event.target.value);}
  
  function load(){
    setLoaded(true);
    search();
  }

    if (loaded){
  return (
    <div className="Dictionary">
      
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search for a word..."
            autoFocus={true}
            onChange={updateQuery}
          />
          <input type="submit" value="Search" />
        </form>
      
      <Results results={results} />
    </div>
  );
    }else{
      load();
      return "loading";
    }
}
