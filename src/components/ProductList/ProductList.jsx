import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'

function ProductList({ productsList : products, onDeleting }) {

  function mapProducts () {
    if (products.length === 0) return 'No hay productos';
    const mappingProducts = products.map((item, index) => {
      return index < 10 && (<ProductCard key={index} item={item} onDeleting={onDeleting}/>)
    });
    return mappingProducts;
  }
  return (
    <section className='product-list'>{ mapProducts() }</section>
  )
}

export default ProductList