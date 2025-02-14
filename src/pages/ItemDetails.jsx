import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

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
          <span className='brand'>{findProduct.brand}</span>
          <span className='price'>{findProduct.price}€</span>
          <span className='category'><FontAwesomeIcon icon={faTags}/>{findProduct.category}</span>
          <span className='stock'>Stock: {findProduct.stock}</span>
          <p className='description'>{findProduct.description}</p>
          <div className="links">
            <Link className='link' to="/products">Back to products</Link>
            <Link className='link' to="/">Home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetails