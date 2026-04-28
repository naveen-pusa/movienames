import React, { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Router from './Router'
import Overlay from './components/Overlay'
import { useLocation } from 'react-router-dom'

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

    </>
  )
}

export default App