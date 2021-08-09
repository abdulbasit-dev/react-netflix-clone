import React from 'react'
import './App.css'
import Row from './components/Row/Row'
import requests from './requests'
import Banner from './components/Banner/Banner'
import Navbar from './components/Nav/Nav'

function App() {
  return (
    <div className='app'>
      {/* navbar */}
      <Navbar />
      <Banner />

      <Row title='Netflex Orignal' isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movie' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movie' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movie' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movie' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default App
