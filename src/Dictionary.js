import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  const [query, setQuery] = useState("");
  const [results, setResults]=useState("");

  function handleResponse(response){
    console.log(response.data[0]);
    setResults(response.data[0]);

  }
  function handleSearch(event) {
    event.preventDefault();
  }
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
  axios.get(apiUrl).then(handleResponse);

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  
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

      <Results results={results}/>
    </div>
  );
}
