import 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateProduct } from '../utils/products';

function EditProduct({ products, setProducts }) {

    // hago el uso de useParams desde la ruta creada para obtener el producto por la id
    const { productId } = useParams();

    //Busco el producto por la id sacada del useParams
    const productToEdit = products.find(product => product.id === Number(productId));

    // Si no existe, me saldrá un mensaje
    if (!productToEdit) return <div>Producto no encontrado</div>;

    const [nameProduct, setNameProduct] = useState(productToEdit.title);
    const [price, setPrice] = useState(productToEdit.price);
    const [brand, setBrand] = useState(productToEdit.brand);
    const [stock, setStock] = useState(productToEdit.stock);
    const [image, setImage] = useState(productToEdit.image);
    const [description, setDescription] = useState(productToEdit.description);

    function handleSubmit(event) {
        event.preventDefault();

        //Actualizando el producto con la función que tenemos en utils/products.js
        const updatedProducts = updateProduct(
            products, productToEdit.id, nameProduct, 
            price, brand, stock,
            image, description
        )

        setProducts(updatedProducts);
        alert('Se ha editado correctamente.');
    }
  return (
    <section className='edit-section'>
      <h2 className='edit-section__h2'>Edit product</h2>
      <form className="form-edit" onSubmit={handleSubmit}>
        <label htmlFor="name-product">Nombre del producto</label>
        <input type="text" id="name-product" placeholder={productToEdit.title} required onChange={(e) => setNameProduct(e.target.value)}/>
        <label htmlFor="num">Precio</label>
        <input type="number" id="num" required placeholder={productToEdit.price} onChange={(e) => setPrice(e.target.value)}/>
        <label htmlFor="brand">Marca</label>
        <input type="text" id="brand" placeholder={productToEdit.brand} onChange={(e) => setBrand(e.target.value)}/>
        <label htmlFor="stock">Stock</label>
        <input type="number" id="stock" placeholder={productToEdit.stock} required onChange={(e) => setStock(e.target.value)}/>
        <label htmlFor="image">Imagen</label>
        <input type="text" id="image" placeholder='Only URL Image' onChange={(e) => setImage(e.target.value)}/>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" placeholder={productToEdit.description} cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
        <input type="submit" value="Enviar"/>
      </form>
    </section>
  )
}

export default EditProduct
