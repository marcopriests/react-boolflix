import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getData()
    console.log('cliccato')
  }

  const getData = () => {
    const searchValue = search

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=98e906b1055207ca319b06893208305a&query=${searchValue}`).then(res => {
      console.log(searchValue)
      console.log(res.data.results)
    })
  }

  return (
    <>
      <div className="container p-5">
        <form onSubmit={handleSubmit} className="input-group">
          <input type="text" className="form-control" placeholder="Search..." onChange={handleChange} />
          <button type="submit" className="btn btn-danger">Search</button>
        </form>
      </div>
    </>
  )
}

export default App
