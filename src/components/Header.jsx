import React from 'react'
import { ThemeContext } from './ThemeContext';
const Header = () => {
  const {theme ,toggleTheme} = React.useContext(ThemeContext);
  
  return (
    <nav className={ theme=='dark'?'navbar-dark': 'navbar'}>
      <div className={theme=='dark'?'log-dark':'log'}></div>
      <h1 className=''>Anime Explorer </h1>
      <button onClick={toggleTheme}> {theme=='dark'? 'Light Mode':'Dark Mode'} </button>
    </nav>
  )
}

export default Header
