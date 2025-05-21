import { useState, useEffect } from "react"
import axios from "axios"

const TvCard = ({ tv }) => {
    const lang = tv.original_language == 'en' ? 'gb' : tv.original_language

    const vote = Math.round(tv.vote_average / 2)
    const stars = []

    for (let i = 0; i < 5; i++) {
        if (vote > i) {
            stars.push(<i className="fa-solid fa-star" key={i}></i>)
        } else {
            stars.push(<i className="fa-regular fa-star" key={i}></i>)
        }

    }
    return (
        <div className='col-4 col-md-3 col-lg-2 col-xxl-1'>
            <div className="card rounded-0 border-0">
                <img src={tv.poster_path
                    ? `https://image.tmdb.org/t/p/original${tv.poster_path}`
                    : 'https://placehold.co/200x300'}
                    alt={tv.name} className="card-image rounded-0" />

                <div className="card-info">
                    <ul className="text-light p-3">
                        <li className="list-group-item"><b>Title: </b>{tv.name}</li>
                        <li className="list-group-item"><b>Original title: </b>{tv.original_name}</li>
                        <li className="list-group-item fw-semibold"><b>Rating: </b>{stars}</li>
                        <li className="list-group-item"><b>Original language: </b><i className={`fi fi-${lang}`}></i></li>
                        <li className="list-group-item"><b>Overview: </b>{tv.overview}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TvCard
