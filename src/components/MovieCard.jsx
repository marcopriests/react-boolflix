import React from 'react'

const MovieCard = ({ movie }) => {
    const lang = movie.original_language == 'en' ? 'gb' : movie.original_language
    return (
        <ul className="list-group list-unstyled mb-3">
            <li className="list-group-item"><h4 className="fw-semibold">{movie.title}</h4></li>
            <li className="list-group-item"><h5 className="fw-semibold fst-italic">{movie.original_title}</h5></li>
            <li className="list-group-item"><i className={`fi fi-${lang}`}></i></li>
            <li className="list-group-item fw-semibold">{movie.vote_average}</li>
        </ul>
    )
}

export default MovieCard
