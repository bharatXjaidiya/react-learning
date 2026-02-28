import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/detail/:id' element={<ProductDetails/>} />
    </Routes> 
  )
}

export default App
