import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({book}) => {

    return (
    <div className="card shadow p-2 rounded">
        <img src={book.image} alt="" srcset="" className='img-fluid rounded'/>
        <div>
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
        </div>
        <Link to={`/ürün/${book.id}`} className='btn btn-danger'>Detaylı İncele</Link>
    </div>
  )
}

export default Card