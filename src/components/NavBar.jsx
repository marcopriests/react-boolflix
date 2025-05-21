import React from 'react'
import { useContext } from 'react'
import ApiContext from '../contexts/ApiContext'

const NavBar = () => {
    const { handleSubmit, handleChange } = useContext(ApiContext)

    return (
        <nav className="bg-dark fixed-top shadow" data-bs-theme="dark">
            <div className="container-fluid d-flex justify-content-between align-items-center py-2">

                <div className="bebas text-danger fs-3">Boolflix</div>

                <form onSubmit={handleSubmit} className="d-flex" role='search'>
                    <input type="search" className="form-control me-2" placeholder="Search..." onChange={handleChange} />
                    <button type="submit" className="btn btn-danger"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>

        </nav >
    )
}

export default NavBar
