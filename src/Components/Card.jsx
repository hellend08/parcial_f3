import React from 'react'
import '../styles/Card.css'

function Card({nombre, pais, beatle}) {
    return (
        <div className='cardContent'>
            <h3>Registro Exitoso</h3>
            <h4>Nombre: {nombre}</h4>
            <h4>País: {pais}</h4>
            <h4>Beatle Favorito: {beatle}</h4>
        </div>
    )
}

export default Card
