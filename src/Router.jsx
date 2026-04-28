import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Search from './Search'

// import Body from './Body'
import MovieCard from './components/Moviecards'

function Router() {
  return (
    <Routes>
        {/* <Route path='/search' element={<Search/>}/> */}
        <Route path='/moviecard/:name' element={<MovieCard/>}/>
    </Routes>
  )
}

export default Router