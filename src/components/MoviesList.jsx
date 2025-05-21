import React from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import ApiContext from '../contexts/ApiContext'

const MoviesList = () => {
    const [discover, setDiscover] = useState([])
    const { movieData } = useContext(ApiContext)

    const getDiscover = () => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=98e906b1055207ca319b06893208305a').then(res => {
            setDiscover(res.data.results)
        })
    }

    useEffect(() => {
        getDiscover()
    }, [])

    let sectionTitle = 'Discover new movies'

    return (
        <>
            {!movieData ? sectionTitle :
                sectionTitle = 'Movies'}

            <h5 className="mb-3 fw-bold text-uppercase text-light">{sectionTitle}</h5>

            <div className="row g-2">
                {!movieData
                    ? discover.map((elem) => <MovieCard movie={elem} key={elem.id} />)
                    : movieData.map(elem => <MovieCard movie={elem} key={elem.id} />)
                }
            </div>
        </>
    )
}

export default MoviesList
