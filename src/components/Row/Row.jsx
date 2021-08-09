import React, {useState, useEffect} from 'react'
import axios from '../../axios'
import './Row.css'
import YouTube from 'react-youtube'

const base_url = 'https://image.tmdb.org/t/p/original'

function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([])
  const [tarilerUrl] = useState('')

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  //this code one when the components run
  useEffect(() => {
    //if [] run Row ones and do run it agian
    const fethcData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
    }
    fethcData()
  }, [fetchUrl])

  function showTrialer(e) {
    console.log(e.target.name)
    // if (tarilerUrl) {
    //   setTrailerUrl('')
    // } else {
    //   movieTrailer(movie?.name || '').then(url => {
    //     const urlParam = new URLSearchParams(new URL(url).search)
    //     setTrailerUrl(urlParam.get('v'))
    //   })
    // }
  }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies
          .filter(movie => movie.poster_path)
          .map(movie => (
            <img
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              key={movie.id}
              name={movie?.name || movie?.original_name || movie?.title}
              alt={movie?.name || movie?.original_name || movie?.title}
              onClick={showTrialer}
            />
          ))}
      </div>
      {tarilerUrl && <YouTube videoId={tarilerUrl} opts={opts} />}
    </div>
  )
}

export default Row
