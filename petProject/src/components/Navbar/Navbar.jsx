import React from 'react'

const Navbar  = ({title}) => {
    return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container d-flex justify-content-center">
                <h1>{title}</h1>
            </div>
         </nav>
    )
}

export default Navbar