import React, { useState } from 'react'
import Overlay from './Overlay'

function Body() {

    let [page, setPage] = useState(false)



    return (
        <>
            <div className='container-fluid bg-dark text-white d-flex justify-content-center align-items-center' style={{ height: "80vh" }}>
                
                <div className='bg-secondary p-5 rounded text-center shadow' style={{ width: "60%" }}>
                    
                    <p className='fw-bolder' style={{ fontSize: "3rem" }}>
                        Discover Movies
                        <br />
                        <span className='text-danger' style={{ fontSize: "2.5rem" }}>
                            Worth Watching 
                        </span>
                    </p>

                    <p className='fs-5'>
                        Search, explore, and get complete movie details instantly — ratings, cast, plot, and more.
                    </p>

                    <div>
                        <button 
                            className='btn btn-danger py-2 px-4'
                            onClick={() => setPage(true)}
                        >
                            <i className="fa-solid fa-magnifying-glass mx-2"></i>
                            Search Movies
                        </button>

                        <button className='btn btn-outline-light py-2 px-4 mx-3'>
                            Explore Movies
                        </button>
                    </div>

                </div>

            </div>

            {page && <Overlay setPage={setPage} />}
        </>
    )
}

export default Body