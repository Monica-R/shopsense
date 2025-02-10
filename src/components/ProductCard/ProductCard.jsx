import React from 'react'
import './ProductCard.css'

function ProductCard({ item }) {

  return (
    <figure className='product-item'>
      <div className="img-item">
        <img src={`${item.thumbnail}`} alt={`item-${item.id}`} />
      </div>
      <h4 className='product-title'>{ item.title }</h4>
      <span className='category-item'>{ item.category }</span>
      <span className="product-price">{ item.price }</span>
    </figure>
  )
}

export default ProductCard