import React from 'react'
import TvCard from './TvCard'

const TvList = ({ tv }) => {
    return (
        <>
            <h2 className="mb-3 fw-semibold">TV Series</h2>
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
