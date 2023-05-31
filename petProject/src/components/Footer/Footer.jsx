import React from 'react'

const Footer = ({description}) => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container d-flex justify-content-center">
                <p>{description}</p>
            </div>
        </footer>
    )
}

export default Footer