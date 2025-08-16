import React from 'react'
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
const Header = () => {
  const {theme ,toggleTheme} = React.useContext(ThemeContext);
  
  return (
    // <div className='header'>
    //   <nav className={ theme=='dark'?'navbar-dark': 'navbar'}>
    //   <div className={theme=='dark'?'log-dark':'log'}></div>
    //   <h1 className='text-'>Anime Explorer </h1>
    //   <button onClick={toggleTheme}> <i class="fa fa-lightbulb"></i> </button>
    // </nav>
    // </div>
    <header class="bg-white shadow-md">
  <div class="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
    
    {/* <!-- Logo --> */}
    <div class="text-2xl font-bold text-black-600">
      Anime Explorer
    </div>

    {/* <!-- Navigation --> */}
    <nav class="flex space-x-6">
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-400">
          Contact
        </Link>
      </div>
      
    </nav>
    
  </div>
</header>

  )
}

export default Header
