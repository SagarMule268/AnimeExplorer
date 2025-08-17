import vinland from '../assets/vinland.mp4'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Landing = () => {
    const navigate = useNavigate();

    const toHome =()=>{
        navigate('/home')
    }
    const toAbout =()=>{
        navigate('/about')
    }
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={vinland} // put your video in public/videos folder
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Anime Explorer
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Discover, Watch Trailer & Enjoy Your Favorite Anime
        </p>
        <div className="flex gap-4">
          <button onClick={toHome} className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition">
            Get Started
          </button>
          <button onClick={toAbout} className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing
