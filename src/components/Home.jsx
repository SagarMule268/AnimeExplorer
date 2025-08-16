import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { ThemeContext } from './ThemeContext';
import SearchBar from './SearchBar';
import AnimeCard from './AnimeCard';
import ZoroPlayer from './ZoroPlayer';
import Header from './Header';
import {useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get('q');
  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);
  const handleSearch = async (query) => {
    setLoading(true);
    const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
    setAnimeData(res.data.data);
     navigate(`/?q=${query}`, { replace: true });
    console.log(res.data.data);
    setLoading(false);
  }
  return (
    <div className='' >
      <SearchBar onSearch={handleSearch} />
      {loading && <div className=' text-center loader'></div>}
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  justify-items-center p-4 m-4'>
        {animeData.map(anime => (

          <AnimeCard key={anime.mal_id} anime={anime} />

        ))}
      </div>
    </div>

  )
}

export default Home
