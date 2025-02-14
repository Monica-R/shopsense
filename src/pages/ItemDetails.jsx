import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ItemDetails({ products }) {
  const { productId } = useParams();
  
  // buscamos el producto por la id
  const findProduct = products.find(product => product.id === Number(productId));

  return (
    <section className='product-section'>
      <div className='product'>
        <div className="product-img"><img src={findProduct.thumbnail} alt={findProduct.title} /></div>
        <div className="product-info">
          <h3 className='product__h3'>{findProduct.title}</h3>
          <span>{findProduct.brand}</span>
          <span>{findProduct.price}</span>
          <span>{findProduct.category}</span>
          <span>{findProduct.stock}</span>
          <p>{findProduct.description}</p>
        </div>
        <div className="links">
          <Link to="/products">Back to products</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
    </section>
  )
}

export default ItemDetails