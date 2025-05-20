import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({ movies }) => {
    return (
        <>
            <h2 className="mb-3 fw-semibold">Movies</h2>
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
