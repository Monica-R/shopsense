import React from 'react'

function ProductCard({ item }) {

  return (
    <figure className='product-item'>
      <div className="img-item">
        <img src={`${item.thumbnail}`} alt={`item-${item.id}`} />
      </div>
      <h4 className='product-title'>{ item.title }</h4>
      <p className='product-description'>{ item.description }</p>
      <span className="product-price">{ item.price }</span>
    </figure>
  )
}

export default ProductCard