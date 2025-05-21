import React from 'react'
import { useState, useEffect, useContext } from 'react'
import ApiContext from '../contexts/ApiContext'
import axios from 'axios'

const NavBar = () => {
    const { handleSubmit, handleChange, movieData } = useContext(ApiContext)
    const [movieGenres, setMovieGenres] = useState([])
    const [tvGenres, setTvGenres] = useState([])
    const [selectValue, setSelectValue] = useState('')

    const getMovieGenres = () => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=98e906b1055207ca319b06893208305a').then(res => {
            setMovieGenres(res.data.genres)
            console.log(res.data.genres)
        })
    }

    const getTvGenres = () => {
        axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=98e906b1055207ca319b06893208305a').then(res => {
            setTvGenres(res.data)
        })
    }

    // useEffect(() => {
    //     getMovieGenres()
    //     getTvGenres()
    // }, [])

    // useEffect(() => {
    //     const filtered = movieData.filter((movie) => {
    //         return movie.genre.includes(selectValue)
    //     })

    //     setFilteredMovies(filtered)

    // }, [selectValue, movieData])

    return (
        <nav className="bg-dark fixed-top shadow" data-bs-theme="dark">
            <div className="container-fluid d-flex justify-content-between align-items-center py-2">

                <div className="bebas text-danger fs-3">Boolflix</div>

                <form onSubmit={handleSubmit} className="d-flex" role='search'>
                    <input type="search" className="form-control me-2" placeholder="Search..." onChange={handleChange} />

                    {/* <select className="form-select me-2" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                        <option value=''>Filter by genre</option>

                        {movieGenres.map(genre => {
                            return <option value={genre.name} >{genre.name}</option>
                        })}
                    </select> */}

                    <button type="submit" className="btn btn-danger"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>

        </nav >
    )
}

export default NavBar
