import React, { useState } from 'react'
import productListArray from '/src/database/products.json';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'

function ProductList() {

  const [products, setProducts] = useState(productListArray);
  function mapProducts () {
    if (products.length === 0) return 'No hay productos';
    const mappingProducts = products.map((item, index) => {
      return index < 10 && (<ProductCard key={index} item={item}/>)
    });
    return mappingProducts;
  }
  return (
    <section className='product-list'>{ mapProducts() }</section>
  )
}

export default ProductList