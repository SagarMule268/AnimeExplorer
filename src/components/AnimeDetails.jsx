import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const AnimeDetails = () => {
    const {id}=useParams();
    const [anime, setAnime] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [trailer , setTrailer]=useState(false);
    const navigate = useNavigate();
    console.log(id);
    

    useEffect(()=>{
       axios.get('https://api.jikan.moe/v4/anime/' + id)
    .then((response)=>setAnime(response.data.data))
    .catch((error)=>console.error('Error fetching anime details:', error))
    .finally(() => setLoading(false));
    },[id])

    const showTrailer = () => {
        setTrailer(true);
    }
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
      <div className='grid grid-cols-4 gap-4"'>
        
          <div className=' '>
                  <img src={anime.images.jpg.image_url} alt={anime.title} className='rounded-lg' style={{color:"white"}} />
          </div>
          <div className='col-span-3 font-sans'>
              <div className='m-3'>
                <h1 className='m-4'>{anime.title}</h1>
                <p>No of episodes: {anime.episodes}</p>
                <p>Duration: {anime.duration}</p>
                <p>Status: {anime.status}</p>
                <p>Score: {anime.score || 'N/A'}</p>
                <button onClick={showTrailer} style={{color:"black",margin:"10px"}}>Watch Trailer</button>
                {
                  trailer&&(<iframe 
                  src={anime.trailer.embed_url}
                  frameborder="0"
                 style={{width: '100%', height: '100vh'}}
                  allowFullScreen
                  
                  ></iframe>)
                }
              </div>
          </div>  
          <div className="col-span-4 m-4">
            <h3 className='text-left text-bold'>Introduction :</h3>
            <p className='text-justify'>{anime.synopsis}</p>
            </div> 
            <div className='col-span-4 m-4'>
              
                
                  
              
              

            </div>
             
      </div >

    
  )
}

export default AnimeDetails
