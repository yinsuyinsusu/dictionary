import React, { useState } from "react";


export default function Dictionary(){
    const [query, setQuery]=useState("");
    
function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for ${query}`);
}

  function updateQuery(event){
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
    </div>
  );
}