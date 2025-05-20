import { useState } from "react"

function App() {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('cliccato')
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
