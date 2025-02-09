import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import About from './pages/About';
import HomePage from './pages/HomePage';
import ItemDetails from './pages/ItemDetails';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/details' element={<ItemDetails />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
