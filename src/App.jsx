import { useState, useEffect } from "react"
import axios from "axios"
import MovieCard from "./components/MovieCard"

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(null)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getData()
  }

  const getData = () => {
    const searchValue = search

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=98e906b1055207ca319b06893208305a&query=${searchValue}`).then(res => {
      setData(res.data.results)
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
        {!data
          ? <div>Nothing to show...</div>
          : data.map(elem => {
            return <MovieCard movie={elem} key={elem.id} />
          })}
      </div>
    </>
  )
}

export default App
