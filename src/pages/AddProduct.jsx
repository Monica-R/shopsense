import 'react'
import { useState, useEffect } from 'react'
import { addProduct } from '../utils/products';
import { useNavigate } from 'react-router-dom';

function AddProduct({ products, setProducts }) {
    
    function handleSubmit (event) {
        event.preventDefault();

        const addedProduct = addProduct(
            products, title, description,
            category, price, stock,
            brand, image
        );

        setProducts(addedProduct);
        alert('Se ha añadido correctamente.');
        setRedirect(true);
    }
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [brand, setBrand] = useState("");
    const [image, setImage] = useState("");
    const [redirect, setRedirect] = useState(false); //para redirigirte
    const browse = useNavigate();

    useEffect(() =>{
        if (redirect) {
            setTimeout(() => {
                browse("/products");
                setRedirect(false);
              }, 1000);
        }
    }, [redirect, browse]);

  return (
    <section className='add-section'>
      <h2 className='add-section__h2'>Add product</h2>
      <form className="add-form-product" onSubmit={handleSubmit}>
        <label htmlFor="title">Product Name</label>
        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} required/>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
        <label htmlFor="category">Category</label>
        <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)}/>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" onChange={(e) => setPrice(e.target.value)} required/>
        <label htmlFor="stock">Stock</label>
        <input type="number" id="stock" required onChange={(e) => setStock(e.target.value)}/>
        <label htmlFor="brand">Brand</label>
        <input type="text" id="brand" onChange={(e) => setBrand(e.target.value)}/>
        <label htmlFor="thumbnail">Insert URL Image</label>
        <input type="text" id="thumbnail" onChange={(e) => setImage(e.target.value)}/>
        <input type="submit" value="Enviar" />
      </form>
    </section>
  )
}

export default AddProduct
