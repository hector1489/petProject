import React from 'react'
import Tags from '../Tags/Tags'

const Cards = ({ name, description, age, image, breed, color }) => {
  return (
          <div className="card">
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">Age: {age}</p>
            </div>
            <div className="container d-flex justify-content-center">
              <Tags text={breed} color={color} />
            </div>
          </div>
  )
}

export default Cards
