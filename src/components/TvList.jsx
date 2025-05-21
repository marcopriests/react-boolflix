import React from 'react'
import TvCard from './TvCard'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import ApiContext from '../contexts/ApiContext'

const TvList = () => {
    const [discover, setDiscover] = useState([])
    const { tvData } = useContext(ApiContext)

    const getDiscover = () => {
        axios.get('https://api.themoviedb.org/3/discover/tv?api_key=98e906b1055207ca319b06893208305a').then(res => {
            setDiscover(res.data.results)
        })
    }

    useEffect(() => {
        getDiscover()
    }, [])

    return (
        <>
            {!tvData
                ? <h5 className="mb-3 fw-bold text-uppercase text-light">Discover New TV Series</h5>
                : <h5 className="mb-3 fw-bold text-uppercase text-light">TV Series</h5>}

            <div className="row g-2">
                {!tvData
                    ? discover.map(elem => <TvCard tv={elem} key={elem.id} />)
                    : tvData.map(elem => <TvCard tv={elem} key={elem.id} />)
                }
            </div>
        </>
    )
}

export default TvList
