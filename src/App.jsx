import { useState, useEffect } from "react"
import axios from "axios"

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
            return <ul className="list-group list-unstyled mb-3" key={elem.id}>
              <li className="list-group-item"><h4 className="fw-semibold">{elem.title}</h4></li>
              <li className="list-group-item"><h5 className="fw-semibold fst-italic">{elem.original_title}</h5></li>
              <li className="list-group-item">{elem.original_language}</li>
              <li className="list-group-item fw-semibold">{elem.vote_average}</li>
            </ul>
          })}
      </div>
    </>
  )
}

export default App
