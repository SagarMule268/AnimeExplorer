import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
const AnimeCard = ({anime}) => {
  return (
   <Link to={`/anime/${anime.mal_id}`} >
  <div className='anime-card' >
      <img  src={anime.images.jpg.image_url} alt="anime.title" srcset="" />
      <div className='anime-card-details'>
          <h2>{anime.title}</h2>
      <p>No of Episodes : {anime.episodes}</p>
      <p>Genera : {anime.genres.name}</p>
      <p>Score : {anime.score || 'N/A'} </p>
      </div>
      
  </div>
    </Link>
  );
}

export default AnimeCard
