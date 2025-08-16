import Home from './components/Home';
import './App.css'
import Buttons from './components/Buttons'
import SearchBar from './components/SearchBar'
import { Routes, Route } from 'react-router-dom'
import AnimeDetails from './components/AnimeDetails';
import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className='flex-grow'>
            <Routes>


              <Route path='/' element={<Home />} />
              <Route path='/anime/:id' element={<AnimeDetails />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />




            </Routes>
          </main>
          <Footer />
          </div >
      </ThemeProvider>
    
    </>
  )
}

export default App
