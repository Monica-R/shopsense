import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function ProductCard({ item, onDeleting }) {

  return (
    <figure className='product-item'>
      <div className="img-item">
        <img src={`${item.thumbnail}`} alt={`item-${item.id}`} />
      </div>
      <h4 className='product-title'>{ item.title }</h4>
      <span className='category-item'>{ item.category }</span>
      <span className="product-price">{ item.price }</span>
      <button className='delete-button' onClick={() => onDeleting(item.id)}> <FontAwesomeIcon icon={faTrash}/> </button>
      <Link className='update-button' to={`/products/${item.id}`}> <FontAwesomeIcon icon={faEdit}/> </Link>
      <Link className='details-link' to="/" title="More info"> <FontAwesomeIcon icon={faEye}/> </Link>
    </figure>
  )
}

export default ProductCard