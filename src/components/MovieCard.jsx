import React from 'react'

const MovieCard = ({ movie }) => {
    const lang = movie.original_language == 'en' ? 'gb' : movie.original_language

    const vote = Math.round(movie.vote_average / 2)
    const stars = []

    for (let i = 0; i < 5; i++) {
        if (vote > i) {
            stars.push(<i className="fa-solid fa-star" key={i}></i>)
        } else {
            stars.push(<i className="fa-regular fa-star" key={i}></i>)
        }

    }
    return (
        <div className='col-4 col-md-3 col-lg-2'>
            <div className="card rounded-0 border-0">
                <img src={movie.poster_path
                    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                    : 'https://placehold.co/200x300'}
                    alt={movie.title} className="card-image rounded-0" />

                <div className="card-info">
                    <ul className="text-light p-3">
                        <li className="list-group-item"><b>Title: </b>{movie.title}</li>
                        <li className="list-group-item"><b>Original title: </b>{movie.original_title}</li>
                        <li className="list-group-item fw-semibold"><b>Rating: </b>{stars}</li>
                        <li className="list-group-item"><b>Original language: </b><i className={`fi fi-${lang}`}></i></li>
                        <li className="list-group-item"><b>Overview: </b>{movie.overview}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
