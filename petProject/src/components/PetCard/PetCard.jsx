import React from 'react'
import Button from '../Button/Button'

const Cards = ({ id, name, description, age, image, breed }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Age: {age}</p>
      </div>
      <div className="container d-flex justify-content-center">
        <Button breed={breed}/>
      </div>
    </div>
  )
}

export default Cards
