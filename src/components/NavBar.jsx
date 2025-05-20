import React from 'react'

const NavBar = ({ submit, change }) => {
    return (
        <nav className="bg-dark" data-bs-theme="dark">
            <div className="container-fluid d-flex justify-content-between align-items-center py-2">

                <div className="bebas text-danger fs-3">Boolflix</div>

                <form onSubmit={submit} className="d-flex" role='search'>
                    <input type="search" className="form-control me-2" placeholder="Search..." onChange={change} />
                    <button type="submit" className="btn btn-danger">Search</button>
                </form>
            </div>

        </nav >
    )
}

export default NavBar
