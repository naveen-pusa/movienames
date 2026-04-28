import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import  MovieCard from './components/MovieCard'
import { useNavigate } from 'react-router-dom'

function Overlay(props) {

    let navigate = useNavigate()
    let [name,setName] = useState('')
    let [movie,setMovie] = useState({})
   
    async function api() {
        let {data} = await axios.get(`https://www.omdbapi.com/?apikey=61e576a4&t=${name}`)
        // setMovie(data)
        navigate(`/moviecard/${name}`,{state : data})
        props.setPage(false)
    }
    // api()
   
  return (
    <>
        <div className='d-flex justify-content-center position-fixed top-0 start-0 vh-100 bg-dark bg-opacity-75 align-items-center w-100 z-3' onClick={()=> props.setPage(false)}>
            <div className="row">
                <div className='card w-100 col-md-8 col-lg-6 col-xl-6 p-4 d-flex flex-row align-items-center' onClick={(e)=>e.stopPropagation()}>
                <input type="text" placeholder='Search your movie...' className='form-control' onChange={e=> setName(e.target.value)} />
                <button className='btn btn-primary mx-2' onClick={api} >
                <i className="fa-solid fa-magnifying-glass  "></i>
                </button>
                <button className='btn btn-danger' onClick={()=>props.setPage(false)}>close</button>
            </div>
            </div>
        </div>

        
    </>
  )
}

export default Overlay