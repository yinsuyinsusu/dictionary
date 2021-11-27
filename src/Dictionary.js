import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";
import Photos from "./Photos.js";


export default function Dictionary() {
  const [query, setQuery] = useState("weather");
  const [results, setResults]=useState("");
  const [loaded, setLoaded]=useState(false);
  const [photos, setPhotos]=useState(null);

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response){
    console.log(response.data);
    setPhotos(response.data.photos);
  }
  function search (){
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
  axios.get(apiUrl).then(handleDictionaryResponse);

  let pexelsApiKey="563492ad6f91700001000001601d352519314e358a0bf5141cd15909";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=3`;
  let headers= {"Authorization" : `Bearer ${pexelsApiKey}`}
  axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);}

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
      <Photos photos={photos} />
    </div>
  );
    }else{
      load();
      return "loading";
    }
}
