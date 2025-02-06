import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import ProductList from '../components/ProductList/ProductList'

function HomePage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ProductList />
      <Footer />
    </>
  )
}

export default HomePage