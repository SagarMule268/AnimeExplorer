import React, { useState } from 'react';
import axios from 'axios';
import { ThemeContext } from './ThemeContext';
import SearchBar from './SearchBar';
import AnimeCard from './AnimeCard';
import ZoroPlayer from './ZoroPlayer';
import Header from './Header';

const Home = () => {
   const [animeData, setAnimeData] = useState([]); 
  const [loading, setLoading] = useState(false);
   const  handleSearch = async (query)=>{
    setLoading(true);
    const res =await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
    setAnimeData(res.data.data);
    console.log(res.data.data);
    setLoading(false);
   }
  return (
    <div className='container' >
      <Header/>
        <SearchBar onSearch={handleSearch} />
        {loading && <div className=' text-center loader'></div>
}
        <div className='grid grid-cols-2 sm:grid-cols-4 '>
            {animeData.map(anime =>(
              
                 <AnimeCard key={anime.mal_id} anime={anime} />
               
            ))}
        </div>
        
    </div>
    
  )
}

export default Home
