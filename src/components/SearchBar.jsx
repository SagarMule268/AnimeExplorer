import React from 'react'
import '../App.css'
import { ThemeContext } from './ThemeContext';
import { useState } from 'react';
const SearchBar = ({onSearch}) => {
    const [query,setQuery]=useState("");
    const {theme}= React.useContext(ThemeContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(query.trim()){
            onSearch(query);
           
        }
        console.log("Search submitted for:", query);
        // Here you can add the logic to fetch anime data based on the title
    }
  return (

    <div className={theme=="dark"?'anime-search-bar-dark':'anime-search-bar-light'}>
        <form onSubmit={handleSubmit} >
         <input  type="text"
         placeholder='Search for a anime ....'
          value={query} 
          onChange={(e)=>setQuery(e.target.value)} 
          name="title"
           id="" />
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBar
