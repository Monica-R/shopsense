import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

function ProductCard({ item }) {

  return (
    <figure className='product-item'>
      <div className="img-item">
        <img src={`${item.thumbnail}`} alt={`item-${item.id}`} />
      </div>
      <h4 className='product-title'>{ item.title }</h4>
      <span className='category-item'>{ item.category }</span>
      <span className="product-price">{ item.price }</span>
      <button className='delete-button'> <FontAwesomeIcon icon={faTrash}/> </button>
      <button className='update-button'> <FontAwesomeIcon icon={faEdit}/> </button>
      <Link className='details-link' to="/">Detalles</Link>
    </figure>
  )
}

export default ProductCard