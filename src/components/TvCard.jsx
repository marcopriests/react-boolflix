import React from 'react'

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
        <div className='col-6 col-md-4 col-lg-3 mb-3'>
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/original${tv.poster_path}`} alt="Image not found" className="card-img-top" />
                <div className="card-body">
                    <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item"><h4 className="fw-semibold">{tv.name}</h4></li>
                        <li className="list-group-item"><h5 className="fw-semibold fst-italic">{tv.original_name}</h5></li>
                        <li className="list-group-item"><i className={`fi fi-${lang}`}></i></li>
                        <li className="list-group-item fw-semibold">{stars}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TvCard
