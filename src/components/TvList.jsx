import React from 'react'
import TvCard from './TvCard'

const TvList = ({ tv }) => {
    return (
        <>
            <h5 className="mb-3 fw-bold text-uppercase text-light">Tv series</h5>
            <div className="row g-2">
                {!tv
                    ? ''
                    : tv.map(elem => {
                        return <TvCard tv={elem} key={elem.id} />
                    })}
            </div>
        </>
    )
}

export default TvList
