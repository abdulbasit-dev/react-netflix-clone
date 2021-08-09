import React, {useState, useEffect} from 'react'
import axios from '../../axios'
import requests from '../../requests'
import './Banner.css'

// const base_url = 'https://image.tmdb.org/t/p/original'

function Banner() {
  const [movie, setmovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const requst = await axios.get(requests.fetchNetflixOriginals)
      setmovie(requst.data.results[Math.floor(Math.random() * requst.data.results.length - 1)])
    }

    fetchData()
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgrounSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.name || movie?.original_name || movie?.title}</h1>
        <div className='banner__butons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My list</button>
        </div>
        <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className='banner__fadeBottom' />
    </header>
  )
}

export default Banner
