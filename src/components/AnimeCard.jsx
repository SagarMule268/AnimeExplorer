import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
const AnimeCard = ({ anime }) => {
  return (
    <Link to={`/anime/${anime.mal_id}`} 
     className='block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition w-64'
    >
        <img src={anime.images.jpg.image_url} alt="anime.title" srcset="" className='w-full h-60 object-cover object-top' />
      <div className='p-4' >

        <div className='anime-card-details'>
          <h2 className='text-lg font-bold text-gray-800'>{anime.title}</h2>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
          <span>Episodes: { anime.episodes }</span>
          <span> Rating:⭐ 8.9</span>
        </div>
        </div>

      </div>
    </Link>
  );
}

export default AnimeCard
