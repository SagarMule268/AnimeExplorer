import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from './Header';
import { ThemeContext } from './ThemeContext';
import Trailer from './Trailer';
const AnimeDetails = () => {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);
  const [anime, setAnime] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [trailer, setTrailer] = useState(false);
  const navigate = useNavigate();
  console.log(id);
  console.log(theme);

  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/anime/' + id)
      .then((response) => setAnime(response.data.data))
      .catch((error) => console.error('Error fetching anime details:', error))
      .finally(() => setLoading(false));
  }, [id])

  const showTrailer = () => {
    setTrailer(true);
  }
  const closeTrailer = () => { setTrailer(false) }
  if (loading) {
    return <div className='loader'></div>;
  }
  return (

    <>
      <div className='max-w-6xl mx-auto p-6'>
<div className="flex justify-end">
        <button
          onClick={() => navigate(-1)} 
          className="px-4 py-2 mb-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700"
        >
          ← Go Back
        </button>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>

            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="w-100 h-auto rounded-lg shadow-md"
            />
          </div>
    
          <div className='flex flex-col justify-center'>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {anime.title}
            </h1>

            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold">Episodes:</span>  {anime.episodes}</li>
              <li><span className="font-semibold">Duration:</span> {anime.duration}</li>
              <li><span className="font-semibold">Genres:</span> {anime.genres.map((g) => g.name).join(", ")}</li>

              <li><span className="font-semibold">Status:</span> {anime.status}</li>
              <li><span className="font-semibold">Rating:</span> ⭐ {anime.score || "N/A"}</li>
            </ul>
             <button
            onClick={()=>{
               console.log("Watch Trailer clicked");
              showTrailer();
            }}
            className="mt-6 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
        
            Watch Trailer
          </button>
          </div>
        </div>

        <div className="mt-10">
    <h2 className="text-2xl font-semibold mb-4">Anime Info</h2>
    <p className="text-gray-700 leading-relaxed">
      {anime.synopsis || "No information available for this anime."}
    </p>
  </div>
      </div>

    
     
{trailer && anime.trailer && anime.trailer.url && (
  <Trailer closeTrailer={closeTrailer} anime={anime} />
)}



      
    </>



  )
}

export default AnimeDetails
