import React, { useState } from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import SearchBar from '../SearchBar'
import MovieCard from '../MovieCard'

function Home() {

    const [movie,setMOvie] = useState(null)

  return (
    <>
    <Navbar/>
    <Hero/>
    <SearchBar setMOvie={setMOvie}/>
    {movie && <MovieCard movie={movie}/>}
    
    </>
  )
}

export default Home
