import { useState, useEffect } from "react"
import axios from "axios"
import MovieCard from "./components/MovieCard"
import TvCard from "./components/TvCard"
import NavBar from "./components/NavBar"
import MoviesList from "./components/MoviesList"
import TvList from "./components/TvList"

function App() {
  const [search, setSearch] = useState('')
  const [movieData, setMovieData] = useState(null)
  const [tvData, setTvData] = useState(null)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getData()
  }

  const getData = () => {
    const searchValue = search

    // -------------------------MOVIES
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=98e906b1055207ca319b06893208305a&query=${searchValue}`).then(res => {
      setMovieData(res.data.results)
    })

    // -------------------------TV
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=98e906b1055207ca319b06893208305a&query=${searchValue}`).then(res => {
      setTvData(res.data.results)
      console.log(res.data.results)
    })

  }

  return (
    <>
      <NavBar submit={handleSubmit} change={handleChange} />
      <div className="bg-dark">
        <div className="container-xl mt-5 p-5">

          <MoviesList movies={movieData} />

          <hr className="my-5" />

          <TvList tv={tvData} />

        </div>
      </div>
    </>
  )
}

export default App
