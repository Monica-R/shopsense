import React from 'react'
import ProductList from '../components/ProductList/ProductList'

function HomePage({products, onDeleting}) {
  console.table(products);
  return (
    <>
      <main className="main">
        <ProductList productsList={products} onDeleting={onDeleting}/>
      </main>
    </>
  )
}

export default HomePage