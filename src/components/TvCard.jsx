import React from 'react'

const TvCard = ({ tv }) => {
    const lang = tv.original_language == 'en' ? 'gb' : tv.original_language
    return (
        <ul className="list-group list-unstyled mb-3">
            <li className="list-group-item"><h4 className="fw-semibold">{tv.name}</h4></li>
            <li className="list-group-item"><h5 className="fw-semibold fst-italic">{tv.original_name}</h5></li>
            <li className="list-group-item"><i className={`fi fi-${lang}`}></i></li>
            <li className="list-group-item fw-semibold">{tv.vote_average}</li>
        </ul>
    )
}

export default TvCard
