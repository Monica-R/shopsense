import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard';

function AllProducts({ productsList : products, onDeleting}) {

    function mapProducts () {
        if (products.length === 0) return 'No hay productos';
        const mappingProducts = products.map((item, index) => {
            return (<ProductCard key={index} item={item} onDeleting={onDeleting} />)
        });
        return mappingProducts;
    }

    return (
        <main className="main">
            <section className='product-list'>{ mapProducts() }</section>
        </main>
    )
}

export default AllProducts