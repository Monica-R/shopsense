import React from 'react'

function Categories({ products }) {

    let categoriesArray = products.map(product => product.category);
    let uniquesCategories = new Set(categoriesArray);
    console.log(uniquesCategories)
    let uniqueCategoriesArray = Array.from(uniquesCategories);
  return (
    <div className='categories'>
      { uniqueCategoriesArray.map(category => <button>{category}</button>) }
    </div>
  )
}

export default Categories
