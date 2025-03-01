import './App.css'
import { loadInitialProducts, saveProducts, deleteProduct } from './utils/products';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import About from './pages/About';
import HomePage from './pages/HomePage';
import ItemDetails from './pages/ItemDetails';
import NotFound from './pages/NotFound';
import AllProducts from './pages/AllProducts';
import EditProduct from './pages/EditProduct';
import AddProduct from './pages/AddProduct';
import Categories from './pages/Categories';

function App() {

  const [productsArray, setProductsArray] = useState(loadInitialProducts);

  const deletetingProduct = (productId) => {
    const updatedProducts = deleteProduct(productsArray, productId);
    setProductsArray(updatedProducts);
  }

  //Usamos useEffect para que ocurra un "efecto secundario" cada vez que el estado cambie
  // En este caso, si el estado se actualiza, useEffect recibirá y renderizará ese cambio
  useEffect(() => {
    saveProducts(productsArray);
  }, [productsArray]);



  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage products={ productsArray } onDeleting={ deletetingProduct }/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products/:productId/details' element={<ItemDetails products={ productsArray } />}/>
        <Route path='/products' element={<AllProducts productsList={ productsArray } onDeleting={deletetingProduct}/>} />
        <Route path='/products/:productId' element={<EditProduct products={ productsArray } setProducts={setProductsArray}/>}/>
        <Route path='/addproduct' element={<AddProduct products={ productsArray } setProducts={setProductsArray} />}/>
        <Route  path='/categories' element={<Categories products={ productsArray } />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Sidebar />
      <Footer />
    </>
  )
}

export default App
