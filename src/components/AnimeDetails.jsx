import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from './Header';
import { ThemeContext } from './ThemeContext';
import Trailer from './Trailer';
const AnimeDetails = () => {
  const { id } = useParams();
  const {theme}=useContext(ThemeContext);
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
  const closeTrailer=()=>{setTrailer(false)}
  if (loading) {
    return <div className='loader'></div>;
  }
  return (
    // <div>

    //  <button onClick={() => navigate(-1)}>Go Back</button>
    //   <h1>{anime.title}</h1>
    //   <img src={anime.images.jpg.image_url} alt={anime.title} />
    //     <p>Episodes: {anime.episodes}</p>
    //     <p>Duration: {anime.duration}</p>
    //     <p>Status: {anime.status}</p>
    //     <p>Score: {anime.score || 'N/A'}</p>
    //     <p>Synopsis: {anime.synopsis}</p>
    //     <button>Watch Trailer</button>
    //     <h3></h3>
    //     <Link to={"/"} >watch ANime Trabler</Link>
    //     <iframe src={anime.trailer.url} frameborder="0"></iframe>
    // </div>
    <>
     <div className='m-30'>
       <Header />
       
      <div className="flex flex-col md:flex-row p-4 ">
  {/* Image Section */}
  
  <img
    src={anime.images.jpg.image_url}
    alt={anime.title}
    className="rounded-lg w-full md:w-1/3 object-cover"
    style={{ height: "auto" }}
  />
  
  {/* Text Information */}
  <div className="md:ml-8 mt-4 md:mt-0 d-flex flex-1 justify-center items-center pt-40">
    <button
  onClick={() => navigate(-1)}
  className={`absolute top-34  right-32 px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-black text-white border-2 border-white' : 'bg-white text-black border-2 border-black !important'}`}
>
  ⬅ Back
</button>
    <h1 className="text-3xl font-bold mb-2">{anime.title}</h1>
    <p>No of episodes: {anime.episodes}</p>
    <p>Duration: {anime.duration}</p>
    <p>Status: {anime.status}</p>
    <p>Score: {anime.score || "N/A"}</p>
    <button
      onClick={showTrailer}
      className={theme === 'dark' ? 'bg-white text-black px-4 py-2 rounded-lg' : 'bg-black text-white px-4 py-2 rounded-lg '}
    >
      Watch Trailer
    </button>
  </div>
</div>

{/* Introduction Section */}
<div className="col-span-4 m-4">
  <h3 className="text-left text-lg font-semibold">Introduction:</h3>
  <p className="text-justify mt-2">{anime.synopsis}</p>
</div>




     </div>
     <Trailer trailer={trailer} anime={anime} closeTrailer={closeTrailer} theme={theme}/>
    </>



  )
}

export default AnimeDetails
