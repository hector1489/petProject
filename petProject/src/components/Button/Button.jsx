import React from 'react'

const Button = ({ breed }) => {
    let buttonColor = '';

    if (breed === 'Border Collie') {
        buttonColor = 'btn-info'
    } else if (breed === 'Ovejero Australiano') {
        buttonColor = 'btn-warning'
    } else if (breed === 'Braco de Weimar') {
        buttonColor = 'btn-success'
    } else if (breed === 'Alusky') {
        buttonColor = 'btn-dark'
    } else {
        buttonColor = 'btn-primary'
    }

    return (
        <button type="button" className={`btn ${buttonColor}`}>
            {breed}
        </button>
    )
}

export default Button
