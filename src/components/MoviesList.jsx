import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({ movies }) => {
    return (
        <>
            <h5 className="mb-3 fw-bold text-uppercase text-light">Movies</h5>
            <div className="row g-2">
                {!movies
                    ? ''
                    : movies.map(elem => {
                        return <MovieCard movie={elem} key={elem.id} />
                    })}
            </div>
        </>
    )
}

export default MoviesList
