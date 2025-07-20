import React from 'react'
import { ThemeContext } from './ThemeContext';
const Header = () => {
  const {theme ,toggleTheme} = React.useContext(ThemeContext);
  
  return (
    <div className='header'>
      <nav className={ theme=='dark'?'navbar-dark': 'navbar'}>
      <div className={theme=='dark'?'log-dark':'log'}></div>
      <h1 className='text-'>Anime Explorer </h1>
      <button onClick={toggleTheme}> <i class="fa fa-lightbulb"></i> </button>
    </nav>
    </div>
  )
}

export default Header
