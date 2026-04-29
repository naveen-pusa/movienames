import React, { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Router from './Router'
import Overlay from './components/Overlay'
import { useLocation } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  let [page, setPage] = useState(false)
  let location = useLocation()
  return (
    <>
      <Header setPage={setPage} />
      <Router />
      {/* <Overlay/> */}

      {page && <Overlay setPage={setPage}/>}
      
      {location.pathname === '/' && <Body setPage={setPage} /> }
      <Footer/>

    </>
  )
}

export default App