import { useState, useEffect } from "react"
import axios from "axios"
import MovieCard from "./components/MovieCard"
import TvCard from "./components/TvCard"

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
      <div className="container p-5">
        {/* ------------------------------------------------INPUT SEARCH */}
        <form onSubmit={handleSubmit} className="input-group mb-5">
          <input type="text" className="form-control" placeholder="Search..." onChange={handleChange} />
          <button type="submit" className="btn btn-danger">Search</button>
        </form>

        {/* --------------------------------------------------ELENCO FILM */}
        <h2 className="mb-3 fw-semibold">Movies</h2>
        <div className="mb-5">
          {!movieData
            ? ''
            : movieData.map(elem => {
              return <MovieCard movie={elem} key={elem.id} />
            })}
        </div>

        <hr className="my-5" />

        {/* --------------------------------------------------ELENCO SERIE TV */}
        <h2 className="mb-3 fw-semibold">TV Series</h2>
        <div className="mb-5">
          {!tvData
            ? ''
            : tvData.map(elem => {
              return <TvCard tv={elem} key={elem.id} />
            })}
        </div>
      </div>
    </>
  )
}

export default App
