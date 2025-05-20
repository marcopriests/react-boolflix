import React from 'react'

const MovieCard = ({ movie }) => {
    const lang = movie.original_language == 'en' ? 'gb' : movie.original_language
    return (
        <div className='col-6 col-md-4 col-lg-3 mb-3'>
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="card-img-top" />
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h4 className="fw-semibold">{movie.title}</h4></li>
                        <li className="list-group-item"><h5 className="fw-semibold fst-italic">{movie.original_title}</h5></li>
                        <li className="list-group-item"><i className={`fi fi-${lang}`}></i></li>
                        <li className="list-group-item fw-semibold">{movie.vote_average}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
