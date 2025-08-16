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

    <div className=" flex justify-center items-center p-4 m-4">
        <form onSubmit={handleSubmit} className='flex space-x-4'>
         <input  type="text"
         placeholder='Search for a anime ....'
          value={query} 
          onChange={(e)=>setQuery(e.target.value)} 
          name="title"
           id=""
           className='border border-gray-500 rounded-lg px-4 py-2  focus:outline-none focus:ring-2 focus:ring-black-500'
           />
            <button type="submit" className='bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-white-400'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar
