import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    
    {/* Left side - Logo & description */}
    <div className="mb-4 md:mb-0">
      <h2 className="text-xl font-bold text-white">Anime Explorer</h2>
      <p className="text-sm text-gray-400">Discover anime details, ratings & trailers.</p>
    </div>

    {/* Middle - Links */}
    <div className="flex space-x-6">
      
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="contact"className="hover:text-white" >Contact</Link>

    </div>

    {/* Right side - Social */}
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="#"><i className="fab fa-twitter hover:text-white"></i></a>
      <a href="#"><i className="fab fa-instagram hover:text-white"></i></a>
      <a href="#"><i className="fab fa-github hover:text-white"></i></a>
    </div>
  </div>

  {/* Bottom text */}
  <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
    © { new Date().getFullYear()  } Anime Explorer. All rights reserved.
  </div>
</footer>

  )
}

export default Footer
