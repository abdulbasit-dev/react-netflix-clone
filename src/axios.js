import axios from 'axios'

// base url to make requst to the movie database
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export default instance

// for example
// instance.get('/foo-bar')
// it equal to
// 'https://api.themoviedb.org/3/foo-bar'
