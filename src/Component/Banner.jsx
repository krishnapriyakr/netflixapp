import React, { useEffect, useState } from 'react'
import './Banner.css'
import tmdbaxiosinstance from '../tmdbaxiosinstance';


function Banner({fetchUrl}) {
    const [movie, setMovies] = useState({})
    const base_url =  `https://image.tmdb.org/t/p/original/`;
    
    const fetchData = async () => {
      const {data} = await tmdbaxiosinstance.get(fetchUrl)
      console.log(data.results[Math.floor(Math.random()*data.results.length)]);
         setMovies(data.results[Math.floor(Math.random()*data.results.length)])
        // setMovies(data.results)
    }
  console.log(movie);
    
    useEffect(() => {
    fetchData()
  },[])

  return (
      <div
          style={{
              height: "600px",
              backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
          }}
    >
      
      
        <div className='Banner-content'>
              <h1>{movie?.name}</h1>
        <h2 style={{color:'white',fontSize:'22px',fontWeight:'lighter'}}>{movie?.overview}</h2> <br />
        <button className='btn' style={{width:'150px',backgroundColor:'white',fontSize:'18px',color:'black'}}> <b> <i class="fa-solid fa-play fa-lg"></i> &nbsp;PLAY</b> </button> &nbsp;&nbsp;&nbsp;
        <button className='btn' style={{width:'150px',backgroundColor:'transparent',fontSize:'18px',color:'white'}}> <b> <i class="fa-solid fa-arrow-right fa-lg"></i> &nbsp;DETAILS</b></button>
      </div><br /> 
      {/* <h1 style={{ fontSize: '50px', color: 'black', fontWeight: 'bolder',marginTop:'25px',marginLeft:'20px' }}>Movies</h1> <br /> */}
          
      </div> 
  )
}

export default Banner