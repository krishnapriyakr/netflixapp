import React, { useEffect, useState } from 'react'
import tmdbaxiosinstance from '../tmdbaxiosinstance';
import './Row.css'
function Row({ title, fetchUrl,isPoster }) {
  console.log(fetchUrl);

  const [allMovies, setAllMvies] = useState()
  const base_url = `https://image.tmdb.org/t/p/original/`;
  
  const fetchData = async () => {
    const {data} = await tmdbaxiosinstance.get(fetchUrl)
    // console.log(data.results);
    setAllMvies(data.results)
  }
console.log(allMovies);
  
  useEffect(() => {
  fetchData()
},[])

  return (
    <>
      {/* <h1 style={{ fontSize: '50px', color: 'black', fontWeight: 'bolder' }}>Movies</h1> */}
      <br /><br /><br />
      <div className='row'> 
      <h1 style={{fontSize:'20px',color:'black',fontWeight:'bold'}} >{title}</h1>
      <div className='movies-row'>
      {
        allMovies?.map(item => (
          <img className={`${isPoster && 'movie_poster'} moive`} src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`} alt="noimg" />
        ))
        }
        </div>
      </div>
      </>

  )
}

export default Row