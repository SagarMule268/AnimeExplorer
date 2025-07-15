import  Home from './components/Home';
import './App.css'
import Buttons from './components/Buttons'
import SearchBar from './components/SearchBar'
import {Routes ,Route} from 'react-router-dom'
import AnimeDetails from './components/AnimeDetails';
import React from 'react';
import ThemeProvider from './components/ThemeProvider';
function App() {
  return (
    <>
    <ThemeProvider>
      <Routes>
        
         
        <Route path='/' element={<Home />} />
        <Route path='/anime/:id' element={<AnimeDetails />} />
      
       
      </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
